import { useEffect, useState } from "react";
const AppBar = () => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia('prefer-color-schema:dark').matches) {
            setTheme('dark');
        } else {
            setTheme('light');

        }
    }, [])
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <>
            <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
                <button className="bg-dark p-4 rounded-2xl" onClick={handleThemeSwitch}>SUBMIT</button>
            </div>
        </>
    )
}

export default AppBar
