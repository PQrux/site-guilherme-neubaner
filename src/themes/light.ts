import { Theme } from "@emotion/react";
import breakpoints from "../configs/breakpoints";

const LightTheme: Theme = {
    id: 'light',
    fontFamily: 'Inter',
    colors: {
        primary: '#0085FF',
        text: '#000',
        subText: '#4a4a4a',
        contrastThreshold: 0.2,
        error: '#FF0000',
        bgPrimary: '#FFF',
        bgSecondary: '#e3e3e3',
        bgDrawer: 'rgba(255,255,255,0.1)',
        bgCarouselFilter: 'blur(2px) contrast(60%) grayscale(1)'
    },
    breakpoints,
}

export default LightTheme;