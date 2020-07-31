import React from 'react'
import Lottie from "react-lottie";
import { ServiceContent } from "./serviceContent";
import pic from "../../Animations/services.json";
import "./service.css"
import useWebAnimations from "@wellyshen/use-web-animations";


export const Services = () => {
    const { ref: men } = useWebAnimations({
        keyframes: [
          { transform: "scale(0) " },
          { transform: "scale(1)" },
        ],
        timing: {
          // delay: 500, // Start with a 500ms delay
          duration: 5000, // Run for 1000ms
          direction: "alternate", // Run the animation forwards and then backwards
          iterations: Infinity, // Repeat once

          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    return (
<div className="servicemain" >
        <div className="content">
            <ServiceContent></ServiceContent>
        </div>
        <div  className="Servicepic">
        <Lottie options={{ animationData: pic, loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice", }, }}
                height={"100%"}
                width={"100%"}
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "700px",
                }}
            />
        </div>
</div>

    )
}
