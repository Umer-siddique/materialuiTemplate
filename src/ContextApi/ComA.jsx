import React, { useEffect, useState } from "react";

const ComA=()=>{

 const [num,setNum]=useState(0);

 useEffect(()=>{
     document.title=`React app ${num}`;
 })

    return(
        <>
        <button onClick={()=>setNum(num+1)}>Increment Num : {num}</button>
        </>
    )
}
export default ComA;