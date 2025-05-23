import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AppTOdo({ onNewChange }) {
  const [todoName, settodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName === "" || dueDate === "") {
      alert("You must enter a TODO and a due date");
      return; // Prevent further execution
    }

    onNewChange(todoName, dueDate);
    settodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-center mt-5 gap-6">
        <input
          type="text"
          placeholder="Enter your TODO"
          className="py-2 px-3 border-2 border-gray-300 rounded"
          required
          value={todoName}
          onChange={handleNameChange}
        />
        <input
          type="date"
          className="py-2 px-3 border-2 border-gray-300 rounded cursor-pointer"
          required
          value={dueDate}
          onChange={handleDateChange}
        />
        <button
          className="py-2 px-3 text-white bg-blue-500 rounded  text-[20px] h-[40px] cursor-pointer flex items-center justify-center"
          onClick={handleAddButtonClicked}
        >
          <IoMdAdd></IoMdAdd>
        </button>
      </div>
    </>
  );
}

export default AppTOdo;
