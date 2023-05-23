import styled from "@emotion/styled";
import Touchable from "../touchable";

const _Button = styled(Touchable)({
    fontFamily: 'Inter'
});

export default function Button(props: HTMLProps<HTMLButtonElement>){
    return (
        <_Button as={"button"} {...props as HTMLProps<HTMLDivElement>}/>
    )
}