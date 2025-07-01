import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoitemContext from "../store/to-do-items-store";

function Todoitems({ todoname, tododate }) {
  const { deleteItem } = useContext(TodoitemContext);
  return (
    <>
      <div className="flex items-center justify-center mt-5 gap-6 md:items-center md:justify-center">
        <p className="w-[200px] md:w-[209px] py-2 px-3 float-left border-2 border-gray-300 rounded ">
          {todoname}
        </p>
        <p className="w-[200px] md:w-[163px] py-2 px-3 float-left border-2 border-gray-300 rounded">
          {tododate}
        </p>
        <p className="">
          <button
            className="bg-red-600 text-white rounded p-2 cursor-pointer md:py-2 md:px-3 text-[20px] h-[40px]"
            onClick={() => deleteItem(todoname)}
          >
            <MdDelete></MdDelete>
          </button>
        </p>
      </div>
    </>
  );
}

export default Todoitems;
