import "./Main.css"
// 주의사항
// 중괄호 내부에는 자바스크립트 표현식만 가능
// 숫자, 문자열, 배열 값만 렌더링 된다. (객체 안됨)
// 모든 태그는 닫혀있어야 한다.
// 최상위 태그는 하나여야만 한다.


const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    }
    if (user.isLogin)
        return (<div className="logout">로그아웃</div>)
    else
        return (<div>로그인</div>)
    // return (
    //     <>
    //         {user.isLogin ? (<div>로그아웃</div>):(<div>로그인</div>)}
    //     </>
    // )
}

export default Main