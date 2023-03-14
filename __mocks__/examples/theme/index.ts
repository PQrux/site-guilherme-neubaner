import { Theme } from "@emotion/react"
import makeQuery from "../../../src/utils/make_query";

const brk = {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
}

const ExampleTheme: Theme = {
    colors: {
        primary: '#0085FF',
        text: '#FFF',
        subText: '#AAAAAA',
        contrastThreshold: 0.2,
        error: '#FF0000',
        bgPrimary: '#000',
        bgSecondary: '#101010',
        bgCard: 'rgba(255,255,255,0.1)'
    },
    breakpoints: {
        mobile: brk.mobile,
        tablet: brk.tablet,
        laptop: brk.laptop,
        desktop: brk.desktop,
        mobile_query: makeQuery(brk.mobile),
        tablet_query: makeQuery(brk.tablet),
        laptop_query: makeQuery(brk.laptop),
        desktop_query: makeQuery(brk.desktop),
    }
}

export default ExampleTheme;