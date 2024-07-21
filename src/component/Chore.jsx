import React from "react";
import './stylesheets/Chore.css'
import { MdDeleteForever } from "react-icons/md";


export default function Chore({id,text, done, completedChore, deleteChore}) {
  return (
    <div className={ done? "chore-container done" : "chore-container" }>

      <div className="chore"
      onClick={() => completedChore(id)}>
        {text}
      </div>
      <div className="chore-icon-container">
      <MdDeleteForever className="chore-icon"
      onClick={() => deleteChore(id)}/>
      </div>
    </div>
  )

}
