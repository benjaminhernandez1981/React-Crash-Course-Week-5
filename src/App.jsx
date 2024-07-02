import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log("ONLY on mount");
    setShowModal(!showModal);
  }, []);

  useEffect(() => {
    console.log(`on mount AND on ${showModal} change`);
  }, [showModal]);

  useEffect(() => {
    console.log("EVERY render");
  });

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
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Land a $100k Job"
          paragraph="Apply to 100 jobs"
        />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Confirm delete?"
        />
      )}
    </div>
  );
}

export default App;
