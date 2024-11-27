import { useLocation, useNavigate } from "react-router";
import { Button, Container, Input } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";
import { useEffect, useState } from "react";
import todoService from "../../freeAPI/todoService";

function UpdateTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.todos.allTasks);
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation();
  const { id } = location.state || {};
  const todoId = id;

  useEffect(() => {
    if (todoId) {
      const getTask = async () => {
        const todo = await todoService.getTodoByID(todoId);
        try {
          setValue("title", todo.title);
          setValue("description", todo.description);
        } catch (error) {
          console.error("Failed to fetch task details:", error);
        }
      };
      getTask();
    }
  }, [todoId, setValue]);

  const updateTask = async (data) => {
    try {
      const updatedTask = await todoService.updateTodo({ ...data, todoId });
      const updatedTasks = tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      );
      dispatch(setAllTasks(updatedTasks));
      navigate("/");
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container>
      <div className="sm:flex sm:justify-center sm:items-center sm:mt-44 sm:mb-52 mt-40 mb-40">
        <div className="grid grid-cols-12 sm:w-6/12 h-full">
          <div className="col-span-12 bg-[#003559] w-full p-10 rounded-[2rem]">
            <form
              className="flex gap-4 flex-col"
              onSubmit={handleSubmit(updateTask)}
            >
              <div>
                <Input
                  label="Title"
                  type="text"
                  placeholder="Title"
                  className="bg-[#0353A4] text-[#fff] placeholder:text-white outline-none font-semibold"
                  {...register("title", { required: true })}
                />
              </div>
              <div>
                <Input
                  label="Description"
                  type="text"
                  placeholder="Description"
                  className="bg-[#0353A4] text-[#fff] placeholder:text-white outline-none font-semibold"
                  {...register("description", { required: true })}
                />
              </div>

              <div className="flex justify-center mt-5">
                <Button
                  type="submit"
                  bgColor="bg-[#006DAA]"
                  className="font-semibold hover:bg-[rgb(19,124,185)] duration-200"
                  children={"Update"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default UpdateTask;
