import { createContext, useReducer } from "react";

export const TodoitemContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const reducer = (currentitems, action) => {
  let newitems = currentitems;
  if (action.type === "NEW_ITEM") {
    newitems = [
      ...currentitems,
      { name: action.payload.newItem, duedate: action.payload.newDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newitems = currentitems.filter(
      (item) => item.name !== action.payload.todoItemname
    );
  }
  return newitems;
};

const ItemsContextProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, []);

  const addNewItem = (newItem, newDate) => {
    const newItemaction = {
      type: "NEW_ITEM",
      payload: {
        newItem,
        newDate,
      },
    };
    dispatch(newItemaction);
  };

  const deleteItem = (todoItemname) => {
    const deleteItemaction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemname,
      },
    };
    dispatch(deleteItemaction);
  };

  return (
    <TodoitemContext.Provider value={{ items, addNewItem, deleteItem }}>
      {children}
    </TodoitemContext.Provider>
  );
};

export default ItemsContextProvider;
