import styled from "@emotion/styled";

const Subtitle = styled.h2(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    '&::before':{
        width: '15px',
        height: '10px',
        marginRight: '10px',
        content: '""',
        backgroundColor: theme.colors.primary,
    }
}));

export default Subtitle;