import styled from "@emotion/styled";
import { GatsbyLinkProps, Link as _Link } from "gatsby";
import { useMemo } from "react";
import DefineDefaultColor from "../../utils/define_default_color";
import Flex from "../flex";

export interface LinkComponentProps{
    color?: ColorType;
    to: string;
    children: any;
    ref?: any;
    active?: boolean;
}

const LinkComponent = styled.a<LinkComponentProps>(({theme, ...props}) => {
    const color = DefineDefaultColor(theme, props.color);
    
    return {
        color: color,
        textDecoration: 'none',
        marginTop: '3px',
        '&::after':{
            content: '""',
            display: "block",
            height: "3px",
            backgroundColor: color,
            transition: `width 0.5s`,
            width: props.active ? '100%' : '0px',
        },
        '&:hover::after': {
            width: '100%',
        }
    }
})

const regex = /^\/(?!\/)/;

export default function Link(props: LinkComponentProps & GatsbyLinkProps<any>){
    const isInternal = useMemo(() => regex.test(props.to), [props.to]);
    return (
        <Flex>
            <LinkComponent {...props} as={isInternal ? _Link : 'a'} href={isInternal ? undefined : props.to}>
                {props.children}
            </LinkComponent>
        </Flex>
    )
}