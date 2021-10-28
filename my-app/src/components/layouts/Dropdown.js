import React, { Fragment,useState } from "react";
import classes from './dropdown.module.css';
import {Container,Row,Col,Dropdown,ListGroup,Badge,Button,Form,Collapse} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Dropdownlist =props=>{
    const [open, setOpen] = useState(false);


return <Fragment>
   
<Container>

    <Dropdown.Menu show className={classes.dropdown}>
  {/* <Dropdown.Header>Dropdown header</Dropdown.Header> */}
  <Dropdown.Item eventKey="2"><Link to='/' className={classes.link}>Dashboard</Link></Dropdown.Item>
  <Dropdown.Item eventKey="3"><Link to='/expense' className={classes.link}>Expenses</Link></Dropdown.Item>
  <Dropdown.Item eventKey="3"><Link to='/wallet' className={classes.link}>My Wallet</Link></Dropdown.Item>
</Dropdown.Menu>
  
</Container>

</Fragment>
}
export default Dropdownlist;