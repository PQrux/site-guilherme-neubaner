import Flex from "../flex";
import Text from "../text";

export interface InfoItemProps{
    label?: string | JSX.Element;
    value?: string | JSX.Element;
    icon?: JSX.Element;
}

export default function InfoItem(props: InfoItemProps){
    return (
        <Flex align="center" gap="5px">
            {props.icon}
            <Flex direction="column">
                {typeof props.label === "string" ? <Text size="small">{props.label}</Text> : props.label}
                {typeof props.value === "string" ? <Text color="primary">{props.value}</Text> : props.value}
            </Flex>
        </Flex>
    )
}