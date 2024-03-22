import './App.css'
import Button from "./Components/Button.jsx";
import Header from "./Components/Header.jsx";

const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
}

// 부모 컴포넌트
function App() {
    return (
        <>
            <Button {...buttonProps}/>
            <Button text={"카페"}/>
            <Button text={"블로그"}><Header /></Button>
        </>
    )
}

export default App
