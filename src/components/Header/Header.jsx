import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { LangContext } from "../../context/LangContext";
import { language } from "../../components/Lang/lang";
import Users from "../Users/Users";
export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("show") || "light");

    useEffect(() => {
        localStorage.setItem("show", theme);
    }, [theme]);
    function changeMode() {
        setTheme(theme == "dark" ? "light" : "dark");
    }
    useEffect(() => {
        theme == "dark" ? document.querySelector("body").classList.add("dark-mode")
            : document.querySelector("body").classList.remove("dark-mode");
    }, [theme]);
    const { lang, setLang } = useContext(LangContext);
    return (
        <div>
            <header className="main-header">
                <div className="container">
                    <div className="main-header__inner">
                        <div className="main-header__inner-content">
                            <h1 className="title-header">{language[lang].users}</h1>
                            
                            <input
                                className="mode-input visually-hidden"
                                id="mode"
                                type="checkbox"
                                checked={theme == "dark"}
                                onChange={() => changeMode()}
                            />

                            <label htmlFor="mode" className="mode-label">
                                <span className="mode-control"></span>
                            </label>

                            <select className="select" id="lang" onChange={(e) => setLang(e.target.value)}>
                                <option className="select-option" value="en">EN</option>
                                <option className="select-option" value="uz" selected={lang == "uz"}>
                                    UZ
                                </option>
                                <option className="select-option" value="ru" selected={lang == "ru"}>
                                    RU
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
            <Users />
        </div>
    );
}
