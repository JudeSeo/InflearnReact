import {Route, Routes} from "react-router-dom";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import {useReducer} from "react";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

const mockData = [
    {
        id: 1,
        createData: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createData: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    },
]

function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    )
}

export default App
