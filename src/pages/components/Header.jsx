import { useState, useEffect } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            console.log("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.getElementById("lightswitch").classList.add("btn-ghost");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.getElementById("lightswitch").classList.remove("btn-ghost");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="navbar shadow-sm fixed top-0 w-full dark:bg-gray-800 bg-gray-200">
            <div className="flex w-full justify-between p-4">
                <a className="text-3xl ml-5 dark:text-white btn btn-ghost hover:text-base-content text-black">Kursiory</a>
                <div className="flex items-center">
                    <button className="text-2xl mr-10 btn btn-ghost hover:text-base-content text-black dark:text-white">
                        Koszyk
                    </button>
                    <button id="lightswitch" className="text-2xl mr-10 btn btn-square btn-ghost" onClick={toggleDarkMode}>
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