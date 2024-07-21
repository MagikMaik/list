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

  const DeleteChore = id => {
    const updatedChores = chores.filter(chore => chore.id !== id)
    setChores(updatedChores)
  }

  const CompleteChore = id => {
    console.log('completed')
    const updatedChores = chores.map(chore => {
      if (chore.id === id) {
        chore.done = !chore.done
      }
      return chore
    })
    setChores(updatedChores)
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
          done={chore.done}
          deleteChore={DeleteChore}
          completedChore={CompleteChore}
        />
        )
      }
    </div>
    </Fragment>
  )

}
