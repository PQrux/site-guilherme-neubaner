import styled from "@emotion/styled";
import Chip from "../../components/chip";
import Container from "../../components/container";
import Em from "../../components/em";
import Grid from "../../components/grid";
import Text from "../../components/text";
import _Logo from "../../assets/logo.svg";
import useBreakpoints from "../../utils/use_breakpoints";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Flex from "../../components/flex";
import Button from "../../components/button";

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

export default function Home(){
    const laptop = useBreakpoints("laptop");
    return (
        <Container fullHeight bgcolor="bgSecondary">
            <Flex direction="column" justify="center" gap="10px" style={{marginTop: 30}}>
                <Logo/>
                <Flex direction="column">
                    <Text size="xxxLarge" align="center" as="h1">
                        GUI<Em>LHERME NEUB</Em>ANER
                    </Text>
                    <Text align="center" size="large">
                        Full Cycle <Em>Developer</Em>
                    </Text>
                </Flex>
                <Grid columns={`repeat(${laptop ? 4 : 2}, 1fr)`} gap="10px" style={{marginTop: 10}}>
                    <Chip variant="outlined">
                        Mail
                    </Chip>
                    <Chip variant="outlined">
                        LinkedIn
                    </Chip>
                    <Chip variant="outlined">
                        WhatsApp
                    </Chip>
                    <Chip variant="outlined">
                        GitHub
                    </Chip>
                </Grid>
                <Button>
                    <Text>
                        SADSAD
                    </Text>
                </Button>
            </Flex>
        </Container>
    )
}