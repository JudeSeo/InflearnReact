import {Route, Routes, useNavigate} from "react-router-dom";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav('/new')
    }
    return (
        <>
            <Header title={"Header"}
                    leftChild={<Button text={"Left"}/>}
                    rightChild={<Button text={"Right"}/>}
            />
            <Button text={"123"} type={"POSITIVE"} onClick={() => {
                console.log("123버튼")
            }}/>
            <Button text={"123"} type={"POSITIVE"} onClick={() => {
                console.log("123버튼")
            }}/>
            <Button text={"123"} type={"NEGATIVE"} onClick={() => {
                console.log("123버튼")
            }}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    )
}

export default App
