import styled from "@emotion/styled";
import Flex from "../flex";
import Touchable, { TOUCHABLE_CONSTS } from "../touchable";

const TouchableGroup = styled(Flex)({
    [`& > ${Touchable}`]: {
        borderTopRightRadius: '0 !important', 
        borderBottomRightRadius: '0 !important',
        borderTopLeftRadius: '0 !important', 
        borderBottomLeftRadius: '0 !important',
    },
    [`& > ${Touchable}:first-of-type`]: {
        borderTopLeftRadius: TOUCHABLE_CONSTS.borderRadius+ ' !important', 
        borderBottomLeftRadius: TOUCHABLE_CONSTS.borderRadius+ ' !important', 
        borderLeftWidth: TOUCHABLE_CONSTS.borderSize+ ' !important',
        borderRightWidth: '0px !important',
    },
    [`& > ${Touchable}:last-child`]: {
        borderTopRightRadius: TOUCHABLE_CONSTS.borderRadius + ' !important', 
        borderBottomRightRadius: TOUCHABLE_CONSTS.borderRadius+ ' !important', 
        borderRightWidth: TOUCHABLE_CONSTS.borderSize+ ' !important',
        borderLeftWidth: '0px !important'
    },
});

export default TouchableGroup;