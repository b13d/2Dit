import React, { useState } from "react";
import "./App.css";
import { Task1 } from "./task1/page";
import { Task2 } from "./task2/page";
import { Task3 } from "./task3/page";
import { Task4 } from "./task4/page";
import { Task5 } from "./task5/page";
import { Header } from "./components/Header";



function App() {
  const [taskID, setTaskID] = useState(1);

  let currentPage = <Task1 />;

  switch (taskID) {
    case 1:
      currentPage = <Task1 />;
      break;
    case 2:
      currentPage = <Task2 />;
      break;
    case 3:
      currentPage = <Task3 />;
      break;
    case 4:
      currentPage = <Task4 />;
      break;
    case 5:
      currentPage = <Task5 />;
      break;

    default:
      break;
  }

  return (
    <>
      <Header setTaskID={setTaskID} />

      <section className="container">{currentPage}</section>
    </>
  );
}

export default App;
