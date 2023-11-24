import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useThemeContext } from "../../contexts/theme_context";
import DarkTheme from "../../themes/dark";
import LightTheme from "../../themes/light";
import { SetUserPreferedTheme } from "../../utils/user_prefered_theme";
import Icon from "../icon";

export default function ThemeSwitch(){
    const [theme, setTheme] = useThemeContext();
    const switchTheme = () => {
        const dark = theme.id === 'light';
        SetUserPreferedTheme(dark);
        setTheme(dark ? DarkTheme : LightTheme);
    }
    return (
        <Icon color="primary" onClick={switchTheme}>
            {theme.id === 'dark' ? <IoMdSunny/> : <IoMdMoon/>}
        </Icon>
    )
}