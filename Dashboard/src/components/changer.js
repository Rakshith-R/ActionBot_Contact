import React,{useState,useEffect,useCallback} from 'react';

export default  function Changer (props){
  const colors=['#3dca3d','#f38615','#1530f3','#db15f3'];
  const [i,si]=useState(0)
  const change=useCallback(()=>{si(i=>(i+1)%props.names.length)},[si])
  useEffect(()=>{
    console.log('This will run every second!');
    const timeout=setInterval(()=>{
      change();
    },1500)
    return ()=>clearInterval(timeout)
  },[])
  return(<span style={{fontSize:'1.4em',fontWeight:'500',color:colors[i]}}>{props.names[i]}</span>)
}
