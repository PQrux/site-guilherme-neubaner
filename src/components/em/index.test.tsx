import Em from ".";
import { appSkeletonRender } from "../../../__mocks__/examples/app_skeleton";

const init = (props?: any) => appSkeletonRender(Em, {...props, children: 'Em'});

it('should be an em tag', () => {
    const screen = init();
    expect(screen.getByText('Em').tagName).toBe('EM');
});

it('should have the specified color.', () => {
    const color = "rgb(52, 52, 52)";
    const screen = init({color});
    expect(getComputedStyle(screen.getByText('Em')).color).toBe(color);
});