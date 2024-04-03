import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {useRef, useState} from "react";

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
    const idRef = useRef(3);
    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        }
        setTodos([newTodo, ...todos])
    }
    return (
        <div className={"App"}>
            <Header/>
            <Editor onCreate={onCreate}/>
            <List/>
        </div>
    )
}

export default App
