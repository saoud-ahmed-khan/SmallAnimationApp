import React from 'react';
import './App.css';
import { Nav } from "./component/homeComponents/Navbar/Nav";
import { ContactUs } from "./component/contact us/ContactUs";
import { Services } from "./component/services/Services";
import  {AllCouces}  from "./component/cources/AllCouces";


function App() {
  return (
    <div>
      
        <Nav/>
        <ContactUs/>
        <Services/>
        <AllCouces/>

    
        
       

    
    </div>
  );
}

export default App;
