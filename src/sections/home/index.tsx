import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import _Logo from "../../assets/logo.svg";
import Button from "../../components/button";
import Chip from "../../components/chip";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Grid from "../../components/grid";
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

const ChipGrid = styled(Grid)(({theme}) => ({
    gridTemplateColumns: 'repeat(2,1fr)',
    [theme.breakpoints.laptop_query]:{
        gridTemplateColumns: 'repeat(4,1fr)',
    }
}))

const contactMethods = ['mail', 'linkedin', 'whatsapp', 'github'];

export default function Home(){
    const laptop = useBreakpoints("laptop");
    const {t} = useTranslation('common');
    const contactLabels:any = t('social_media', {returnObjects: true});
    console.log(contactLabels);
    return (
        <Container fullHeight bgcolor="bgPrimary">
            <Flex direction="column" justify="center" gap="10px" style={{marginTop: 30}}>
                <Logo/>
                <Flex direction="column">
                    <Text size="xxxLarge" align="center" as="h1">
                        <RichTrans ns="home" i18nKey="title"/>
                    </Text>
                    <Text align="center" size="large">
                        <RichTrans ns="home" i18nKey="subtitle"/>
                    </Text>
                </Flex>
                <Grid columns={`repeat(${laptop ? 4 : 2}, 1fr)`} gap="10px" style={{marginTop: 10}}>
                    {contactMethods.map(key => (
                        <Chip variant="outlined" href="#">
                            {contactLabels[key]}
                        </Chip>
                    ))}
                </Grid>
                <Button>
                    <Text>
                        <RichTrans ns="home" i18nKey="about_button"/>
                    </Text>
                </Button>
            </Flex>
        </Container>
    )
}