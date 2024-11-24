import { useState } from "react";
import { Button, Container } from "../../components";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/taskSlice";

function TaskCard({ title, description, _id, updatedAt }) {
  const [isTaskComplete, setIsTaskComplete] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (todoId) => {
    const options = {
      method: "DELETE",
      url: `/api/v1/todos/${todoId}`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      dispatch(deleteTask(todoId));
    } catch (error) {}
  };

  const handelDone = async (todoId) => {
    const options = {
      method: "PATCH",
      url: `/api/v1/todos/toggle/status/${todoId}`,
      headers: { accept: "application/json" },
    };

    try {
      const { data } = await axios.request(options);
      const isComplete = data.data.isComplete;
      setIsTaskComplete(isComplete);
    } catch (error) {}
  };

  const isUpdatedAt = `${updatedAt}`;
  const updatedAtDateTime = new Date(isUpdatedAt);
  const updatedFormattedDateTime = updatedAtDateTime.toLocaleString();

  return (
    <>
      {/* <Container> */}
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
            className="px-3 py-2 font-mono text-[0.8rem]"
            onClick={() => navigate("/update", { state: { id: _id } })}
          />
          <Button
            children="Delete"
            bgColor="bg-[red]"
            className="px-3 py-2 font-mono text-[0.8rem]"
            onClick={() => handleDelete(_id)}
          />
          <Button
            children={isTaskComplete ? "Done" : "Undo"}
            bgColor="bg-[#005182]"
            className="px-3 py-2 font-mono text-[0.8rem]"
            onClick={() => handelDone(_id)}
          />
        </div>
      </div>
      {/* </Container> */}
    </>
  );
}

export default TaskCard;
