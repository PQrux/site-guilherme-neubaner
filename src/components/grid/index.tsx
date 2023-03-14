import styled from "@emotion/styled";


export interface GridProps{
    rows?: string;
    columns?: string;
    areas?: string;
    gap?: string;
}

export interface GridItemProps{
    area?: string;
}

const Grid = styled.div<GridProps>((props) => ({
    display: 'grid',
    gridTemplateRows: props.rows,
    gridTemplateColumns: props.columns,
    gridTemplateAreas: props.areas,
    gap: props.gap,
}));

export const GridItem = styled.div<GridItemProps>((props) => ({
    gridArea: props.area,
}));

export default Grid;
