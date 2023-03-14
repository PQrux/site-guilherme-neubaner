import { Theme } from '@emotion/react';
import breakpoints from '../../configs/breakpoints';


export default function MakeTheme(colors: ThemeConfig): Theme{
    return {
        colors,
        breakpoints,
    }
}