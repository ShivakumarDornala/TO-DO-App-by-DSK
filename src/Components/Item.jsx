import Todoitems from "./Todoitems";

function Item({ todoitems, onDeleteChange }) {
  return (
    <div>
      {todoitems.map((item) => (
        <Todoitems
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
          onDeleteChange={onDeleteChange}
        ></Todoitems>
      ))}
    </div>
  );
}

export default Item;
