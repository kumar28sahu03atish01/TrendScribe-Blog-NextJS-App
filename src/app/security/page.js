'use client';

// src/app/security/page.js

import { useRouter } from "next/navigation";
import { useState } from "react";
import style from './page.module.css';

export default function page () {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(code === "MRITUNJAYATISHKUMARSAHU") {
            router.push("/admin");
        } else {
            setError("Enter The Correct Security Code!");
        }
    }
    return (
        <>
            <div>
                <div className={style.DIV_SEC_H1}><h1 className={style.DIV_SEC_H1_H1}>Welcome to Security Panel!</h1></div>
                <div className={style.DIV_SEC_PP}>
                    <p className={style.DIV_SEC_PP_P1}>Arrange the given letters, and you will get the security code.</p>
                    <p className={style.DIV_SEC_PP_P2}>SUHAJMRKAMYTITARUHINSAU</p>
                </div>
                <div className={style.DIV_SEC_PP}>
                    <form className={style.DIV_FRM_SEC} onSubmit={HandleSubmit}>
                        <input className={style.DIV_FRM_SEC_IP1} required type="password" placeholder="Enter Security Code" title="Enter The Security Code To Access Admin Panel" value={code} onChange={e=>setCode(e.target.value)} />
                        <input className={style.DIV_FRM_SEC_IP2} type="submit" value="Submit Security Code" />
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>
    );
}