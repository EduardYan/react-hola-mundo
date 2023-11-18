import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css"

//Punto de entrada de nuestra app
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
❌ Aki lo que estamos haciendo esta mal aunque si es una función que devuelve un elemento no es un componte en la parte de abajo vamos a crear un componente
const createButton = (text) => {
  return <button>{text}</button>;
};
*/

/*
👉 Los competentes tiene que ser PascalCase porque sino React no identificara si es un componente o si es un elemento Html
🏁 PascalCase
🏁 camelCase
🏁 snake_case
🏁 kebab-case
*/
const Button = ({text}) => {
  return <button>{text}</button>;
};

root.render(
  <App />
);
