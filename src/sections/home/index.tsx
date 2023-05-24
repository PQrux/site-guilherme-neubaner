import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import _Logo from "../../assets/logo.svg";
import Button from "../../components/button";
import Chip from "../../components/chip";
import Container from "../../components/container";
import Flex from "../../components/flex";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";
import useBreakpoints from "../../utils/use_breakpoints";

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


const contactMethods = ['mail', 'linkedin', 'whatsapp', 'github'];

export default function Home(){
    const laptop = useBreakpoints("laptop");
    const {t} = useTranslation('common');
    const contactLabels:any = t('social_media', {returnObjects: true});
    
    return (
        <Container fullHeight bgcolor="bgPrimary">
            <Flex direction="column" justify="center" gap="10px" style={{marginTop: 30}}>
                <Logo/>
                <Flex direction="column">
                    <Text size="xxxLarge" align="center" as="h1">
                        <RichTrans ns="home" i18nKey="title"/>
                    </Text>
                    <Text align="center" size="large" as='p'>
                        <RichTrans ns="home" i18nKey="subtitle"/>
                    </Text>
                </Flex>
                <ChipContainer style={{marginBottom: '20px'}}>
                    {contactMethods.map(key => (
                        <Chip variant="outlined" href="#">
                            {contactLabels[key]}
                        </Chip>
                    ))}
                </ChipContainer>
                <Button>
                    <Text>
                        <RichTrans ns="home" i18nKey="about_button"/>
                    </Text>
                </Button>
            </Flex>
        </Container>
    )
}