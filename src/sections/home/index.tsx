import styled from "@emotion/styled";
import { navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import _Logo from "../../assets/logo.svg";
import AutoSpring from "../../components/auto_spring";
import Button from "../../components/button";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Icon from "../../components/icon";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";

const Logo = styled(_Logo)(({theme}) => ({
    maxWidth: '300px',
    [theme.breakpoints.mobile_query]: {
        width: '50%',
    },
    alignSelf: 'center',
}))

const ChipContainer = styled(Flex)(({theme}) => ({
    '& > *': {
        flex: '0 100px',
        [theme.breakpoints.tablet_query]: {
            flex: '0 150px',
        }
    },
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
}))


const contactMethods = [
    {key: 'mail', color: '#c71610', icon: <IoIosMail/>},
    {key: 'linkedin', color: '#0E76A8', icon: <IoLogoLinkedin/>},
    {key: 'whatsapp', color: '#25D366', icon: <IoLogoWhatsapp/>},
    {key: 'github', color: '#8C8C8C', icon: <IoLogoGithub/>},
];

export default function Home(props: {bgcolor: ColorType}){
    const common = useTranslation('common');
    const contactLabels: {[key: string]: {label: string, prettyValue: string, url: string}} = common.t<any,any>('social_media');
    
    return (
        <Container fullHeight bgcolor={props.bgcolor}>
            <Flex direction="column" justify="center" gap="10px" style={{marginTop: 30}}>
                <Logo/>
                <Flex direction="column">
                    <AutoSpring>
                        <Text size="xxxLarge" align="center" as="h1">
                            <RichTrans ns="home" i18nKey="title"/>
                        </Text>
                    </AutoSpring>
                    <AutoSpring align="center" size="large" as='p'>
                        <RichTrans ns="home" i18nKey="subtitle"/>
                    </AutoSpring>
                </Flex>
                <ChipContainer style={{marginBottom: '20px'}}>
                    {contactMethods.map(method => (
                        <Button variant="outlined" key={method.key} color={method.color} as="a" href={contactLabels[method.key].url} target="_blank">
                            <Flex align="center">
                                <Icon>
                                    {method.icon}
                                </Icon>
                                <Text color="inherit">
                                    {contactLabels[method.key].label}
                                </Text>
                            </Flex>
                        </Button>
                    ))}
                </ChipContainer>
                <Flex justify="center">
                    <Button style={{flexBasis: '250px'}} onClick={() => navigate('#about')}>
                        <Text size="large">
                            <RichTrans ns="home" i18nKey="about_button"/>
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}