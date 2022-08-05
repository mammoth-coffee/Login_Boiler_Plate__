import React from "react";
import LinkItem from './LinkItem'
import style from './LinkStorePage.module.css';

function LinkBoard(props) {


    return (
        <div id={style.linksBoard}>
            {props.LinkList.map((link) => <LinkItem key={link} link={link}/>)}
        </div>
    )
}

export default LinkBoard;