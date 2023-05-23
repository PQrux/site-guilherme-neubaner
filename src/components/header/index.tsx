import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Logo from "../../assets/logo.svg";
import useBreakpoints from "../../utils/use_breakpoints";
import Flex from "../flex";
import Icon from "../icon";
import Link from "../link";
import Text from "../text";

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

}));

const ObserverRef = styled.div(() => ({
    top: '0', 
    left: '0', 
    position: 'absolute', 
    height: '10px', 
    width: '10px'
}));

const Drawer = styled.div(() => ({
    position: 'fixed',
    height: '100%', 
    width: '0px',
    top: '0', 
    right: '0',
    zIndex: 2,
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    opacity: '0',
    transition: 'opacity 0.4s, width 0.4s',
    '&.open':{
        width: '100%',
        opacity: '1',
    },
    '& > *': {
        display: 'none',
    },
    '&.open > *': {
        display: 'block'
    }
}));

export default function Header(){
    const laptop = useBreakpoints('laptop');
    const [openDrawer, setOpen] = useState(false);
    const close = () => setOpen(false);

    const observer = useInView({
        threshold: 0,
    })

    const links = [
        {label: 'INÍCIO', to: '#'},
        {label: 'SOBRE MIM', to: '#'},
        {label: 'STACK', to: '#'},
        {label: 'PROJETOS', to: '#'},
        {label: 'CONTATO', to: '#'},
    ]

    return (
        <Fragment>
            <ObserverRef ref={observer.ref}/>
            <Drawer/>
            <Container as="header"  className={!observer.inView ? 'sticked' : undefined}>
                
                <Logo height="70%" className="tophided"/>
                <div style={{flex: 1}}/>
                {laptop ? (
                    <Flex gap="20px">
                        {links.map(item => (
                            <Link to={item.to} color="primary" key={item.to}>
                                {item.label}
                            </Link>
                        ))}
                    </Flex>
                ) : (
                    <Icon color="primary" onClick={() => setOpen(true)}>
                        <MdMenu/>
                    </Icon>
                )}
            </Container>
            <Drawer className={openDrawer ? 'open' : undefined}>
                <div style={{height: '100%', padding: '20px'}}>
                    <Flex style={{height: '100%'}} direction='column' align="center">
                        <Logo width={'45%'} style={{maxWidth: '250px'}}/>
                        <Flex align="center" justify="center" direction="column" gap="10px" flex="1">
                            
                            {links.map(item => (
                                <Link onClick={close} to={item.to} color="primary" key={item.to}>
                                    <Text size="xxLarge" color="inherit">
                                        {item.label}
                                    </Text>
                                </Link>
                            ))}    
                            <Icon color="primary" size={'3rem'} onClick={close}>
                                <MdClose/>
                            </Icon>
                        </Flex>
                    </Flex>
                </div>
            </Drawer>
        </Fragment>
    )
}