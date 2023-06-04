import { WithAnimated, animated } from "@react-spring/web";
import { ComponentProps, ComponentType, DetailedHTMLProps, ElementType, HTMLAttributes, useMemo } from "react";

type DivComponent = ComponentType<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

export interface AutoSpringProps<C extends ComponentType>{
    component?: C | ElementType<any>;
}

export default function AutoSpring<C extends ComponentType = DivComponent, P = ComponentProps<C>>(props: AutoSpringProps<C> & P){
    const { component, ...otherProps } = props as any;

    const [RootComponent, addProps] = useMemo(() => {
        const tag: keyof WithAnimated = component?.__emotion_base || component || 'div';
        const animatedComponent = animated[tag];
        
        let _RootComponent = animatedComponent;
        let addProps: any = {};
        if(component?.__emotion_base){
            addProps.as = animatedComponent;
            _RootComponent = component;
        }

        return [_RootComponent, addProps];
    }, [component]);

    return (
        <RootComponent {...otherProps} {...addProps}/>
    )
}