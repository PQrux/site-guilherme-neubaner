import { useTheme } from "@emotion/react";
import useMatchMedia from "../use_match_media";


export default function useBreakpoints(breakpoint: keyof BreakpointNumbers){
    const theme = useTheme();
    const v = theme.breakpoints[breakpoint];
    const matches = useMatchMedia({query: `(min-width: ${v}px)`});
    return matches;
}