import useLocalStorage from "./useLocalStorage"


export default function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme', "dark")

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <div className="light-dark-mode">
        <div className="container">
            <p>Light Dark Mode</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
}