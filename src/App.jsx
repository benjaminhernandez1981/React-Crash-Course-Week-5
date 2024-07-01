import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState } from "react";

function App() {
  /**
   * 1. Create a "Counter.jsx" component
   * 2. Create a defautl `count` of 0
   * 3. Create a button to increment `count` by 1
   * 4. Create a button to decrement `count` by 1
   * 5. Import your Counter in App.jsx and test it
   */
  return <Counter />
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs" />
      </div>
      {showModal && <Modal title="Confirm delete" />}
    </div>
  );
}

export default App;
