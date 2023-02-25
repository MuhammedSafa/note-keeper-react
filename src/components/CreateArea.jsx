import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const signUp = async (event) => {
    event.preventDefault();
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        }
      } else {
        return {
          title: prevValue.title,
          content: value
        }
      }
    });
  }

  function expand() {
    setIsExpanded(true);
  }


  const useOutsideClick = (callback) => {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  function handleClickOutside() {
    setIsExpanded(false);
  }

  const ref = useOutsideClick(handleClickOutside);

  

  return (
    <div >
      <form ref={ref} className="create-note" onSubmit={signUp} onChange={handleChange} >
        
        {isExpanded && <input
          name="title"
          placeholder="Title"
          value={note.title}
        />}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={() => {
            props.onChecked(note.title, note.content);
            setIsExpanded(false);
            setNote({title: "", content:"" });
          }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )

}

export default CreateArea;
