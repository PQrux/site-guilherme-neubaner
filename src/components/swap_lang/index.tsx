import { useSpring } from "@react-spring/web";
import { useI18next } from "gatsby-plugin-react-i18next";
import AutoSpring from "../auto_spring";
import Flex from "../flex";
import Text from "../text";
import Touchable from "../touchable";

const borders = {
    right: {borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: '0px'},
    left: {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: '0px'},
}

export default function SwapLang(){

    const i18n = useI18next();
    const spring = useSpring({
        from: {x: -5, opacity: 0},
        to: {x: 0, opacity: 1},
        delay: 2000,
    })
    
    return (
        <AutoSpring component={Flex} style={{...spring, position: 'absolute', top: '10px', left: '10px', zIndex: 11}}>
            {i18n.languages.map((l, i) => (
                <Touchable 
                    key={l} 
                    style={i === 0 ? borders.right : i === i18n.languages.length-1 ? borders.left : {...borders.left, ...borders.right}}
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