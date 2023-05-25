import Chip from "../chip";
import Flex from "../flex";
import Text from "../text";

export interface StackItemProps{
    image: JSX.Element;
    name: string;
    description: string;
    level: string;
    levelColor: ColorType;
}

export default function StackItem(props: StackItemProps){
    return (
        <Flex direction="column" gap="7px" align="center">
            {props.image}
            <Chip color={props.levelColor}>
                <Text>
                    {props.level}
                </Text>
            </Chip>
            <Text align="center">
                {props.name}
            </Text>
            <Text color="subText" size="small" align="center">
                {props.description}
            </Text>
        </Flex>
    )
}