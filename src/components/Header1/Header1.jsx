import React, { useContext, useEffect, useState } from "react";
import "./Header1.css";
import { LangContext } from "../../context/LangContext";
import { language } from "../../components/Lang/lang";
import { Link, useLoaderData } from "react-router-dom";
export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("show") || "light");
    const user = useLoaderData();
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
            <div style={{ marginTop: "80px" }} className="container-single">
                <div style={{ display: "flex", gap: "100px" }}>
                    <Link className="single-back" to={"/"}>
                        {language[lang].back}
                    </Link>
                    <h1 className="single-title">Single User</h1>
                </div>
                <ul className="single-list">
                    <li className="single-item" key={user.id}>
                        <h1 className="single-title">{language[lang].name}: {user.name}</h1>
                        <h2 className="single-subtitle">{language[lang].username}: {user.username}</h2>
                        <p className="single-text">{language[lang].email}: {user.email}</p>
                        <p className="single-text">{language[lang].street}: {user.address.street}</p>
                        <p className="single-text">{language[lang].suite}: {user.address.suite}</p>
                        <p className="single-text">{language[lang].city}: {user.address.city}</p>
                        <p className="single-text">{language[lang].zipcode}: {user.address.zipcode}</p>
                        <p className="single-text">{language[lang].geoLat}: {user.address.geo.lat}</p>
                        <p className="single-text">{language[lang].geoLng}: {user.address.geo.lng}</p>
                        <p className="single-text">{language[lang].phone}: {user.phone}</p>
                        <p className="single-text">{language[lang].website}: {user.website}</p>
                        <p className="single-text">{language[lang].companyName}: {user.company.name}</p>
                        <p className="single-text">{language[lang].companyCatchPhrase}: {user.company.catchPhrase}</p>
                        <p className="single-text">{language[lang].companyBs}: {user.company.bs}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
