import Theme from "../../../__mocks__/examples/theme";
import useMatchMedia from ".";
import { renderSkeletonHook } from "../../../__mocks__/examples/app_skeleton";


it('should return true as the screen is bigger than the requested media.', () => {
    window.resizeTo(Theme.breakpoints.laptop + 1, 760);
    const { result } = renderSkeletonHook(() => useMatchMedia({query: Theme.breakpoints.laptop_query}));
    expect(result.current).toBe(true);
});

it('should return false as the screen is smaller than the requested media.', () => {
    window.resizeTo(Theme.breakpoints.laptop - 1, 760);
    const { result } = renderSkeletonHook(() => useMatchMedia({query: Theme.breakpoints.laptop_query}));
    expect(result.current).toBe(false);
});