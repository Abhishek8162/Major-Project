import React from 'react'

function Help() {
  return (

    
    <div className="helppage" style={{overflow:"auto",background:"white", width: "100%"}}>
            <div className="instructiontitle" style={{textAlign:"center",}}>
                <h2>HELP</h2>
            </div>

            <div className="instructiondetails" style={{width:"80%"}}>
                <p>1. The total duration of the examination is 180 min .</p>
                <p>2. The clock will be set at the server. The countdown timer in the
                    top right corner of screen will display the remaining time available for you
                    to complete the examination. When the timer reaches zero, the examination will
                    end by itself. You will not be required to end or submit your examination..</p>
                <p>3. The Question Pallete on the right side of the screen will
                    show the status of each Question.
                </p>
                <h2>
                    Navigating to a Question:

                </h2>
                <p> To answer a question, do the following:</p>

                <ol type="a">
                    <li>
                        Click on the question number in the Question Palette at the right of your screen to
                        go to that numbered question directly. Note that using this option does NOT save your
                        answer to the current question.
                    </li>

                    <li>
                        Click on Save & Next to save your answer for the current question and then go to the
                        next question.
                    </li>
                </ol>

                <h2>
                    Answering a Question:
                </h2>

                <p>
                    Procedure for answering a multiple choice type question:
                </p>

                <ol type="a">

                    <li>

                        To select you answer, click on the button of one of the options.

                    </li>

                    <li>
                        To deselect your chosen answer, click on the button of the chosen option
                        again or click on the Clear Response button
                    </li>

                    <li>
                        To change your chosen answer, click on the button of another option

                    </li>
                    <li>
                        To save your answer, you MUST click on the Save & Next button.
                    </li>

                    <li>
                        To change your answer to a question that has already been answered,
                        first select that question for answering and then follow the
                        procedure for answering that type
                        of question.
                    </li>





                </ol>


                








            </div>


            <div className="instructioncolor" >


            </div>


            



        </div>
  )
}

export default Help