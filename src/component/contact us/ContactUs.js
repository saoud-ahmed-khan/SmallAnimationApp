import React from 'react'
import Lottie from "react-lottie";
import pic from "../../Animations/contactus.json";
import { Form } from "./Form";
import './contact.css'
import useWebAnimations from "@wellyshen/use-web-animations";




export const ContactUs = () => {
  const { ref: men } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0) rotate(-3deg" },
      { transform: "translateX(30px) rotate(3deg" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      direction: "alternate", // Run the animation forwards and then backwards
      iterations: Infinity, // Repeat once
      
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div className="maincontact">
      <div className="Contactpic">
        <Lottie options={{ animationData: pic, loop: true, autoplay: true, rendererSettings: { preserveAspectRatio:"xMidYMid slice", }, }}
          height={"100%"}
          width={"100%"}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "800px",
          }}
        />
      </div>

      <div  ref={men}>
        <Form></Form>
      </div>
    </div>





  )
}
