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


    </div>
  )
}

export default Completion