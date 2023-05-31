import React from 'react'
import "../../CSS/Userdashboard/Feedback.css"


function Feedback() {
  return (
    <div className="Feedback-page">
        
        
                <div className ="feedback-content">

                  <form style={{height: "100%"}}>
                    <textarea className="feedback-textarea">Write your Feedback</textarea>
                    <input type="submit" className="feedback-submit"/>
                  </form>
                
                        
                </div>
                <div className="feedback-footer">
                    
                
                        
                </div>

    </div>
  )
}

export default Feedback