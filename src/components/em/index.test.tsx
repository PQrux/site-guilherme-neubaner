import Em from ".";
import appSkeleton from "../../../__mocks__/examples/app_skeleton";

const init = (props?: any) => appSkeleton(<Em {...props}>Em</Em>);

it('should be an em tag', () => {
    const screen = init();
    expect(screen.getByText('Em').tagName).toBe('EM');
});

it('should have the specified color.', () => {
    const color = "rgb(52, 52, 52)";
    const screen = init({color});
    expect(getComputedStyle(screen.getByText('Em')).color).toBe(color);
});