import React from 'react';
import { useDispatch } from 'react-redux';
import "./App.css";
import { InputForm } from "./Components/InputForm";
import { ContentArea } from "./Components/ContentArea";

function App(state) {
  const dispatch = useDispatch();
  return (
      <div className="App">
        <InputForm />
        <ContentArea state={state} />
        <div>
          <pre>
            content
          </pre>
        </div>
      </div>
  );
}

export default App;
