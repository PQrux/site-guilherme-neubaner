import { Theme } from "@emotion/react";
import breakpoints from "../configs/breakpoints";

const DarkTheme: Theme = {
    id: 'dark',
    fontFamily: 'Inter',
    colors: {
        primary: '#0085FF',
        text: '#FFF',
        subText: '#AAAAAA',
        contrastThreshold: 0.2,
        error: '#FF0000',
        bgPrimary: '#000',
        bgSecondary: '#101010',
        bgDrawer: 'rgba(0,0,0,0.9)',
        bgCarouselFilter: 'blur(2px) brightness(0.3) grayscale(1)'
    },
    colorTransition: '500ms',
    breakpoints,
    colorSwitches: ['#02e302', '#9a2cf5', '#e89a09'],
}

export default DarkTheme;