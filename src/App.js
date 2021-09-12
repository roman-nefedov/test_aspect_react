import React from 'react';
import "./App.css";
import { InputForm } from "./Components/InputForm";
import { ContentArea } from "./Components/ContentArea";

export const App = () => {
  
  return (
      <div className="App">
        <InputForm />
        <ContentArea />
      </div>
  );
};
