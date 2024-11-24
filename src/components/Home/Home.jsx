import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";
import TaskCard from "../TaskCard/TaskCard";
import Container from "../Container/Container";
import { Navigate, useNavigate } from "react-router";

function Task() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasks = useSelector((state) => state.todos.allTasks);

  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      const getAllTasks = async () => {
        const options = {
          method: "GET",
          url: "/api/v1/todos",
          params: { complete: "false" },
          headers: { accept: "application/json" },
        };
        try {
          const { data } = await axios.request(options);

          if (data.success == true) {
            const allTodos = data.data;
            dispatch(setAllTasks(allTodos));
          }
        } catch (error) {
          throw error;
        }
      };

      getAllTasks();
    }
  }, [tasks, navigate]);

  return (
    <>
      <div className="pt-20 pb-28 bg-[#E2E2E2] h-screen">
        <Container>
          <div className="flex flex-wrap">
            {tasks.map((task) => (
              <div key={task._id} className="p-2 w-1/4 flex items-baseline">
                <TaskCard {...task} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Task;
