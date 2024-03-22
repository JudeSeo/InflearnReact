const Button = ({text, color, children}) => {
    // 이벤트 객체
    const onCLickButton = (e) => {
        console.log(e)
        console.log(text)
    }

    return <button onClick={onCLickButton}
        // onMouseEnter={onCLickButton}
           style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
    </button>
}

Button.defaultProps = {color: "black"}
export default Button;