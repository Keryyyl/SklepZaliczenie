import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function Header() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="navbar shadow-sm fixed top-0 w-full dark:bg-gray-800 bg-slate-300 transition duration-2500">
            <div className="flex w-full justify-between p-4">
                <Link to="/" className="text-3xl ml-5 btn btn-ghost hover:text-text-accent border-none hover:bg-slate-200 dark:hover:bg-base-200 text-accent transition duration-800">Kursiory</Link>
                <div className="flex items-center">
                    <Link to="/koszyk" className="text-2xl mr-10 btn btn-ghost hover:text-accent hover:bg-slate-200 dark:hover:bg-base-200 border-none text-accent transition duration-800">
                        Koszyk
                    </Link>
                    <button id="lightswitch" className="text-2xl mr-10 btn btn-square btn-ghost hover:bg-slate-200 dark:hover:bg-base-200 transition border-none duration-800" onClick={toggleDarkMode}>
                        <span className="material-icons">
                            {darkMode ? "dark_mode" : "light_mode"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;