import { ThemeProvider } from "@emotion/react";
import { Queries, RenderHookOptions, RenderHookResult, queries, render, renderHook } from "@testing-library/react";
import React from 'react';
import ExampleTheme from "../theme";
import "../complete_jsdom";

function SkeletonComponent({children}: React.PropsWithChildren){
    return (
        <ThemeProvider theme={ExampleTheme}>
            {children}
        </ThemeProvider>
    )
}

export default function appSkeleton(children: any){
    return render(
        <SkeletonComponent>
            {children}
        </SkeletonComponent>
    )
}

export function appSkeletonRender<CProps extends JSX.IntrinsicAttributes>(Component: (props: CProps) => any, props: CProps){
    return render(
        <SkeletonComponent>
            <Component {...props}/>
        </SkeletonComponent>
    )
}

export function renderSkeletonHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement>,
): RenderHookResult<Result, Props> {
    return renderHook(render, {wrapper: SkeletonComponent, ...options});
}