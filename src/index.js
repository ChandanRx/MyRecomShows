import React from "react";
import reactDOM from "react-dom";
import './index.css';
import Card from './Card'
import Ndata from "./Netflixapi";
import Time from './Time';

reactDOM.render(
<>
<div className="word"> 

<h1>
 🎥My
<span style={{color : ' rgb(212, 82, 143)' , fontWeight : 'bold' , textShadow: ' 3px 3px #111515' }}>
Recom
</span>Shows🤍 
<p className="b">there is my most recommended shows</p>
</h1>

</div>
<div className="time"> <Time/></div> 
{Ndata.map((val) => {
    return(
        <Card
             imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname} 
            link={val.link}
        />
    )
}

)}
</>
,document.getElementById("root")
);