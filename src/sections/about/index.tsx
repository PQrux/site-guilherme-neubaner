import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoIosSchool } from "react-icons/io";
import Chip from "../../components/chip";
import Container from "../../components/container";
import { DynamicImg } from "../../components/dynamic_img";
import Flex from "../../components/flex";
import Icon from "../../components/icon";
import InfoItem from "../../components/info_item";
import RichTrans from "../../components/rich_trans";
import Subtitle from "../../components/subtitle";
import Text from "../../components/text";
import Title from "../../components/title";
import useBreakpoints from "../../utils/use_breakpoints";

export default function About(props: {bgcolor: ColorType}){
    const formation = useTranslation('formation');
    const experience = useTranslation('experience');
    const strengthWeakness = useTranslation('strength_weakness');

    const laptop = useBreakpoints("laptop");
    const tablet = useBreakpoints("tablet");

    const experienceList: {company: string, position: string, description: string}[] = experience.t<any, any>('list');
    const formationList: {course: string, college: string, period: string}[] = formation.t<any, any>('list');
    const swList: {name: string, type: string, description: string}[] = strengthWeakness.t<any, any>('list');

    return (
        <Container bgcolor={props.bgcolor} fullHeight>
            <Flex direction={tablet ? 'row' : 'column'} gap="10px" justify="space-between">
                <Flex direction="column" style={{maxWidth: 650}}>
                    <Title>
                        <RichTrans ns="about" i18nKey="title"/>
                    </Title>
                    <Text as='p' style={{flex: 1}}>
                        <RichTrans ns="about" i18nKey="content"/>
                    </Text>
                </Flex>
                <DynamicImg src="me.png" alt="Guilherme Neubaner" style={{width: 350, maxWidth: '100%', alignSelf: 'center'}}/>
            </Flex>
            <Flex style={{marginTop: '40px'}} direction={laptop ? 'row' : 'column'}>
                <Flex flex={1} direction="column">
                    <Subtitle>
                        <RichTrans ns="formation" i18nKey="title"/>
                    </Subtitle>
                    <Flex direction="column" gap="10px">
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
                    <Flex direction="column" as="ul" gap="10px">
                        {swList.filter(item => item.type === 'strength').map(item => (
                            <li key={item.name}>
                                <Text color="primary">{item.name}:&nbsp;</Text>
                                <Text>{item.description}</Text>
                            </li>
                        ))}
                    </Flex>
                </Flex>
                <Flex flex={1} direction="column">
                    <Chip color="error" style={{alignSelf: "flex-start"}}>
                        <RichTrans ns="strength_weakness" i18nKey="weakness_title"/>
                    </Chip>
                    <Flex direction="column" as="ul" gap="10px">
                        {swList.filter(item => item.type === 'weakness').map(item => (
                            <li key={item.name}>
                                <Text color="primary">{item.name}:&nbsp;</Text>
                                <Text>{item.description}</Text>
                            </li>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}