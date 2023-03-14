import { useEffect, useState } from "react";

export interface useMatchMediaProps{
    query: string;
}

export default function useMatchMedia(props: useMatchMediaProps){
    const [matches, setMatches] = useState<boolean>();

    const listener = (e: MediaQueryListEvent) => {
        setMatches(e.matches);
    }
    
    useEffect(() => {
        const queryList = window.matchMedia(props.query);
        setMatches(queryList.matches);
        queryList.addEventListener('change', listener);

        return () => queryList.removeEventListener("change", listener);
    }, [props.query]);

    return matches;
}