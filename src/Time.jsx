import React, { useState } from "react";

const Time = () =>{

let time = new Date().toLocaleTimeString();
let date = new Date().toLocaleDateString();

const [Ctime , setCtime] = useState();
const [Cdate , setCdate] = useState();

const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    date = new Date().toLocaleDateString();
    setCtime(time);
    setCdate(date)
}
setInterval(updateTime,1000);
    return(
        <> 
        <div>
            <h1> {Ctime} </h1>
            <div>
               <h1> {Cdate} </h1>
            </div>
        </div>    
        </>
    )
}

export default Time;