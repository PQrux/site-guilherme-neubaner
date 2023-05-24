import { useTranslation } from "gatsby-plugin-react-i18next";
import Chip from "../../components/chip";
import Container from "../../components/container";
import Flex from "../../components/flex";
import RichTrans from "../../components/rich_trans";
import Subtitle from "../../components/subtitle";
import Text from "../../components/text";
import Title from "../../components/title";
import useBreakpoints from "../../utils/use_breakpoints";

export default function About(){
    const formation = useTranslation('formation');
    const experience = useTranslation('experience');
    const strengthWeakness = useTranslation('strength_weakness');

    const laptop = useBreakpoints("laptop");

    const experienceList: {company: string, position: string, description: string}[] = experience.t<any, any>('list');

    return (
        <Container bgcolor="bgSecondary" fullHeight>
            <Title>
                <RichTrans ns="about" i18nKey="title"/>
            </Title>
            <Text as='p'>
                <RichTrans ns="about" i18nKey="content"/>
            </Text>
            <Flex style={{marginTop: '40px'}} direction={laptop ? 'row' : 'column'}>
                <Flex flex={1} direction="column">
                    <Subtitle>
                        <RichTrans ns="formation" i18nKey="title"/>
                    </Subtitle>
    
                </Flex>
                <Flex flex={1} direction="column">
                    <Subtitle>
                        <RichTrans ns="experience" i18nKey="title"/>
                    </Subtitle>
                    {experienceList.map((exp,i) => (
                        <Flex direction="column" key={i} align="flex-start" gap="10px">
                            <Chip variant="outlined">
                                {exp.position}
                            </Chip>
                            <Text color="primary" size="large">
                                <b>{exp.company}</b>
                            </Text>
                            <Text>
                                {exp.description}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
            <Subtitle>
                <RichTrans ns="strength_weakness" i18nKey="title"/>
            </Subtitle>
            <Flex direction={laptop ? 'row' : 'column'}>
                <Flex>
                    <Chip>
                        <RichTrans ns="strength_weakness" i18nKey="strength_title"/>
                    </Chip>
                </Flex>
                <Flex>
                    <Chip color="error">
                        <RichTrans ns="strength_weakness" i18nKey="weakness_title"/>
                    </Chip>
                </Flex>
            </Flex>
        </Container>
    )
}