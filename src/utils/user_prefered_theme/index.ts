import DarkTheme from "../../themes/dark";
import LightTheme from "../../themes/light";

const PREFERED_THEME_LOCALSTORAGE_KEY = 'DARK_THEME';

export function SetUserPreferedTheme(dark: boolean){
    window.localStorage.setItem(PREFERED_THEME_LOCALSTORAGE_KEY, String(dark));
}

export function GetUserPreferedTheme(){
    let dark: boolean;
    
    const saved = window.localStorage.getItem(PREFERED_THEME_LOCALSTORAGE_KEY);
    if(saved){
        dark = saved === 'true';
    }
    else{
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        dark = match.matches;
    }
    return dark ? DarkTheme : LightTheme;
}