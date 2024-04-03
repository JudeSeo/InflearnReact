import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {useState} from "react";

const mockData = [
    {
        id: 1,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        content: "노래하기",
        date: new Date().getTime(),
    }
]
function App() {
    const [todos, setTodos] = useState(mockData)
    return (
        <div className={"App"}>
            <Header/>
            <Editor/>
            <List/>
        </div>
    )
}

export default App
