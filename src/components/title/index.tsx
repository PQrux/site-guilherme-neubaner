import styled from "@emotion/styled";
import Flex from "../flex";

const TitleComponent = styled.h1(({theme}) => ({
    fontSize: '2rem',
    fontWeight: 'normal',
    '&::after': {
        display: "block",
        content: '""',
        height: "4px",
        backgroundColor: theme.colors.primary,
        boxShadow: "-2px 2px 0px 0px "+theme.colors.text,
    }
}));

export default function Title(props: HTMLProps<HTMLHeadingElement>){
    return (
        <Flex>
            <TitleComponent {...props}>
                {props.children}
            </TitleComponent>
        </Flex>
    )
}