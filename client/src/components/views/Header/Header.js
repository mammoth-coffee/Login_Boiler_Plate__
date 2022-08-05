import React from "react";
// import style from '../../../App.module.css'
import style from './Header.module.css'

function Header() {

    if (window.location.pathname === '/login' || window.location.pathname === '/register') return null;

    return(
        <div id={style.header}>
            <div className={style.searching}>
                <form action="." method="post">
                    <input className={style.search_txt} type="text" placeholder="Search Contents" />
                    <button className={style.button} type="submit">
                        <img src = "/img/searchLine.png" />
                    </button>
                </form>            
            </div>
            <a href="#">
                <button className={style.name_button}>James</button>
            </a>
            <a href="#">
                <img className={style.profile_img} src="/img/userImage.png" />
            </a>
            <a href="#">
                <img className={style.bell_img} src="/img/bellLine.png" />
            </a>
            <a href="#">
                <img className={style.setup_img} src="/img/setupLine.png" />
            </a>
            
        </div>
    )
}

export default Header;



        