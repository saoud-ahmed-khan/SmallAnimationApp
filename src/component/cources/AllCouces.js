import React from 'react'
import { Course } from "./Course";
import Blockchain from "../../Animations/blockchain.json"
import Cloud from "../../Animations/cloudcomputing.json";
import Web from "../../Animations/webdevolopment.json";
import "./course.css"




export const AllCouces = () => {
   
    return (
        <div>
          
        <div className="allcources">
            <Course pic={Blockchain} name="BLOCKCHAIN" />
            <Course pic={Cloud} name="CLOUD COMPUTING" />
            <Course pic={Web} name="WEB DESIGNING" />
        </div>
       
        </div>
    )
}
