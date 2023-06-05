import { createContext, useContext, useState } from "react";

interface LoadingContextState{
    loaded: boolean;
}

const LoadingContext = createContext<[state: LoadingContextState, setState: (s: LoadingContextState) => void]>([{loaded: false}, () => {}]);

export default LoadingContext;

export const LoadingContextProvider = (props: any) => {
    const state = useState<LoadingContextState>({loaded: false});
    return (
        <LoadingContext.Provider value={state}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);