import { useNavigate } from "react-router";
import { Button, Container, Input } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../../features/taskSlice";

function CreateTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const tasks = useSelector((state) => state.todos.allTasks);

  const createNewTask = async (data) => {
    const options = {
      method: "POST",
      url: "/api/v1/todos/",
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
      if (data.success) {
        const newTask = data.data;
        dispatch(setAllTasks([newTask, ...tasks]));
        navigate("/");
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container>
      <div>createTask</div>
      <div className="flex justify-center items-center mt-44">
        <div className="bg-[#003559] w-1/2 p-10 rounded-[2rem]">
          <form
            className="flex gap-4 flex-col"
            onSubmit={handleSubmit(createNewTask)}
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
                children={"Add Task"}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreateTask;
