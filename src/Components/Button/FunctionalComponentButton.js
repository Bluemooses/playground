import React from 'react';

function onClickFunction() {
   console.log("We clicked functional Button component")
}

export function FunctionalComponentButton({...props}){
   return (
       <button onClick={onClickFunction}>
           {props.text}
       </button>
   );
};

 

