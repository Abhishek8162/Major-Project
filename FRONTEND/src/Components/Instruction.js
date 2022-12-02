import '../CSS/Instruction.css'

function Instruction()
{
    return(

        <>
         <div className="instructiontitle">
           <h2> INSTRUCTION</h2>
        </div>

        <div className="instructiondetails">
            <p>1. The total duration of the examination is 180 min .</p>
            <p>2. Your Clock is set at the server . 
                You need not Submit the examination .</p>
            <p>3. The Question Pallete on the right side of the screen will 
                show the status of each Question.
            </p>


        </div>


        <div className="instructioncolor" >
            

        </div>


            <div className="accept" >

            < button  onClick={()=>{window.location.href="/Live"} } className="acceptbtn">
                Begin Exam
            </button>

            </div>
        
        
        
        </>
    )
}

export default Instruction;