import DarkTheme from "../../themes/dark";
import LightTheme from "../../themes/light";

const PREFERED_THEME_LOCALSTORAGE_KEY = 'DARK_THEME';
const isWindowDefined = typeof window !== 'undefined';

export function SetUserPreferedTheme(dark: boolean){
    return isWindowDefined && window.localStorage.setItem(PREFERED_THEME_LOCALSTORAGE_KEY, String(dark));
}

export function GetUserPreferedTheme(){
    let dark: boolean;
    
    const saved = isWindowDefined ? window.localStorage.getItem(PREFERED_THEME_LOCALSTORAGE_KEY) : 'true';
    if(saved){
        dark = saved === 'true';
    }
    else{
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        dark = match.matches;
    }
    return dark ? DarkTheme : LightTheme;
}