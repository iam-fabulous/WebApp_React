import React from "react";
import style from "../styles/SideBar.module.css"

const SideBar = ()=>{
    return(
        <div className={style.sideBarMain}>
            <div className={style.sideBarContainer}>
            <button className={style.myBtn}><p>Popular</p></button>
            <button className={style.myBtn}><p>Upcoming</p></button>
            <button className={style.myBtn}><p>NowPlaying</p></button>
            <button className={style.myBtn}><p>TopRated</p></button>
            </div>
        </div>

    )
}

export default SideBar