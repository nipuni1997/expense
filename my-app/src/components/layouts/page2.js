import React, { Fragment,useState ,useEffect} from "react";
import classes from './dropdown.module.css';
import {Container,Row,Col,Dropdown,ListGroup,Badge,Button,Form,Collapse,Card} from 'react-bootstrap'
import Dropdownlist from "./Dropdown";
import Axios from "axios";
import Image from 'react-bootstrap/Image';
import wallet from './wallet.jpg'; 

const Page2 =props=>{
    const [open, setOpen] = useState(false);
  
    const [newAmount,setNewAmount]=useState('');
    const [dataAmount,setAmountData]=useState([]);
    const [data,setData]=useState([]);
    let totalexpense=0;
    
    useEffect(()=>{
  
      Axios.get("http://192.168.1.16:3001/getAll").then((response)=>{
        console.log(response);
        setData(response.data);
        // console.log(response.data[].amount);
// setfilterData(response.data);

    }).catch((e)=>{
        console.log(e);
    })

      Axios.get("http://192.168.1.16:3001/getAmount").then((response)=>{
          console.log(response);
          setAmountData(response.data);
// setfilterData(response.data);

      }).catch((e)=>{
          console.log(e);
      })
      
  },[])

    const updateWallet =()=>{
      Axios.put("http://192.168.1.16:3001/updateWallet",{amount:newAmount}).then((response)=>{
        
        // setAmountData(dataAmount.map((val)=>{
        //   return val.id === id?{
        //     id:val.id,
           
        //     amount:newAmount,
           
        //   }
        //   :val;
        // })
        // );
      });
    };

    const newamountHandler=(event)=>{
      setNewAmount(event.target.value)
          }

return <Fragment>
    
<Container>
  <Row >
    <Col >
    
   <Dropdownlist/>

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
    {/* <Col xs={6}>2 of 3</Col> */}
    {
        dataAmount.map((item)=>(
    <Col xs={6}>
   <Image src={wallet}  className={classes.image} />
    <Card border="secondary" className={classes.card}>
    <Card.Header>Wallet</Card.Header>
    <Card.Body>
      <Card.Title className={classes.amountTitle}>Amount:<b> Rs.{item.amount}/=</b></Card.Title>
      <Card.Text>
      Set Your Maximum Wallet Amount and Manage Your Expenses As You Want
      </Card.Text>
    </Card.Body>
  </Card>
  <Button className={classes.button}   onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>Update Wallet Amount</Button>
  <div>
  <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
<Form className={classes.form}>
  <Form.Group onChange={newamountHandler}  >
    <Form.Label>Amount: Rs.{item.amount}/=</Form.Label>
    <Form.Control type="numaric" placeholder="Enter Amount" onChange={newamountHandler} />
   
  </Form.Group>


 
  <Button className={classes.button} type="submit" onClick={()=>updateWallet()}>
    Update
  </Button>
</Form>
</div>
</Collapse>
</div>
      
    </Col>
      ))}
    <Col>
    <Card border="secondary" className={classes.card}>
    <Card.Header>Categories</Card.Header>
    <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Food</div>
      
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Clothes</div>
      
    </div>
  
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Jewellary</div>
     
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Clothes</div>
     
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Loan</div>
     
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Bill Payment</div>
     
    </div>
   
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Others</div>
     
    </div>
   
  </ListGroup.Item>
</ListGroup>
</Card>

<Card border="Secondary" className={classes.card} >
            <Card.Header>Wallet</Card.Header>
       
            {
            data.map((item)=>(
              totalexpense+= item.amount
              
            ))}
            <Card>Total Expenses:<b>Rs.{totalexpense}/=</b></Card>
            

        </Card>
      

    </Col>
  </Row>
</Container>


</Fragment>
}
export default Page2;