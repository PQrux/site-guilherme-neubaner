import { useEffect, useMemo, useRef } from "react";
import { ColorSwitcherContext } from "../../contexts/color_switcher_context";
import { useThemeContext } from "../../contexts/theme_context";
import isWindow from "../../utils/isWindow";

export interface ColorSwitcherProps{
    delay?: number;
    defaultColor: string;
    children: any;
}

export default function ColorSwitcher(props: ColorSwitcherProps){
    const colorItems = useRef<{color: string, element: Element, init: boolean}[]>([]);
    const [, setTheme] = useThemeContext();

    const callback: IntersectionObserverCallback = (entries) => {
        const lastIntersecting = entries
        .filter(e => {
            const item = colorItems.current.find(i => i.element === e.target);
            if(item){
                if(item.init){
                    return e;
                }
                else{
                    item.init = true;
                }
            }
        })
        .sort((a,b) => a.time - b.time).pop();

        // If all intersections are initializing.
        if(!lastIntersecting) return;
        
        let color = props.defaultColor;
        
        if(lastIntersecting?.isIntersecting){
            const item = colorItems.current.find(i => i.element === lastIntersecting?.target);
            if(item) color = item.color;
        }
        else{
            const i = colorItems.current.findIndex(i => i.element === lastIntersecting?.target);
            const item = colorItems.current[i - 1];
            if(item) color = item.color;
        }

        setTheme(theme => theme.colors.primary === color ? theme : ({
            ...theme, 
            colors: {
                ...theme.colors,
                primary: color
            }
        }));
    }

    const observer = useMemo(() => isWindow ? new IntersectionObserver(callback, {
        threshold: 1, 
        rootMargin: `0px 0px -${props.delay || '200'}px 0px`,
    }) : undefined, []);
    
    useEffect(() => {
        return () => observer?.disconnect();
    }, []);

    const addItem = (element: Element, color: string) => {
        colorItems.current.push({element, color, init: false});
        colorItems.current = colorItems.current.sort((a,b) => a.element.getBoundingClientRect().y - b.element.getBoundingClientRect().y);
        observer?.observe(element);
    }

    const removeItem = (el: Element) => {
        observer?.unobserve(el);
        colorItems.current = colorItems.current.filter(({element}) => element !== el);
    }

    return (
        <ColorSwitcherContext.Provider value={{addItem, removeItem}}>
            {props.children}
        </ColorSwitcherContext.Provider>
    )
}