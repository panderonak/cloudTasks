import { useLocation, useNavigate } from "react-router";
import { Button, Container, Input } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";
import { useEffect, useState } from "react";

function CreateTask() {
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
        const options = {
          method: "GET",
          url: `/api/v1/todos/${todoId}`,
          headers: { accept: "application/json" },
        };
        try {
          const { data } = await axios.request(options);
          if (data.success) {
            const title = data.data.title;
            const description = data.data.description;
            setValue("title", title);
            setValue("description", description);
          }
        } catch (error) {}
      };
      getTask();
    }
  }, [todoId, setValue]);

  const updateTask = async (data) => {
    const options = {
      method: "PATCH",
      url: `/api/v1/todos/${todoId}`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        description: data.description,
        title: data.title,
      },
    };

    try {
      const { data } = await axios.request(options);
      const updatedTask = data.data;
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
      <div>Update Task</div>
      <div className="flex justify-center items-center mt-44">
        <div className="bg-[#003559] w-1/2 p-10 rounded-[2rem]">
          <form
            className="flex gap-4 flex-col"
            onSubmit={handleSubmit(updateTask)}
          >
            <div>
              <Input
                label="Title"
                type="text"
                className="bg-[#0353A4] outline-none"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <Input
                label="Description"
                type="text"
                placeholder="Description"
                className="bg-[#0353A4] outline-none"
                {...register("description", { required: true })}
              />
            </div>

            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                bgColor="bg-[#006DAA]"
                children={"Update"}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreateTask;
