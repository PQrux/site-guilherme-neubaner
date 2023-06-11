import styled from "@emotion/styled";
import AutoSpring from ".";
import { appSkeletonRender } from "../../../__mocks__/examples/app_skeleton";

it('should return a div when no component is given.', async () => {
    const rendered = appSkeletonRender<any>(AutoSpring, {children: 'SPRING'});
    expect((await rendered.findByText('SPRING')).tagName).toBe('DIV');
});

it('should return the given component name.', async () => {
    const rendered = appSkeletonRender<any>(AutoSpring, {children: 'SPRING', component: 'a'});
    expect((await rendered.findByText('SPRING')).tagName).toBe('A');
});

it('should return the right styled component tag.', async () => {
    const FancyP = styled.p`color: red`;
    const rendered = appSkeletonRender<any>(AutoSpring, {children: 'SPRING', component: FancyP});
    expect((await rendered.findByText('SPRING')).tagName).toBe('P');
});