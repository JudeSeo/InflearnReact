import "./EmotionItems.css"
import getEmotionImage from "../util/get-emotion-image.js";

const EmotionItems = ({emotionId, emotionName, isSelected, onClick}) => {
    return <div onClick={onClick} className={`EmotionItems ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
        <img className={"emotion_img"} src={getEmotionImage(emotionId)}/>
        <div className={"emotion_name"}>{emotionName}</div>
    </div>
}

export default EmotionItems;