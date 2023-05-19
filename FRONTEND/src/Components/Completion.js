import React from 'react'
import "../CSS/Completion.css"

function Completion() {

    const name="Abhishek Kumar"
  return (
    <div className="Completionpage">

        <h1>
            Thank You {sessionStorage.getItem("Name")}

        </h1>
        <h3>
            You have successfully submitted the test !
        </h3>

        <p><b>Your Score is : {sessionStorage.getItem("totalscore")} 
        &nbsp;  out of  {sessionStorage.getItem("totalquestions")} </b></p>

        <p><b>Percentage : {sessionStorage.getItem("totalscore")/sessionStorage.getItem("totalquestions")*100} % </b></p>
        


    </div>
  )
}

export default Completion