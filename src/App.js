import React from 'react';
import './App.css';
import { Nav } from "./component/homeComponents/Navbar/Nav";
import { ContactUs } from "./component/contact us/ContactUs";
import { Services } from "./component/services/Services";
import  {AllCouces}  from "./component/cources/AllCouces";
import { Footer } from "./component/footer/Footer";


function App() {
  return (
    <div>
      
        <Nav/>
        <ContactUs/>
        <Services/>
        <AllCouces/>
        <Footer/>

    
        
       

    
    </div>
  );
}

export default App;
