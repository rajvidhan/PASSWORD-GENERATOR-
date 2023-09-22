import React from "react";


function Button({onClick,text,customclass}){
return <button onClick={onClick} className={customclass}>{text}</button>
}
export default Button