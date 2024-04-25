import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import Button from "../components/Button.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(params.id);
            nav('/', {replace: true});
        }
    }

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", {replace: true});
        }
    }

    return <div>
        <Header title={"일기 수정하기"} leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>}
                rightChild={<Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"}/>}/>
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
}
export default Edit;