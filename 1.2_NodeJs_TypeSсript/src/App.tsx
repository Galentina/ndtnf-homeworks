import React, { useState } from 'react'
import './App.css'
import Library from "./Library";

function App() {
  const [allBooks, setAllBooks] = useState(Library)

  return (
    <div className="App">
      <header className="">
        <h1>All books</h1>
      </header>
      <div className="library">
        { allBooks.map(el => (
          <div className="book">
            <img src={el.cover} className="image" alt="el.name" />
            <h2>{ el.name }</h2>
            <p>{ el.author }</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
