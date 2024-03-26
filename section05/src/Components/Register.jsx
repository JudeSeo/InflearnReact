import {useState} from "react";

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <div>
                <input name={"name"} onChange={onChange} value={input.name} placeholder={"이름"}/>
            </div>
            <div>
                <input name={"birth"} type={"date"} onChange={onChange} value={input.birth}/>
            </div>
            <div>
                <select name={"country"} onChange={onChange} value={input.country}>
                    <option></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option>
                </select>
            </div>
            <div>
                <textarea name={"bio"} onChange={onChange} value={input.bio}/>
            </div>
        </div>
    )
}
export default Register;