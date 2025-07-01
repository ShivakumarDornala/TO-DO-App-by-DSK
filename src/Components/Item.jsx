import { useContext } from "react";
import Todoitems from "./Todoitems";
import TodoitemContext from "../store/to-do-items-store";

function Item() {
  const { items } = useContext(TodoitemContext);

  return (
    <div>
      {items.map((item) => (
        <Todoitems
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
        ></Todoitems>
      ))}
    </div>
  );
}

export default Item;
