import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleExpand() {
    setExpanded(true)
  }

  return (
    <div>
      <form onClick={handleExpand} className="create-note">

        {isExpanded && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
        <Fab color="success" onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
