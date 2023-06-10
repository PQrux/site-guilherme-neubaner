import styled from "@emotion/styled";
import Chip from "../chip";
import Flex from "../flex";
import Text from "../text";

const Container = styled(Flex)(() => ({
    backdropFilter: 'blur(10px)',
    border: '1px solid #7a7a7a',
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px',
    borderRadius: '5px',
}));

const ImageContainer = styled.div({
    height: '50px',
    '& > *': {
        height: '100%',
        maxWidth: "150px",
    }
})

const ChipNowrap = styled(Chip)({
    whiteSpace: 'nowrap',
});

export interface ProjectItemProps{
    stack: string[];
    title: string;
    image: JSX.Element;
    description: string;
    properties?: {label: string, value: string}[];
}

export default function ProjectItem(props: ProjectItemProps){
    return (
        <Container>
            <Flex align="center" gap='10px'>
                <ImageContainer>
                    {props.image}
                </ImageContainer>
                <Flex direction="column" >
                    <Flex gap="3px" wrap="wrap">
                        {props.stack.map(s => (
                            <ChipNowrap color="primary" key={s} size="small">
                                {s}
                            </ChipNowrap>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Text size="xLarge">
                {props.title}
            </Text>
            <Text>
                {props.description}
            </Text>
            <Flex align="center" justify="space-evenly">
                {props.properties?.map(p => (
                    <Flex key={p.label} direction="column" align="center">
                        <Text color="primary" align="center">
                            {p.value}
                        </Text>
                        <Text size="xSmall" align="center">
                            {p.label}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Container>
    )
}