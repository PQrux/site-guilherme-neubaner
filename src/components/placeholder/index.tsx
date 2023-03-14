import styled from "@emotion/styled"

const Placeholder = styled.div<{size?: number}>(({size}) =>({
    backgroundColor: '#FF0000',
    height: `${size||150}px`,
    width: `${size||150}px`,
}));

export default Placeholder;