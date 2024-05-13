import React from "react";
import s from './Loader.module.css'

export default function Loader(){
    return(
        <div class={s.container}>
            <div class={s.box}></div>
            <div class={s.box}></div>
            <div class={s.box}></div>
            <div class={s.box}></div>
            <div class={s.box}></div>
        </div>
    )
}