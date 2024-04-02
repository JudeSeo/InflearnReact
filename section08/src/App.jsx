import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Editor/>
            <List/>
        </div>
    )
}

export default App
