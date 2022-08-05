import React, { useState, useRef, useEffect } from "react";
import style from './LinkStorePage.module.css';

function LinkItem(props) {

    const [blueBorder, setBlueBorder] = useState('none');

    // const onHover = (event) => {
    //     setBlueBorder(blueBorder === "none" ? "3px solid #267DFF" : "none");
    // }
    const onHover = (event) => {
        setBlueBorder("3px solid #267DFF");
    }
    const onNotHover = (event) => {
        setBlueBorder("none");
    }

    const [usualStar, setUsualStar] = useState('block');
    const [clickedStar, setClickedStar] = useState('none');

    const onClickStar = (event) => {
        setUsualStar(usualStar === "block" ? "none" : "block")
        setClickedStar(clickedStar === "none" ? "block" : "none")
    }

    const [text, setText] = useState("No-Title");
    const [editable, setEditable] = useState(false);

    const editOn = () => {
        setEditable(true); 
    };
    const handleChange = (event) => {
        setText(event.currentTarget.value);
      };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          setEditable(!editable);
        }
      };

    const ref = useRef(null);
    
    const handleClickOutside = (e) => {
        if (editable == true && !ref.current.contains(e.target)) setEditable(false);
      };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside, true);
      });

    return ( 
            <div className={style.LinkContainer} onMouseEnter={onHover} onMouseLeave={onNotHover} style={{ border : blueBorder}}>
                <div ref={ref}>
                    {editable ? ( <input type="text" value={text} onChange={(event) => handleChange(event)} onKeyDown={handleKeyDown} className={style.link_title} id={style.link_title_input}/>) : 
                        (<span onClick={() => editOn()} className={style.link_title}>{text}</span>)}
                        
                </div>
                <a href={props.link} target="_blank">
                    {/* <div className={style.left_info}> */}
                        
                        {/* <p className={style.link_title}>웹사이트 사용자의 ux분석</p> */}
                    {/* <p className={style.page_link}>{props.link}</p> */}
                    <p className={style.page_link}>{ props.link.length>=50 ? props.link.substr(0,50)+"..." : props.link }</p>
                    {/* </div> */}

                    <span className={style.file_date}>2022.07.16 - 12:42 AM</span>
                </a>
                <button className={`${style.star_icon} ${style.button_flex}`}>
                <img src="img/starLine.png" alt="star" onClick={onClickStar} style={{display : usualStar}}/>
                <img src="img/starBlock.png" alt="star" onClick={onClickStar} style={{display : clickedStar}}/>
                </button>
                <button className={`${style.trashbin_icon} ${style.button_flex}`}>
                    <img src="img/mainpage/trashLine.png" alt="trashbin"/>
                </button>
            </div>
    )
}

export default LinkItem

