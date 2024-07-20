import React from "react";
import './stylesheets/Chore.css'
import { MdDeleteForever } from "react-icons/md";


export default function Chore({text, done}) {
  return (
    <div className={ done? "chore-container done" : "chore-container" }>

      <div className="chore">
        {text}
      </div>
      <div className="chore-icon-container">
      <MdDeleteForever className="chore-icon"/>
      </div>
    </div>
  )

}
