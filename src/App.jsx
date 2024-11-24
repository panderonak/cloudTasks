import { useState } from "react";
import { Header, CreateTask } from "./components";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
