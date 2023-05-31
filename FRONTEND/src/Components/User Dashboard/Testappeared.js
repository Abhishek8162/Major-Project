import React from 'react'
import "../../CSS/Userdashboard/Testappeared.css"

function Testappeared() {
  
  var scorestats = [];
    var noqstats=[];
    var examno=[];
    var i=0;
  var examstats =JSON.parse(sessionStorage.getItem("examstats"))

  
  for (i=0;i<examstats.length;i++) 
  {
    scorestats[i]=  examstats[i].score
      noqstats[i]=examstats[i].totalquestions
      if(examstats[i].examname=="1")
      examno[i]="Accenture Test";
      else if(examstats[i].examname=="2")
      examno[i]="TCS NQT";
      else
      examno[i]="InfiQT";
  }




  return (
    <div className="Testappeared-page">
    <h1 style={{color:"black",textAlign:"center",fontSize:"3em"}}>Test Appeared</h1> 

<div className="Testappeared-area" style={{marginBottom: "2em",}}>

{ examstats.map( (exam,a)=>
<div className="Testappeared-list">

  
<div className="Testappeared-name">
   {
   examno[a]
   } 
   </div>
   <div className="Testappeared-details">
   <span>{exam.score}</span>
   <span>{exam.totalquestions}</span>
   <span>{exam.score/exam.totalquestions*100}%</span>
   </div>

</div>)}

</div>




      
    </div>
  )
}

export default Testappeared