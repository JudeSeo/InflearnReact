import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {createContext, useCallback, useReducer, useRef} from "react";

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

export const TodoContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "CREATE" :
            return [action.data, ...state];
        case "UPDATE" :
            return state.map(item => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
        case "DELETE" :
            return state.filter(item => item.id !== action.targetId)
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData)
    const idRef = useRef(3);

    const onCreate = useCallback(content => {
        dispatch({
            type: "CREATE",
            data: {
                id: ++idRef.current,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }, []);

    const onUpdate = useCallback(targetId => {
        dispatch({
            type: "UPDATE",
            targetId
        })
    }, []);

    const onDelete = useCallback(targetId => {
        dispatch({
            type: "DELETE",
            targetId
        })
    }, []);

    return (
        <div className={"App"}>
            <Header/>
            <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
                <Editor/>
                <List/>
            </TodoContext.Provider>
        </div>
    )
}

export default App
