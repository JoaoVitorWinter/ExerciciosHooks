import { useState } from "react";

import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <hr className={isDark ? "dark" : "light"}/>
            <section className={isDark ? "dark" : "light"}>
                <button className={isDark ? "dark" : "light"} onClick={() => {
                    setIsDark(!isDark);
                }}>Mudar tema</button>
            </section>
            <hr className={isDark ? "dark" : "light"}/>
        </>
    )
}