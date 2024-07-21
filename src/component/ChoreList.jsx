import React, { Fragment, useState } from "react";
import Form from "./Form";
import './stylesheets/ChoreList.css'
import Chore from "./Chore";


export default function ChoreList() {

  const [ chores, setChores] = useState([])

  const AddChore = chore => {
    if (chore.text.trim()) {
      chore.text = chore.text.trim()

      const updatedChores = [chore, ...chores];
      setChores(updatedChores)
    }
  }

  return (
    <Fragment>
    <Form onSubmit={AddChore} />
    <div className="chores-list">
      {
        chores.map((chore) =>
          <Chore
          key={chore.id}
          id={chore.id}
          text={chore.text}
        />
        )
      }
    </div>
    </Fragment>
  )

}
