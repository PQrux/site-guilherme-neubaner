import { ThemeProvider } from "@emotion/react"
import { render } from "@testing-library/react"
import ExampleTheme from "../theme";
import React from 'react';

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