import cv2
import requests

# Initialize the video capture
video_capture = cv2.VideoCapture(0)

# Load the pre-trained Haar cascade classifier for detecting faces
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Get the initial frame from the video stream
_, frame = video_capture.read()
height, width, _ = frame.shape

# Set the position and size of the red sign
sign_x = int(width/2) - 100
sign_y = int(height/2) - 100
sign_width = 400
sign_height = 400

# Define the color and thickness for the red sign
sign_color = (0, 0, 255)  # Red color
sign_thickness = 2

# Backend API endpoint
backend_api_url = "http://localhost:4000/send_message"  

prev_num_persons = 0
def send_message_to_backend(num_persons):
    # Send a POST request to the backend API
    payload = {'message': f'{num_persons} persons detected','persons':num_persons}
    response = requests.post(backend_api_url, json=payload)
    if response.status_code == 200:
        print("Message sent to backend successfully.")
    else:
        print("Failed to send message to backend.")

count=0

while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()
    
    # Convert the frame to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect faces in the grayscale frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    
    num_persons = len(faces)
    
    if num_persons == 1:
         # one person detected, draw green rectangle around the face
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
    elif num_persons > 1:
        # Persons are detected, draw red rectangles around the faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), sign_color, 2)
    else:
        # No person detected, draw a red sign
        cv2.rectangle(frame, (sign_x, sign_y), (sign_x+sign_width, sign_y+sign_height), sign_color, sign_thickness)
        sign_x += 5  # Move the sign position
        sign_y += 5
        
        # Adjust the sign position within the frame bounds
        if sign_x + sign_width > width or sign_y + sign_height > height:
            sign_x = int(width/2) - 100
            sign_y = int(height/2) - 100
        
    # Display the resulting frame
    cv2.imshow('Video', frame)
    
    # Send message to backend when there is a change in the number of persons detected
    if num_persons != prev_num_persons:
        count=count+1
    if num_persons != prev_num_persons and count==30:
        send_message_to_backend(num_persons)
        count=0
    prev_num_persons = num_persons
    
    # Exit the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture and close the OpenCV windows
video_capture.release()
cv2.destroyAllWindows()
