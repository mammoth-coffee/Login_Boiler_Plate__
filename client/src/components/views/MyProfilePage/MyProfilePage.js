import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from "./MyProfilePage.module.css";

// 작업중입니다.(0806)
function MyProfilePage () {
    
    return(
        <div id={style.contents} style={{position : "relative"}}>
            <div id={style.contents_wrap}>
                    
                    
                    
                    <a href='/login' className={style.logout}>로그아웃</a>
                    
                    {/* (2)absolute or (1)p태그 안에 넣기 */}

                    <div className={style.userImg}>
                        <img src="img/mainpage/userImage.png" />
                    </div>

                    <p className={style.userName}>James</p>

                        <button className= {style.profileImgChange}>
                                <img src="img/white_camera.png" />
                                <p>프로필 이미지 변경</p>
                        </button>
                    
                    <div>
                        <div>
                            <div>
                                <p>사용자명</p>
                                <p>James</p>
                            </div>
                            <button>수정</button>
                        </div>

                        <div>
                            <div>
                                <p>이메일</p>
                                <p>James123@gmail.com</p>
                            </div>
                            <button>수정</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}


export default MyProfilePage;

// 정보 동적으로 받기