import { Theme } from "@emotion/react";
import DefineDefaultColor from ".";
import makeQuery from "../make_query";
import ExampleTheme from "../../../__mocks__/examples/theme";

it('should return the color type from the theme', () => {
    const c = DefineDefaultColor(ExampleTheme, 'primary');
    expect(c).toBe(ExampleTheme.colors.primary);
});

it('should return the given custom color', () => {
    const _c = '#FFF';
    const c = DefineDefaultColor(ExampleTheme, _c);
    expect(c).toBe(_c);
})

it('should return the fallback theme color', () => {
    const c = DefineDefaultColor(ExampleTheme, undefined, 'error');
    expect(c).toBe(ExampleTheme.colors.error);
})

it('should return the fallback custom color', () => {
    const _c = '#000';
    const c = DefineDefaultColor(ExampleTheme, undefined, _c);
    expect(c).toBe(_c);
})