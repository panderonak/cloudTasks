import { useNavigate } from "react-router";
import { Button, Container, Input, TextArea } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";
import todoService from "../../freeAPI/todoService";

function CreateTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const tasks = useSelector((state) => state.todos.allTasks);

  const createNewTask = async (data) => {
    const newTask = await todoService.createTodo({ ...data });

    try {
      dispatch(setAllTasks([newTask, ...tasks]));
      navigate("/");
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container>
      <div className="sm:flex sm:justify-center sm:items-center sm:mt-44 sm:mb-52 mt-40 mb-40">
        <div className="grid grid-cols-12 sm:w-6/12 h-full">
          <div className="col-span-12 bg-[#003559] w-full p-6 sm:py-10 sm:px-12 rounded-2xl shadow-md shadow-[rgba(0,0,0,0.6)]">
            <form
              className="flex gap-5 flex-col"
              onSubmit={handleSubmit(createNewTask)}
            >
              <div>
                <Input
                  label="Title"
                  type="text"
                  placeholder="Title"
                  className="bg-[#0353A4] outline-none text-[#fff] placeholder:text-white font-semibold"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="mt-3">
                <TextArea
                  label="Description"
                  type="text"
                  placeholder="Description"
                  className="bg-[#0353A4] outline-none text-[#fff] placeholder:text-white font-semibold"
                  {...register("description", { required: true })}
                />
              </div>

              <div className="flex justify-center sm:mt-6 mt-3 mb-2">
                <Button
                  type="submit"
                  bgColor="bg-[#006DAA]"
                  textColor="text-[#fff]"
                  children={"Add Task"}
                  className="font-semibold hover:bg-[rgb(19,124,185)] duration-200"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CreateTask;
