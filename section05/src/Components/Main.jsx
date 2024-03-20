// 주의사항
// 중괄호 내부에는 자바스크립트 표현식만 가능
// 숫자, 문자열, 배열 값만 렌더링 된다. (객체 안됨)
// 모든 태그는 닫혀있어야 한다.
// 최상위 태그는 하나여야만 한다.

const Main = () => {
    const number = 9;
    const obj = {a: 1}
    return (
        <main>
            <img></img>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {[1, 2, 4]}
            {true}
            {undefined}
            {null}
            {obj.a}
        </main>
    )
}

export default Main