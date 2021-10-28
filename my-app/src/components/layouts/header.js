import React, { Fragment } from "react";
import classes from './header.module.css';
import { Container,Navbar } from "react-bootstrap";
const Header = props =>{
    return <Fragment>
        {/* <header className={classes.header}>
            <h1 className={classes.h1}>Expences Tracker</h1>
            <div className={classes.walletname}>
                
                <h4>Rs.10000.00</h4>
                </div></header> */}
                <Navbar>
  <Container className={classes.header}>
    <Navbar.Brand href="#" data-rr-ui-event-key="./page2" class="SideNav-TocSubLink-module--cls2--kiclr SideNav-TocSubLink-module--cls1--1KyVl SideNav-TocLink-module--cls2--3Ynil SideNav-TocLink-module--cls1--2TXMz nav-link"><h1>Expences Tracker</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className={classes.walletname}>
        Nipuni's Wallet 
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    </Fragment>

};
export default Header;