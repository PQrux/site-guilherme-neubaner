import { useEffect, useMemo, useRef, useState } from 'react';
import pSBC from 'shade-blend-color';
import { useThemeContext } from '../../contexts/theme_context';
import DarkTheme from '../../themes/dark';

const defaultColor = DarkTheme.colors.primary;

export default function useGradientTheme(){
    const [visibility, setVisibility] = useState<boolean[]>([]);
    const [, setTheme] = useThemeContext();
    const observer = useRef<IntersectionObserver>();
    const observed = useMemo<{items: {elem: HTMLElement, color: string}[]}>(() => ({items: []}), []);
    
    useEffect(() => {
        const newObs = observer.current = new IntersectionObserver(entries => {
            for(let e of entries){
                const i = observed.items.findIndex(o => o.elem === e.target);
                if(i >= 0){
                    setVisibility(_v => {
                        _v[i] = e.isIntersecting;
                        return _v.concat();
                    });
                }
            }
        })
        observed.items.forEach(i => newObs.observe(i.elem));
    }, []);

    useEffect(() => {
        const colors = visibility.map((v,i) => v ? observed.items[i].color||defaultColor : null).filter(v => v).slice(0,2);
        if(!colors[0]) colors[0] = defaultColor;
        const newColor = colors[1] ? pSBC(0.5, colors[0], colors[1]) : colors[0];
        console.log(newColor);
        setTheme(c => {
            c.colors.primary = newColor!;
            return {...c};
        })
    }, [visibility]);

    const addItem = (color: string, elem: HTMLElement | null) => {
        if(elem && !observed.items.find(o => o.elem === elem)){
            observer.current?.observe(elem);
            observed.items.push({elem, color});
        }
    }


    return addItem;
}