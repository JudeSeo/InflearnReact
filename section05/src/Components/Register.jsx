import {useState} from "react";

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
    const onchangeName = (e) => {
        setName(e.target.value);
    }
    const onchangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onchangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onchangeBio = (e) => {
        setBio(e.target.value);
    }
    return (
        <div>
            <div>
                <input onChange={onchangeName} value={name} placeholder={"이름"}/>
            </div>
            <div>
                <input type={"date"} onChange={onchangeBirth} value={birth}/>
            </div>
            <div>
                <select onChange={onchangeCountry} value={country}>
                    <option></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option>
                </select>
            </div>
            <div>
                <textarea onChange={onchangeBio} value={bio}/>
            </div>
        </div>
    )
}
export default Register;