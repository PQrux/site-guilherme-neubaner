import { WithAnimated, animated } from "@react-spring/web";
import { ComponentProps, ComponentType, DetailedHTMLProps, ElementType, HTMLAttributes, useMemo } from "react";

type DivComponent = ComponentType<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

export interface AutoSpringProps<C extends ComponentType>{
    /**Component to be wrapped. */
    component?: C | ElementType<any>;
}

/**
 * Wraps styled components with the correct animated HTML Element, extendings its properties.
 */
export default function AutoSpring<C extends ComponentType = DivComponent, P = ComponentProps<C>>(props: AutoSpringProps<C> & P){
    const { component, ...otherProps } = props as any;

    const [RootComponent, addProps] = useMemo(() => {
        let tag: keyof WithAnimated;
        if(component){
            if(component?.__emotion_base) tag = component?.__emotion_base;
            else if(typeof component === 'string') tag = component as keyof WithAnimated;
            else throw new Error('Given component is not styled.');
        }
        else tag = 'div';
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