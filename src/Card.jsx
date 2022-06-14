import React from "react";

function Card(Props){
   
   return (
       <React.Fragment>
           <div className="cards">
           <div className="card">
           <img src={Props.imgsrc} alt="mypic" className="card_img" />
           <div className="card_info">
               <span className="card_catagories">{Props.name}</span>
               <h3 className="card_title">{Props.sname}</h3>
               <a href={Props.link} target="_blank" rel="noreferrer">
                   <button>Watch Now</button>
               </a>
               
           </div>
           </div>
           </div>

           
       </React.Fragment>
   );

}

export default Card;