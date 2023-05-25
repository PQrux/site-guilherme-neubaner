import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoIosSchool } from "react-icons/io";
import Chip from "../../components/chip";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Icon from "../../components/icon";
import InfoItem from "../../components/info_item";
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
    const formationList: {course: string, college: string, period: string}[] = formation.t<any, any>('list');
    const swList: {name: string, type: string, description: string}[] = strengthWeakness.t<any, any>('list');

    return (
        <Container bgcolor="bgSecondary" fullHeight>
            <Title>
                <RichTrans ns="about" i18nKey="title"/>
            </Title>
            <Text as='p'>
                <RichTrans ns="about" i18nKey="content"/>
            </Text>
            <Flex style={{marginTop: '40px'}} direction={laptop ? 'row' : 'column'}>
                <Flex flex={1} direction="column" gap="5px">
                    <Subtitle>
                        <RichTrans ns="formation" i18nKey="title"/>
                    </Subtitle>
                    {formationList.map((f,i) => (
                        <InfoItem
                            key={i}
                            icon={(
                                <Icon color="primary">
                                    <IoIosSchool/>
                                </Icon>
                            )}
                            label={f.college}
                            value={`${f.course} | ${f.period}`}
                        />
                    ))}
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
                <Flex flex={1} direction="column">
                    <Chip style={{alignSelf: "flex-start"}}>
                        <RichTrans ns="strength_weakness" i18nKey="strength_title"/>
                    </Chip>
                    <ul>
                        {swList.filter(item => item.type === 'strength').map(item => (
                            <li>
                                <Text color="primary">{item.name}:&nbsp;</Text>
                                <Text>{item.description}</Text>
                            </li>
                        ))}
                    </ul>
                </Flex>
                <Flex flex={1} direction="column">
                    <Chip color="error" style={{alignSelf: "flex-start"}}>
                        <RichTrans ns="strength_weakness" i18nKey="weakness_title"/>
                    </Chip>
                    <ul>
                        {swList.filter(item => item.type === 'strength').map(item => (
                            <li>
                                <Text color="primary">{item.name}:&nbsp;</Text>
                                <Text>{item.description}</Text>
                            </li>
                        ))}
                    </ul>
                </Flex>
            </Flex>
        </Container>
    )
}