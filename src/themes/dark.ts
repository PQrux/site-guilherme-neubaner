import MakeTheme from "../utils/make_theme";

const DarkTheme = MakeTheme({
    primary: '#0085FF',
    text: '#FFF',
    subText: '#AAAAAA',
    contrastThreshold: 0.2,
    error: '#FF0000',
    bgPrimary: '#000',
    bgSecondary: '#101010',
    bgCard: 'rgba(255,255,255,0.1)'
});

export default DarkTheme;