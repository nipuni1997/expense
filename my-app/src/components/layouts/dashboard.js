import React, { Fragment,useEffect,useState} from "react";
import classes from './dropdown.module.css';
import {Container,Row,Col,Card,ListGroup} from 'react-bootstrap';
import {Pie, Bar,Line} from 'react-chartjs-2';
import  Axios  from "axios";
import Dropdownlist from "./Dropdown";





const state = {
  
  labels: ['Food', 'Jewelery', 'Clothes',
           'Loan', 'Bill Payement','Other'],
  datasets: [
    {
      label: 'Wallet',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#4500B6'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#B21F00'
      ],
      data: [65, 59, 80, 81, 56,25]
      // {
      //   data.map((item)=>(
      //   ))
      // }
     
    }
  ]
}
const Dashboard =props=>{
//   const [chartData,setChartData]=useState({});
//  const [amount,setAmount]=useState([]);
//  const [category,setCategory]=useState([]);
 
//   const chart=()=>{
//   let cate =[];
//   let amou=[];
//     Axios.get("http://192.168.1.16:3001/getAll").then((response)=>{
//       console.log(response);
//       // for(const dataObj of response.data.data){
//       //   amou.push(parseInt(dataObj.amount))
//       //   // cate.push(dataObj.category)
//       // }

      
//       setChartData({
//         labels: ['sunday','monday'],
//         datasets: [
//           {
//             label: 'Wallet',
//             backgroundColor: [
//               '#B21F00',
//               '#C9DE00',
//               '#2FDE00',
//               '#00A6B4',
//               '#6800B4',
//               '#4500B6'
//             ],
//             hoverBackgroundColor: [
//             '#501800',
//             '#4B5000',
//             '#175000',
//             '#003350',
//             '#35014F',
//             '#B21F00'
//             ],
//             data:[20,30]
//           }
//         ]
//       })
//       // console.log(response.data[].amount);
// // setfilterData(response.data);

//   }).catch((e)=>{
//       console.log(e);
//   })



//   };

//  useEffect(()=>{
//    chart();
//  })


return <Fragment>
  
<Container>
  <Row >
    <Col >
    <div>
 <Dropdownlist/>
 </div>
 
   <div className={classes.instruction}>
   <Card border="secondary" className={classes.card}>
    <Card.Header>Maintain You Wallet</Card.Header>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">1. Set your wallet amount first.</div>
      
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">2. Add Your expenses.</div>
      
    </div>
   
  </ListGroup.Item>

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">3. Select the catgory according to your expense.</div>
      
    </div>
   
  </ListGroup.Item>

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">4. If expenses exceed wallet amount, you will get notified. </div>
      
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">5. You can update wallet amount at anytime. </div>
      
    </div>
   
  </ListGroup.Item>

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">6. You can update your expenses. </div>
      
    </div>
   
  </ListGroup.Item>
    </Card>
    </div>
 
    </Col>
    
    <Col >
    <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        {/* <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
      </div>
 
    </Col>
    <Col>
    <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Wallet',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Wallet',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    </Col>
  </Row>
</Container>

</Fragment>
}
export default Dashboard;