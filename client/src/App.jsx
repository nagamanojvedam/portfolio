import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <h1 className="text-sky-500 dark:bg-blue-700">
      Starting of my portfolio website
    </h1>
  );
}

export default App;
