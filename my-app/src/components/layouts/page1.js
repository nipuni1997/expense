import React, { Fragment,useState,useEffect } from "react";
import classes from './dropdown.module.css';
import Axios from 'axios';
import {Container,Row,Col,Card,ListGroup,Badge,Button,Form,Collapse,FloatingLabel} from 'react-bootstrap';
import Dropdownlist from "./Dropdown";


const Page1 =props=>{
    const [open, setOpen] = useState(false);
    const Category=[{id:1,name:'Food'},{id:2,name:'Jewelery'},{id:3,name:'CLothes'},{id:4,name:'Loan'},
    {id:5,name:'Transport'},{id:6,name:'Bill Payment'},{id:7,name:'Other'}];
    const[categoryVal,setCategory]=useState('');
    const[amoutVal,setAmount]=useState('');
    const[dateVal,setDate]=useState('');
    const [search, setSearch] = useState('');
    const [data,setData]=useState([]);
    const [dataAmount,setAmountData]=useState([]);
    const [newAmount,setNewAmount]=useState('');
    let totalexpense=0;

    useEffect(()=>{
  
  
      Axios.get("http://192.168.1.16:3001/getAmount").then((response)=>{
          console.log(response);
          setAmountData(response.data);
// setfilterData(response.data);

      }).catch((e)=>{
          console.log(e);
      })
      Axios.get("http://192.168.1.16:3001/getAll").then((response)=>{
        console.log(response);
        setData(response.data);
        // console.log(response.data[].amount);
// setfilterData(response.data);

    }).catch((e)=>{
        console.log(e);
    })

  },[])

  const deleteExpense = (id)=>{
    Axios.delete(`http://192.168.1.16:3001/deleteExpense/${id}`).then((response)=>{
      setData(data.filter((item)=>{
return item.id !== id;
      })
      );
    });
  };
  const updateExpense =(id)=>{
    Axios.put("http://192.168.1.16:3001/updateExpense",{amount:newAmount,id:id}).then((response)=>{
      
      setData(data.map((val)=>{
        return val.id === id?{
          id:val.id,
          category:categoryVal,
          amount:newAmount,
          date:dateVal
        }
        :val;
      })
      );
    });
  };
    
    const amountHandler=(event)=>{
setAmount(event.target.value)
    }

    const CategoryHandler=(event)=>{
setCategory(event.target.value);
    }
    const dateHandler=(event)=>{
      setDate(event.target.value);

    }

    const newamountHandler=(event)=>{
      setNewAmount(event.target.value)
          }
    const submitHandler=(event)=>{
event.preventDefault();
// const expense={
  Axios.post('http://192.168.1.16:3001/addExpense',{
  category:categoryVal,
  amount:amoutVal,
  date: new Date(dateVal)
} ).then((response)=>{
  console.log(response);
 
   
  }
 
  
);


setAmount('');
setCategory('');
setDate('');
    }
    // const isExceed=()=>{
    //   {
    //     dataAmount.map((item)=>(
    //       (item.amount <= totalexpense)
    //     ))

    // }


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
    {/* <Col xs={6}>2 of 3</Col> */}
    <Col xs={6}>
    <Form.Control type="text" placeholder="Search" className={classes.search} value={search}
        onChange={(text)=>setSearch(text.target.value)}/>
          {
        data.filter((val) => {
          if(search === ""){
            return val
          }else if (val.category.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        }).map((val)=>(
    <ListGroup as="ol"  key={val.id}>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{val.category}</div>
      <div>
      {val.description}</div>
      {val.date}
    </div>
    <Badge variant="Primary" pill className={classes.badge}>
      Rs.{val.amount}/=
    </Badge>
    <Button variant="danger" onClick={()=>deleteExpense(val.id)} className={classes.delete}>Delete</Button>
   
  </ListGroup.Item>
  <div>
      <input placeholder="Update Expense amount" className={classes.input} onChange={newamountHandler} ></input>
    </div>
    <Button className={classes.buttonUpdate} variant="warning"onClick={()=>updateExpense(val.id)}  >Update</Button>

</ListGroup>
        ))}

<div>
<Collapse in={open} dimension="width">
          <div id="example-collapse-text">
<Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" >
    <Form.Label>Category</Form.Label>
    <FloatingLabel controlId="floatingSelect" >
  <Form.Select aria-label="Floating label select example" onChange={CategoryHandler} value={categoryVal}>
    <option>Select Category</option>
    <option value="Food">Food</option>
    <option value="Jewellery">Jewellary</option>
    <option value="Clothes">Clothes</option>
    <option value="Loan">Loan</option>
    <option value="Bill Payment">Bill payment</option>
    <option value="Other">Other</option>
  </Form.Select>
</FloatingLabel>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" onChange={amountHandler}  >
    <Form.Label >Amount</Form.Label>
    <Form.Control type="number" placeholder="Amount" min="0.01" step="0.01" value={amoutVal}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword" onChange={dateHandler}  >
    <Form.Label >Date</Form.Label>
    <Form.Control type="date" placeholder="Date" min="2021-01-01" max="2022-01-01" value={dateVal}/>
  </Form.Group>
  
  <Button className={classes.button} type="submit" onChange={submitHandler}>
    Submit
  </Button>
</Form>
</div>
</Collapse>
</div>


    </Col>
    <Col>
   <Button className={classes.button}   onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>Add Expenses</Button>
 
        <Card border="Secondary" className={classes.card} >
            <Card.Header>Wallet</Card.Header>
            {
        dataAmount.map((item)=>(
            <Card key={item.id}>Wallet Value:<b> Rs.{item.amount}/=</b></Card>
            ))}
            {
            data.map((item)=>(
              totalexpense+= item.amount
              
            ))}
            <Card>Total Expenses:<b>Rs.{totalexpense}/=</b></Card>
            

        </Card>
      
    

<Card border="secondary" className={classes.card}>

    <Card.Header>Categories</Card.Header>
    {
        Category.map((item)=>(
    <ListGroup as="ol" >
      
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
     
    <div className="ms-2 me-auto">
      <div className="fw-bold" key={item.id}>{item.name}</div>
      
    </div>
 
   
  </ListGroup.Item>


</ListGroup>
   ))
  }
</Card>

    </Col>
  </Row>
</Container>

</Fragment>
}
export default Page1;