import useBreakpoints from ".";
import { renderSkeletonHook } from "../../../__mocks__/examples/app_skeleton";
import ExampleTheme from "../../../__mocks__/examples/theme"

it('should return true for the selected breakpoint if it matches.', () => {
    window.resizeTo(ExampleTheme.breakpoints.laptop + 50, 720);
    const { result } = renderSkeletonHook(() => useBreakpoints('laptop'));
    expect(result.current).toBe(true);
})