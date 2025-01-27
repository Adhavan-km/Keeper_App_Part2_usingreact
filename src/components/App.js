import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteterm) => (
        <Note
          key={noteterm.id}
          title={noteterm.title}
          content={noteterm.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
