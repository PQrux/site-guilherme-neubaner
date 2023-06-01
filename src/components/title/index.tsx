import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import Flex from "../flex";

const TitleComponent = styled.h1<{active: boolean}>(({theme, active}) => ({
    fontSize: '2rem',
    fontWeight: 'normal',
    '&::after': {
        display: "block",
        content: '""',
        height: "4px",
        backgroundColor: theme.colors.primary,
        boxShadow: "-2px 2px 0px 0px "+theme.colors.text,
        transform: `scaleX(${active ? '1' : '0'})`,
        transition: 'transform 1.5s ease-out',
        transformOrigin: 'left'
    }
}));

export default function Title(props: HTMLProps<HTMLHeadingElement>){
    const observer = useInView({triggerOnce: true});
    return (
        <Flex ref={observer.ref}>
            <TitleComponent {...props} active={observer.inView}>
                {props.children}
            </TitleComponent>
        </Flex>
    )
}