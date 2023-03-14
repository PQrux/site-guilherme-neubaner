import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export interface ContainerProps extends PropsWithChildren{
    bgcolor?: 'bgPrimary' | 'bgSecondary' | 'primary';
    fullHeight?: boolean;
}

const Wrapper = styled.div<ContainerProps>(({bgcolor, fullHeight, theme}) => ({
    width: '100%',
    minHeight: fullHeight ? '100vh' : undefined,
    backgroundColor: bgcolor ? theme.colors[bgcolor] : bgcolor,
}));

const _Container = styled.div(({theme}) => ({
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.desktop,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.mobile_query]: {
        padding: "20px 15px",
    },
    [theme.breakpoints.desktop_query]: {
        padding: "50px 20px",
    },
}));

export default function Container(props: ContainerProps){
    return (
        <Wrapper {...props}>
            <_Container>
                {props.children}
            </_Container>
        </Wrapper>
    )
}