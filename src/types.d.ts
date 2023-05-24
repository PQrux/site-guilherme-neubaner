import '@emotion/react';


declare global{
    export interface ShadedColors{
        primary: string;
        error: string;
    }
    export interface ThemeColors extends ShadedColors{
        primary: string;
        error: string;
        text: string;
        subText: string;
        bgPrimary: string;
        bgSecondary: string;
        bgCard: string;
    }
    export interface ThemeConfig extends ThemeColors{
      contrastThreshold: number;
    }

    export interface BreakpointNumbers{
        mobile: number;
        tablet: number;
        laptop: number;
        desktop: number;
    }

    export interface Breakpoints extends BreakpointNumbers{
        mobile_query: string;
        tablet_query: string;
        laptop_query: string;
        desktop_query: string;
    }

    export type AnyString = (string & {});
    export type AnyInherit = 'inherit' | (string & {});
    export type ColorType = keyof ThemeColors | AnyInherit;
    export type HTMLProps<Elem extends HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<Elem>, Elem>;
}

declare module '@emotion/react' {
  export interface Theme{
    fontFamily: string;
    colors: ThemeConfig;
    breakpoints: Breakpoints;
  }
}