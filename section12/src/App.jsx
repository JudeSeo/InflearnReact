import {Route, Routes} from "react-router-dom";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useReducer, useRef} from "react";

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
    switch (action.type) {
        case "CREATE" :
            return [action.data, ...state];
        case "UPDATE" :
            return state.map(item => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE" :
            return state.filter(item => String(item.id) !== String(action.data.id));
        default:
            return state;
    }
}

const DiaryStateContext = createContext()
const DiaryDispatchContext = createContext()

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);
    // 새로운 일기 추가
    const onCreate = (createData, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createData, emotionId, content
            }
        })
    }

    // 기존 일기 수정
    const onUpdate = (id, createData, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createData, emotionId, content
            }
        })
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: {
                id
            }
        })
    }

    return (
        <>
            <button onClick={() => {
                onCreate(new Date().getTime(), 1, "Hello")
            }}>일기 추가 테스트
            </button>
            <button onClick={() => {
                onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.")
            }}>일기 수정 테스트
            </button>
            <button onClick={() => {
                onDelete(1)
            }}>일기 삭제 테스트
            </button>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    )
}

export default App
