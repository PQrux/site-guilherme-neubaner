import styled from "@emotion/styled";
import { useTrail } from "@react-spring/web";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Fragment, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Logo from "../../assets/logo";
import { useLoading } from "../../contexts/loading_context";
import useBreakpoints from "../../utils/use_breakpoints";
import AutoSpring from "../auto_spring";
import Drawer from "../drawer";
import Flex from "../flex";
import Icon from "../icon";
import Link from "../link";


const HeaderLogo = styled(Logo, {shouldForwardProp: p => p !== 'atTop' })<{atTop: boolean}>(({atTop}) => ({
    height: "70%",
    opacity: atTop ? 0 : 1,
    transition: 'opacity 0.2s',
}));

const Container = styled(Flex)<{atTop: boolean}>(({atTop}) => ({
    height: '50px',
    padding: '5px 15px',
    justifyContent: "space-between",
    alignItems: "center",
    position: 'sticky',
    top: 0,
    marginTop: '-50px',
    borderBottom: '0px solid #7a7a7a',
    transition: 'background-color 0.4s, border-bottom 0.1s',
    backdropFilter: atTop ? 'none' : 'blur(10px)',
    borderBottomWidth: atTop ? '0px' : '1px',
    backgroundColor: atTop ? 'transparent' : 'rgba(255,255,255,0.1)',
    zIndex: 10
})).withComponent('header');

const SCROLL_OFFSET = 50;

export default function Header(){
    const laptop = useBreakpoints('laptop');
    const [openDrawer, setOpen] = useState(false);
    const [loading] = useLoading();

    const common = useTranslation('common');
    const sections: {label: string, to: string}[] = common.t<any, any>('sections');
    
    const [atTop, setAtTop] = useState(true);
    useEffect(() => {
        setAtTop(window.scrollY <= SCROLL_OFFSET);
        const listener = () => setAtTop(window.scrollY <= SCROLL_OFFSET);
        window.addEventListener('scroll', listener);
        return () => window.removeEventListener('scroll', listener);
    }, []);

    const close = () => setOpen(false);

    const springs = useTrail(sections.length, {
        opacity: loading.loaded ? 1 : 0,
        x: loading.loaded ? 0 : -20,
        delay: 2000,
        config: { duration: 1000, }
    })

    return (
        <Fragment>
            <Container atTop={atTop}>
                <HeaderLogo atTop={atTop}/>
                {laptop === true ? (
                    <Flex gap="20px">
                        {sections.map((item, i) => (
                            <AutoSpring style={springs[i]} key={item.to}>
                                <Link to={item.to} color="primary" key={item.to}>
                                    {item.label}
                                </Link>
                            </AutoSpring>
                        ))}
                    </Flex>
                ) : laptop === false ? (
                    <Icon color="primary" onClick={() => setOpen(true)}>
                        <MdMenu/>
                    </Icon>
                ) : null}
            </Container>
            <Drawer onClose={close} open={openDrawer}/>
        </Fragment>
    )
}