import React from "react";
import  "./Hero.css"
import icon from "./image1.png"
import Icon from "./image2.png"


const Hero = () => {

    return ( 
            
          <>
             <div className="presentation">
                <div className="introduction">
                <div className="intro-text">
                   <h1>Start new...Today!</h1>
                     <br />
                   <p> Vivamus vestibulum elit efficitur, elementum <br /> sapien a, 
                       aliquet ipsum
                    </p>
                 </div>
                </div> 
             <div className="cove">
                  <img src ={icon} alt="image" />
             </div> 
             </div>
             <div className="title">
                <h2>Lorem ipsum something</h2>
              </div>
             <div className="section" >
               

                 <div className="cover">
                    <img src={Icon}  alt="image" />
                 </div>
                 <div className="intro-text">
                   <h1>New Product, new Story</h1>
                   <br />
                   <p>
                     Vivamus vestibulum elit efficitur, elementum sapien a,<br />
                     aliquet ipsum. Fusce placerat dolor id cursus finibus. <br />
                     Aliquam tempus facilisis ipsum sit amet molestie. <br />
                     Proin lobortis eros a turpis tempor, sed ornare augue aliquam.<br /> 
                     Donec imperdiet nulla ut placerat molestie. In hendrerit <br />
                     blandit ante facilisis ultrices. Mauris vulputate metus sit <br />
                     amet ex dignissim, sed hendrerit nunc rhoncus.<br />
                   </p>
                 
                 </div>
             </div>
            </>
     );
}
 
export default Hero;