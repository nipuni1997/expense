import React, { Fragment } from 'react';
import Header from '../layouts/header';

import 'bootstrap/dist/css/bootstrap.min.css';

import Expenseform from '../layouts/page1';

export default function Dashboard() {
 
 
  return (
    <Fragment>
  <Header/>
 
  <Expenseform/>

  </Fragment>
    
   );
}

// export default App;
