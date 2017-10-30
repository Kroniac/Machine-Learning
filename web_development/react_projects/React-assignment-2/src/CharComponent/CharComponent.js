import React from 'react'

const CharComponent = (props) => {
   
   
    const style =  {
        display : "inline-block",
        padding : "16px",
        textAlign : "center",
        margin : "16px",
        border : "1px solid black" 
   }
  
   
   /*
   let chars = props.alter.split('');
   
     let characters = [];
     let x;
     for (x in chars) {
         characters.push(<p style={style} onClick={props.click} key={x}>{chars[x]}</p>);
         console.log(chars[x]);
         
     }
*/

    return(
       
        <div style={style}  onClick={props.clicked}>
            
            <p >{props.character}</p>
            
     
        </div>
       
    );
}

export default CharComponent;