// src/components/header/Header.js;
import Link from "next/link";
import '../styles/Header.css';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Header({ onCategorySelect }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className="NAVBAR_DIV_HD">
                <div className="NAVBAR_DIV_HD_H1">
                    <Link className="NAVBAR_DIV_HD_H1_H1" href="/">TrendScribe</Link>
                </div>
                <div className="NAVBAR_DIV_HD_BTNL">
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('All')}>All</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Technology')}>Tech</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Games')}>Games</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Travel')}>Travel</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Films')}>Films</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Person')}>Person</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Life')}>Life</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Health')}>Health</button>
                    <button className="NAVBAR_DIV_HD_BTNL_BTN" onClick={() => onCategorySelect('Food')}>Food</button>
                </div>
                <div className="NAVBAR_DIV_HD_BTNLL">
                    <Link className="NAVBAR_DIV_HD_BTNLL_LINK" href="/security">Get Started!</Link>
                </div>

                <div className="NAVBAR_BAR_MENU" onClick={toggleMenu}>
                    {!menuOpen ? (
                        <FaBars className="NAVBAR_BAR" size={30} color="white" />
                    ) : (
                        <RxCross1 className="NAVBAR_BAR" size={30} color="white" />
                    )}
                </div>

                {menuOpen && (
                    <div className="NAVBAR_RES_BAR_MENU_ITEMS">
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('All'); toggleMenu(); }}>All</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Technology'); toggleMenu(); }}>Tech</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Games'); toggleMenu(); }}>Games</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Travel'); toggleMenu(); }}>Travel</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Films'); toggleMenu(); }}>Films</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Person'); toggleMenu(); }}>Person</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Life'); toggleMenu(); }}>Life</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Health'); toggleMenu(); }}>Health</button>
                        <button className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" onClick={() => { onCategorySelect('Food'); toggleMenu(); }}>Food</button>
                        <Link className="NAVBAR_RES_BAR_MENU_ITEMS_BTN" href="/security">Get Started!</Link>
                    </div>
                )}
            </div>
        </>
    );
}