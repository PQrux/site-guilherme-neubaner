import styled from "@emotion/styled";
import { useSpring } from "@react-spring/web";
import { useI18next } from "gatsby-plugin-react-i18next";
import AutoSpring from "../auto_spring";
import Text from "../text";
import Touchable from "../touchable";
import TouchableGroup from "../touchable_group";

const AbsoluteTouchableGroup = styled(TouchableGroup)({
    position: 'absolute', 
    top: '10px', 
    left: '10px', 
    zIndex: 11
})

export default function SwapLang(){

    const i18n = useI18next();
    const spring = useSpring({
        from: {x: -5, opacity: 0},
        to: {x: 0, opacity: 1},
        delay: 2000,
    })
    
    return (
        <AutoSpring component={AbsoluteTouchableGroup} style={spring}>
            {i18n.languages.map((l, i) => (
                <Touchable 
                    key={l}
                    onClick={() => i18n.changeLanguage(l)}
                    variant={i18n.language === l ? 'contained' : 'outlined'}
                >
                    <Text size="small">
                        {l.toUpperCase()}
                    </Text>
                </Touchable>
            ))}
        </AutoSpring>
    )
}