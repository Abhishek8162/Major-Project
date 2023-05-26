import React from 'react'
import "../../CSS/Userdashboard/Statistics.css"
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

import { Pie } from "react-chartjs-2";


function Statistics() {


    

    var scorestats = [];
    var noqstats=[];
    var examno=[];
    var i=0;
    var examstats =JSON.parse(sessionStorage.getItem("examstats"))

    // {(examstats).map((exam)=>{
    //     scorestats[i]=  exam.score
    //     noqstats[i]=exam.totalquestions
    //     i++;
    // })
    // }

    for (i=0;i<examstats.length;i++) 
    {
      scorestats[i]=  examstats[i].score
        noqstats[i]=examstats[i].totalquestions
        examno[i]=examstats[i].examname
        
    }

    console.log(noqstats)


    const labels = noqstats;
    const bardata = {
      labels: labels,
      datasets: [
        {
          label: "Score vs Marks",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: scorestats,
        },
      ],
    }

    const piedata = {
      labels: examno,
      datasets: [
        {
          label: "Score vs Marks",
          
          data: scorestats,
          backgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          borderColor: "rgb(255, 99, 132)",
    hoverOffset: 4
        },
      ],
    }
    

  return (
    <div className="statistics-page" >
<h1 id="statistics-page-title">
    STATISTICS
</h1>

{/* {JSON.parse(examstats).map((exam)=>{
    return (<p>{exam.examname}</p>)
})} */}


<div className='statistics-bargraph'>
      <Bar data={bardata} />
    </div>

    <div className='statistics-piegraph'>
    <Pie data={piedata} />
    </div>

    







    </div>
  )
}

export default Statistics