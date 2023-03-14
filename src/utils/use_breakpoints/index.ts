import breakpoints from "../../configs/breakpoints";
import useMatchMedia from "../use_match_media";


export default function useBreakpoints(breakpoint: keyof BreakpointNumbers){
    const v = breakpoints[breakpoint];
    const matches = useMatchMedia({query: `(min-width: ${v}px)`});
    return matches;
}