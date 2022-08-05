import React from "react"
import style from "./RightNav.module.css"

function RightNav2() {
    if (window.location.pathname === '/login' || window.location.pathname === '/register') return null;
    return (


        <div id={style.side_right2}>
            <a href="#">
                <img className={style.img_pay} src="/img/blueRectangle.png" />
            </a>
            <div className={style.pay_text}>
                <p>개인 프로 요금제로 업그레이드 하기</p>
            </div>
            <img className = {style.pay_person} src="/img/upgrade.png" />
            <div className={style.pay_text2}>
                <p>현재 파일 당 최대 크기는</p>
                <p>0MB입니다.</p>
            </div>
        </div>
    )
}

export default RightNav2;