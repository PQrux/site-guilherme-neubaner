import styled from "@emotion/styled";
import { GatsbyLinkProps, Link as _Link } from "gatsby";
import DefineDefaultColor from "../../utils/define_default_color";
import Flex from "../flex";

export interface LinkComponentProps{
    color?: ColorType;
    to: string;
    children: any;
    ref?: any;
    active?: boolean;
}

export interface LinkProps extends LinkComponentProps{

}

const LinkComponent = styled(_Link)<LinkComponentProps>(({theme, ...props}) => {
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
            transition: 'width 0.5s',
            width: props.active ? '100%' : '0px',
        },
        '&:hover::after': {
            width: '100%',
        }
    }
})

export default function Link(props: LinkProps & GatsbyLinkProps<any>){
    return (
        <Flex>
            <LinkComponent {...props}>
                {props.children}
            </LinkComponent>
        </Flex>
    )
}