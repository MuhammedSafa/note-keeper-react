import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

  const [noteItems, setNoteItems] = useState([{
    title: "",
    content: ""
  }]);

  function addNote(title, content) {
    if (title && content) {
      setNoteItems(prevValue => {
        return [...prevValue, { title: title, content: content }]
      })
    }
  };


  function deleteItem(id) {
    setNoteItems(prevItems => {
      return prevItems.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onChecked={addNote} />
      {noteItems.map((item, index) => (<Note key={index} title={item.title} content={item.content} onDelete={deleteItem} id={index} />))}
      <Footer />
    </div>
  );
}

export default App;
