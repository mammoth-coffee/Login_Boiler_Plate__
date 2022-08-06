import React from "react"
// import style from "../../../App.module.css"
import style from "./RightNav.module.css"

function RightNav1() {
    if (window.location.pathname === '/login' || window.location.pathname === '/register') return null;
    return (
        <div id={style.side_right}>
            <div className = {style.team_make}>
                <img className = {style.team_img} src="/img/teamMember.png" />
                <div className = {style.teamfolder_text}>
                    <p>팀 폴더</p>
                </div>
                <input  type="button" className={style.img_button} onclick="showPopup();" />
            </div>
            <div className = {style.teamfolder_menu}>
                <div className={style.team_profile}>
                    <a href="#" className={style.img_yellow}>
                        <img src="/img/yellowCircle.png" />
                    </a>
                    <a href="#">
                        <input type="button" value="과제헬퍼" className={style.team_text}/>
                        {/* 디자인 바꿔야할듯 */}
                    </a>
                    <a href="#" className={style.img_teamperson}>
                        <img src="/img/personPlus.png" />
                    </a>
                    <a href="#" className={style.img_folder}>
                        <img src="/img/folderLine.png" />
                    </a>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default RightNav1;


        