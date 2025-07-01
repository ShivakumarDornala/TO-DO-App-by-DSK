import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AppTOdo({ onNewChange }) {
  const todoNameelement = useRef();
  const dueDateelement = useRef();

  const handleAddButtonClicked = (event) => {
    if (
      todoNameelement.current.value === "" ||
      dueDateelement.current.value === ""
    ) {
      alert("You must enter a TODO and a due date");
      return;
    } else {
      event.preventDefault();
      const todoName = todoNameelement.current.value;
      const dueDate = dueDateelement.current.value;
      todoNameelement.current.value = "";
      dueDateelement.current.value = "";
      onNewChange(todoName, dueDate);
    }
  };

  return (
    <>
      <form
        onSubmit={handleAddButtonClicked}
        className="flex flex-col md:flex md:flex-row md:items-center md:justify-center mt-5 gap-6"
      >
        <input
          type="text"
          ref={todoNameelement}
          placeholder="Enter your TODO"
          className="py-2 px-3 border-2 border-gray-300 rounded"
          required
        />
        <input
          type="date"
          ref={dueDateelement}
          className="py-2 px-3 border-2 border-gray-300 rounded cursor-pointer"
          required
        />
        <button
          type="submit"
          className="py-2 px-3 text-white bg-blue-500 rounded  text-[20px] h-[40px] cursor-pointer flex items-center justify-center"
        >
          <IoMdAdd></IoMdAdd>
        </button>
      </form>
    </>
  );
}

export default AppTOdo;
