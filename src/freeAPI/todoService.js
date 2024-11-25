import axios from "axios";

export class TodoService {
  constructor() {
    this.URL = "/api/v1/todos/";
    this.headers = { accept: "application/json" };
  }

  async createTodo({ description, title }) {
    const options = {
      method: "POST",
      url: `${this.URL}`,
      headers: {
        ...this.headers,
        "content-type": "application/json",
      },
      data: {
        description: description,
        title: title,
      },
    };
    try {
      const { data } = await axios.request(options);
      if (data.success) {
        const newTask = data.data;
        return newTask;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllTodo() {
    const options = {
      method: "GET",
      url: `${this.URL}`,
      params: { complete: "false" },
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);

      if (data.success == true) {
        const allTodos = data.data;
        return allTodos;
      }
    } catch (error) {
      throw error;
    }
  }

  async getTodoByID(todoId) {
    const options = {
      method: "GET",
      url: `${this.URL}/${todoId}`,
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);
      if (data.success) {
        const title = data.data.title;
        const description = data.data.description;
        const todo = { title, description };
        return todo;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteTodo(todoId) {
    const options = {
      method: "DELETE",
      url: `${this.URL}/${todoId}`,
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);
      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
  async doneTodo(todoId) {
    const options = {
      method: "PATCH",
      url: `${this.URL}/toggle/status/${todoId}`,
      headers: this.headers,
    };

    try {
      const { data } = await axios.request(options);
      const isComplete = data.data.isComplete;
      //   if (isComplete) return isComplete;
      return isComplete;
    } catch (error) {
      throw error;
    }
  }

  async updateTodo({ description, title, todoId }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}/${todoId}`,
      headers: {
        ...this.headers,
        "content-type": "application/json",
      },
      data: {
        description: description,
        title: title,
      },
    };

    try {
      const { data } = await axios.request(options);
      const updatedTask = data.data;
      return updatedTask;
    } catch (error) {
      throw error;
    }
  }
}

const todoService = new TodoService();
export default todoService;
