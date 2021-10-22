import './App.css';
import React, { useState } from 'react'




function App() 
{
    const[inputlist,setinputlist]=useState("");
    const[items,setitems]=useState([]);
    const[inputdate,setinputdate]=useState("");
   
   
   
    function itemEvent(e){
    setinputlist(e.target.value);
    }




    function listofitem(){
    if(inputlist===""){
      alert("please add task");
    }
    else{
     setitems((old)=>{
       return[...old,[inputlist,"  ",inputdate]];

     });
    }
     setinputlist('');
     setinputdate('');
   }



   function dateEvent(e){
     setinputdate(e.target.value)
   }


  function deleteitem(id){
    console.log("deleted");
    
    setitems((old)=>{
      return old.filter((arre,index)=>{
        return index!==id;
      });
    });
  }





  return (
    <>
  
<div id="myDIV" className="header">
    <h2>My To Do List</h2>
    <input type="text" id="myInput" onChange={itemEvent} value={inputlist} placeholder="add task"/>
<input type="datetime-local" id="mydate" onChange={dateEvent} value={inputdate}/>
    < button onClick={listofitem} className="addBtn">Add</button>
    <ul>
      {
      items.map((val,index)=>{
        return <li>{val}{<span id="span1" onClick={()=>deleteitem(index)}>X</span>}</li>
      })

      }
      
      
    </ul>
   </div>

    
    
    </>
  );
}
export default App;
