import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./MainPage.module.css";

function FileItem() {
    const [usualStar, setUsualStar] = useState('block');
    const [clickedStar, setClickedStar] = useState('none');

    const onClickStar = (event) => {
        setUsualStar(usualStar === "block" ? "none" : "block")
        setClickedStar(clickedStar === "none" ? "block" : "none")
    }
    return (
        
        <div className={style.file_item}>
            <Link to="/linkstore" style={{width : "100%", height : "100%"}}>
                    <span className={style.file_type}>
                        <img src="img/mainpage/linkIcon.png" alt="linkIcon"/>
                    </span>
                    <span className={style.file_name}>Weekly Report.docs</span>
                    <span className={style.file_uploader}>
                        <img src="img/mainpage/userImage.png" width="27px" height="27px" alt="userImage"/>
                    </span>
                    <span className={style.file_date}>2022.07.16 - 12:42 AM</span>
                    <span className={style.file_size}>20MB</span>
            </Link>
            <button className={style.file_star}>
                <img src="img/starLine.png" alt="star" onClick={onClickStar} style={{display : usualStar}}/>
                <img src="img/starBlock.png" alt="star" onClick={onClickStar} style={{display : clickedStar}}/>
            </button>
            <button className={style.file_bin}>
                <img src="img/mainpage/trashLine.png" alt="trashbin"/>
            </button>
        </div>
        
    )
}

export default FileItem;

// 정보를 동적으로 받기, svg로 바꾸기, 링크 수정하기