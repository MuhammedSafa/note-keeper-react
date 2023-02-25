import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Note(props) {
  if (props.id != 0) {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button style={{ backgroundColor: "transparent"}} onClick={() => {
          props.onDelete(props.id);
        }} ><DeleteForeverIcon /></button>
      </div>
    )
  }
}

export default Note;
