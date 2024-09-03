'use client';
// src/app/page.js
import style from './page.module.css';
import Link from 'next/link';
import { Heading1, About, ImageArray } from '@/images/data';
import Footer from '@/components/footer/Footer';
export default function page () {
    return (
        <>
            <div className={style.DIV1H1}><h1 className={style.DIV1H1_H1}>{Heading1}</h1></div>
            <div className={style.DIV1P1}><p className={style.DIV1P1_P1}>{About}</p></div>
            <div className={style.DIV1L1}><Link className={style.DIV1L1_L1} href="/blog">Click Here!</Link></div>
            {ImageArray.map((list) => (
                <div key={list.id} className={style.DIV1AB1_AB1}>
                    <div className={style.DIV1AB1_AB1_AB11}>
                        <h4 className={style.DIV1AB1_AB1_AB11_H4}>{list.name}</h4>
                        <p className={style.DIV1AB1_AB1_AB11_P}>{list.about}</p>
                    </div>
                    <div className={style.DIV1AB1_AB1_AB12}>
                        <img className={style.Tech} src={list.image_link_1 || list.image_link_2} alt={list.altname} width={500} height={300} />
                    </div>
                </div>
            ))}
            <Footer />
        </>
    );
}