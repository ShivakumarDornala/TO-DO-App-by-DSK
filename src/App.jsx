import { useState } from "react";
import "./App.css";
import AppName from "./Components/AppName.jsx";
import WelcomeMsg from "./Components/Welcomemsg.jsx";
import AppTOdo from "./Components/AppTodo";
import Item from "./Components/Item.jsx";

function App() {
  const [items, setitems] = useState([]);

  const handleNewItem = (newItem, newDate) => {
    console.log(`New item added: ${newItem}, Due date: ${newDate}`);
    const newtodoitems = [...items, { name: newItem, duedate: newDate }];
    setitems(newtodoitems);
  };

  const handleDeleteButtonClicked = (todoItemname) => {
    const newtodoitems = items.filter((item) => item.name !== todoItemname);
    setitems(newtodoitems);
  };

  return (
    <>
      <AppName></AppName>
      <div>
        <AppTOdo onNewChange={handleNewItem}></AppTOdo>
        {items.length === 0 && <WelcomeMsg />}
        <Item
          todoitems={items}
          onDeleteChange={handleDeleteButtonClicked}
        ></Item>
      </div>
    </>
  );
}

export default App;
