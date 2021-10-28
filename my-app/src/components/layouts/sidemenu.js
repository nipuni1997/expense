import React, { Fragment } from "react";
import classes from './sidemenu.module.css';
import {Form,Button} from 'react-bootstrap'
const Side =props=>{
//     return <Fragment>
// <div className={classes.side}>
//     <h4>Add Expences</h4>
// </div>
//     </Fragment>

return <Fragment>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Fragment>
}
export default Side;