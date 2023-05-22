import '../CSS/Live.css'
import Questions from '../data/TCSNQT1.js'
import React, { useState, useRef } from 'react'

import {
    BrowserRouter as Router, Routes, Route,
    Navigate, Link
} from 'react-router-dom';


function Live() {

    const Questionslist = Questions[0].QA;
    const [count, setCount] = useState(1);
    var score=0;
    const [response, setResponse] = useState([])
    // const [currentquestion, setCurrentquestion] = useState(1);
    const totalquestions = Questions[0].TotalQuestions;
    var currentquestion = 1;

    // className={isActive =>
    //     "nav-link" + (!isActive ? " unselected" : "")
    //   }

 // option on clicked
 function handleOptionClick(event)
 {


     document.getElementById("A").style.backgroundColor="rgb(23 172 236)"
     document.getElementById("B").style.backgroundColor="rgb(23 172 236)"
     document.getElementById("C").style.backgroundColor="rgb(23 172 236)"
     document.getElementById("D").style.backgroundColor="rgb(23 172 236)"


     var id = event.currentTarget.id;
 document.getElementById(id).style.backgroundColor="white"

 setResponse((prevresponse)=>[...prevresponse,id]);

 }

 var answerarr=new Array(parseInt(totalquestions));
 for(let i=0;i<answerarr.length;i++)
 {
     answerarr[i]=Questions[0].QA[i].A;
 }

 function calculatescore() {
     for(let i=0;i<answerarr.length;i++)
 {
     if(answerarr[i]==response[i])
     {
     score=score+1;
    
    }


 }



     
 }





    const next = (event) => {
        if (count < totalquestions) {
            setCount(count + 1);
            document.getElementById("grid-item" + currentquestion).style.backgroundColor = "lightgreen";


            document.getElementById("A").style.backgroundColor="rgb(23 172 236)"
            document.getElementById("B").style.backgroundColor="rgb(23 172 236)"
            document.getElementById("C").style.backgroundColor="rgb(23 172 236)"
            document.getElementById("D").style.backgroundColor="rgb(23 172 236)"
       
            // document.getElementById("grid-item"+currentquestion).style.borderColor = "red";

        }

    }

    const prev = () => {
        if (count >= 2)
            setCount(count - 1);

    }

    const clear = () => {
        document.getElementById("grid-item" + currentquestion).style.backgroundColor = "#ffffffcc";
    }


    const linkclicked = (e) => {
        var clicked = e.currentTarget.id;
        var sub = clicked.substring(9);
        setCount(sub)


    }

    function active(params) {

    }



    const Ref = useRef(null);


    const Examminutes = 2;
    const Examtime = Examminutes * 60;

    const [timer, setTimer] = useState('00:00:' + Examtime);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }

        else {
            window.location.href = "/Completion"
        }
    }


    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:00');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + Examtime);
        return deadline;
    }

    window.onload = () => {
        clearTimer(getDeadTime());
    }

    // useEffect(() => {
    //     onClickReset
    //     console.log("loaded");
    //  });


    //Video Player


//     var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }

    const handlesubmit = async() => {
        calculatescore();

        
       alert("totalscore is "+score)
        
      sessionStorage.setItem("totalscore", score);
      sessionStorage.setItem("totalquestions", totalquestions);
      const email=sessionStorage.getItem("email")
      const password=sessionStorage.getItem("password")
      const examname="1"

      

         const res = await fetch("/addexam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score,
          totalquestions,
          examname,
          email
          //name:name,email:email,phone:phone,password:password
          // It can also be written but as both are same we can write the above too
        }),
      });

      const data = await res.json();
  
      if (data.sucess === false) {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
      }
      else
      {window.alert(" Successfully submitted");
      console.log(" Successfully submitted");
      const userData = JSON.stringify(data.userLogin);
      console.log(data);
    }
      


       window.location.href = "/Completion"

    }



   



    return (

        <div className="Live" >

            <div className="live-heading">
                <h2> TCS NQT Exam   </h2>
                <p className="sections"  >
                    <p>Quantative</p>
                    <p>verbal</p>
                    <p>Reasoning</p>
                    <p>Time left : {timer}

                        {/* <button onClick={onClickReset}>Reset</button>  */}
                        {/* <label id="minutes"> 00</label>:<label id="seconds">00</label> */}

                    </p>
                    
                    <p onClick={handlesubmit} >SUBMIT</p>
                    <div id="cameracontainer">
                        <video autoplay="true" id="videoElement">

                        </video>
                    </div>

                </p>
            </div>

            <div className="examsection">

                <div className="questionsection" >
                    {/* <p>
                    Q1. lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <ol type="A">
                    <li>
                        apple
                    </li>
                    <li>
                        apple
                    </li> 
                    <li>
                        apple
                    </li> 
                    <li>
                        apple
                    </li>

                </ol>
                
                 */}



                    {Questionslist.filter(q => q.No == count).map((question) => {


                        // setCurrentquestion(parseInt(question.No))
                        currentquestion = question.No;
                        return (

                            <>


                                <div >
                                    <p>
                                        Q{question.No}.
                                    </p>
                                    <p>{question.Q}</p>
                                </div>




                                <ol type="A" className="Options-box">
                                    <li id="A" onClick={handleOptionClick} >
                                        {question.options[0]}
                                    </li>
                                    <li id="B" onClick={handleOptionClick}>
                                        {question.options[1]}
                                    </li>
                                    <li id="C" onClick={handleOptionClick}>
                                        {question.options[2]}
                                    </li>
                                    <li id="D" onClick={handleOptionClick}>
                                        {question.options[3]}
                                    </li>

                                </ol>

                            </>
                        )
                    })
                    }



                    <div className="Slider">
                        <button onClick={prev} >SAVE AND BACK</button>
                        <button onClick={clear}>CLEAR</button>
                        <button onClick={next} >SAVE AND NEXT</button>

                    </div>



                </div>

                <div className="questionpallette">
                    <div class="grid-container">
                        <div id="grid-item1" onClick={linkclicked}><a href="#">1</a></div>
                        <div id="grid-item2" onClick={linkclicked}><a href="#">2</a></div>
                        <div id="grid-item3" onClick={linkclicked}><a href="#">3</a></div>
                        <div id="grid-item4" onClick={linkclicked}><a href="#">4</a></div>
                        <div id="grid-item5" onClick={linkclicked}><a href="#">5</a></div>
                        <div id="grid-item6" onClick={linkclicked}><a href="#">6</a></div>
                        <div id="grid-item7" onClick={linkclicked}><a href="#">7</a></div>
                        <div id="grid-item8" onClick={linkclicked}><a href="#">8</a></div>
                        <div id="grid-item9" onClick={linkclicked}><a href="#">9</a></div>
                        <div id="grid-item10" onClick={linkclicked}><a href="#">10</a></div>
                        <div class="grid-item"><a href="#">11</a></div>
                        <div class="grid-item"><a href="#">12</a></div>
                        <div class="grid-item"><a href="#">13</a></div>
                        <div class="grid-item"><a href="#">14</a></div>
                        <div class="grid-item"><a href="#">15</a></div>
                        <div class="grid-item"><a href="#">16</a></div>
                        <div class="grid-item"><a href="#">17</a></div>
                        <div class="grid-item"><a href="#">18</a></div>
                        <div class="grid-item"><a href="#">19</a></div>
                        <div class="grid-item"><a href="#">20</a></div>
                        <div class="grid-item"><a href="#">21</a></div>
                        <div class="grid-item"><a href="#">22</a></div>
                        <div class="grid-item"><a href="#">23</a></div>
                        <div class="grid-item"><a href="#">24</a></div>
                        <div class="grid-item"><a href="#">25</a></div>

                    </div>
                </div>




            </div>







        </div>


    )
}

export default Live;
