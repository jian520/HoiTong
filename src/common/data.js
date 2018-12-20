

const imgA = require("../../assets/logo_walkup.png");
const imgB = require("../../assets/logo_photo.png");
const imgC = require("../../assets/logo_furniture.png");
const imgD = require("../../assets/logo_disassemble.png");

export const questionData = [
    {
        img: imgA,
        text: "你居住的大廈是否需要經樓梯出入？",

    },
    {
        img: imgB,
        text: "你需要我們即場替儲存物品拍照記錄？",
        note: "",
        time: "3:43 pm"
    },
    {
        img: imgC,
        text: "你需要儲存大型傢俬？ \n" +
        "如梳化、床褥或餐枱等",
        note: "",
        time: "3:43 pm"
    },
    {
        img: imgD,
        text: "會否有任何物品需要拆卸？",

    },
];


export const surveyData = ["報章雜誌", "電視廣告", "家人/ 朋友", "街頭宣傳活動", "網頁廣告", "搜尋引擎", "港鐵", "的士/ 輕型貨車", "Facebook",
    "Instagram", "Youtube", "領英 (LinkedIn)", "接待處展示牌", "網上討論區", "其他"]


export const quantityData = ["1-20", "21-40", "41-60", "61-80", "81-100", "100+"]

