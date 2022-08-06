import React, { useState } from 'react';
import LinkBoard from './LinkBoard';
import style from './LinkStorePage.module.css';

function LinkStorePage () {

    const [Link, setLink] = useState('');
    const [LinkList, setLinkList] = useState([]);


    const onLinkHandler = (event) => {
        setLink(event.currentTarget.value)
    }

    const onEmbedLinkHandler = () => {
        let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (regex.test(Link)) {
            setLinkList([...LinkList, Link]);
        } else {
            alert('Wrong URL');
            setLink("");
        }

    }

    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                
                    <div id={style.myFolder}>
                            <span>내폴더</span>
                            <span>Portfolio자료</span>
                    </div>
                    <div id={style.linkStore}>
                        <div id={style.linkAdd}>
                            {/* form 필요함 */}
                            <input type="text" onChange={onLinkHandler} id={style.linkInput} value={Link} placeholder=" URL을 붙여 넣으세요(https://...)"/>
                            <button onClick={onEmbedLinkHandler} id={style.linkBtn}>링크 임베드</button>
                        </div>
                        
                        {/* <div> */}
                        <LinkBoard LinkList = {LinkList} />
                        {/* </div> */}
                    </div>
                
            </div>
        </div>
    )
}


export default LinkStorePage;


// let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//         if (regex.test(event.currentTarget.value)) {
//             setLink(event.currentTarget.value)
//         } else {
//             alert('Wrong URL');
//         }
