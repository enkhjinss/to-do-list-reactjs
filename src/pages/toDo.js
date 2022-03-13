import "../styles/App.css";
import "../styles/flex.css";

import AddTask from "../components/addNewTask";
import List from "../components/list.js";

const Todo = () => {
    return (
        <main className="flex column">
            <AddTask />
            <List />
        </main>
    )
}

export default Todo;