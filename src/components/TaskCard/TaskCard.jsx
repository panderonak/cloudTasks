import { useState } from "react";
import { Button, Container } from "../../components";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/taskSlice";
import todoService from "../../freeAPI/todoService";

function TaskCard({ title, description, _id, updatedAt }) {
  const [isTaskComplete, setIsTaskComplete] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (todoId) => {
    const result = await todoService.deleteTodo(todoId);
    try {
      if (result) dispatch(deleteTask(todoId));
    } catch (error) {
      throw error;
    }
  };

  const handelDone = async (todoId) => {
    const result = await todoService.doneTodo(todoId);

    try {
      setIsTaskComplete(result);
    } catch (error) {
      throw error;
    }
  };

  const isUpdatedAt = `${updatedAt}`;
  const updatedAtDateTime = new Date(isUpdatedAt);
  const updatedFormattedDateTime = updatedAtDateTime.toLocaleString();

  return (
    <>
      <div
        className="flex justify-center items-center flex-col w-full
      "
      >
        <div></div>
        <h1 className="w-full text-wrap text-center p-3 font-semibold font-sans text-base text-gray-500">{`${updatedFormattedDateTime}`}</h1>
        <div className="bg-[#003559] text-[#EEF4ED] w-full px-7 py-5 text-center rounded-tr-2xl rounded-tl-2xl font-sans font-semibold">
          <h2
            className={`${
              isTaskComplete ? "line-through text-gray-500" : "text-[#B9D6F2]"
            }`}
          >
            {title}
          </h2>
        </div>
        <div className="bg-[#0353A4] text-[#8DA9C4] w-full px-7 py-8 text-left font-sans font-normal">
          <p
            className={`${
              isTaskComplete ? "line-through text-gray-500" : "text-[#B9D6F2]"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="bg-[#003559] px-2 py-4 rounded-br-2xl rounded-bl-2xl gap-4 w-full flex justify-center font-semibold">
          <Button
            children="Update"
            bgColor="bg-[#005182]"
            className="px-3 py-2 font-mono text-[0.8rem] hover:bg-[rgb(3,100,160)] duration-200"
            onClick={() => navigate("/update", { state: { id: _id } })}
          />
          <Button
            children="Delete"
            bgColor="bg-[red]"
            className="px-3 py-2 font-mono text-[0.8rem] hover:bg-[rgb(193,32,32)] duration-200"
            onClick={() => handleDelete(_id)}
          />
          <Button
            children={isTaskComplete ? "Done" : "Undo"}
            bgColor="bg-[#005182]"
            className="px-3 py-2 font-mono text-[0.8rem] hover:bg-[rgb(3,100,160)] duration-200"
            onClick={() => handelDone(_id)}
          />
        </div>
      </div>
    </>
  );
}

export default TaskCard;
