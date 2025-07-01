import "./App.css";
import AppName from "./Components/AppName.jsx";
import WelcomeMsg from "./Components/Welcomemsg.jsx";
import AppTOdo from "./Components/AppTodo";
import Item from "./Components/Item.jsx";
import ItemsContextProvider from "./store/to-do-items-store.jsx";

function App() {
  return (
    <>
      <ItemsContextProvider>
        <AppName></AppName>
        <div>
          <AppTOdo></AppTOdo>
          <WelcomeMsg></WelcomeMsg>
          <Item></Item>
        </div>
      </ItemsContextProvider>
    </>
  );
}

export default App;
