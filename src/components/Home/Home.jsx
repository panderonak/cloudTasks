import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";
import TaskCard from "../TaskCard/TaskCard";
import Container from "../Container/Container";
import { useNavigate } from "react-router";
import todoService from "../../freeAPI/todoService";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasks = useSelector((state) => state.todos.allTasks);

  useEffect(() => {
    if (!Boolean(tasks.length) || tasks.length === 0) {
      const getAllTasks = async () => {
        const allTodos = await todoService.getAllTodo();

        try {
          dispatch(setAllTasks(allTodos));
        } catch (error) {
          throw error;
        }
      };

      getAllTasks();
    }
  }, [tasks.length, navigate]);

  if (tasks.length === 0) {
    return (
      <>
        <div className="text-center min-h-screen">
          <div className="pt-20">
            <Container>
              <p className="text-center text-gray-500 font-semibold font-sans">
                No tasks yet. Start by adding your first task to see it here!
              </p>
            </Container>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pt-20 pb-28 min-h-screen">
        <Container>
          <div className="gap-8 sm:columns-3">
            {tasks.map((task) => (
              <div key={task._id} className="mb-12 sm:break-inside-avoid">
                <TaskCard {...task} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
