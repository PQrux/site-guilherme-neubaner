import { Theme } from "@emotion/react";
import DefineDefaultColor from ".";
import makeQuery from "../make_query";

const brk = {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
}

const theme: Theme = {
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

it('should return the color type from the theme', () => {
    const c = DefineDefaultColor(theme, 'primary');
    expect(c).toBe(theme.colors.primary);
});

it('should return the given custom color', () => {
    const _c = '#FFF';
    const c = DefineDefaultColor(theme, _c);
    expect(c).toBe(_c);
})

it('should return the fallback theme color', () => {
    const c = DefineDefaultColor(theme, undefined, 'error');
    expect(c).toBe(theme.colors.error);
})

it('should return the fallback custom color', () => {
    const _c = '#000';
    const c = DefineDefaultColor(theme, undefined, _c);
    expect(c).toBe(_c);
})