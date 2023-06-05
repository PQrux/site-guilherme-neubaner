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

const Container = styled(Flex)(() => ({
    height: '50px',
    padding: '5px 15px',
    justifyContent: "center",
    alignItems: "center",
    position: 'sticky',
    top: 0,
    marginTop: '-50px',
    borderBottom: '0px solid #7a7a7a',
    transition: 'background-color 0.4s, border-bottom 0.1s',
    '& .tophided':{
        opacity: 0,
        transition: 'opacity 0.2s',
    },
    '&.sticked': {
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #7a7a7a',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    '&.sticked .tophided':{
        opacity: 1,
    },
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
            <Container className={atTop ? '' : 'sticked'}>
                <Logo height="70%" className="tophided"/>
                <div style={{flex: 1}}/>
                {laptop === true ? (
                    <Flex gap="20px">
                        {sections.map((item, i) => (
                            <AutoSpring style={springs[i]}>
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