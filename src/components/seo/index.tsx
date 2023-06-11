import { Fragment, useMemo } from "react";

export default function Seo(props: {children: any, data: {locales: {edges: {node: {ns: string, data: string}}[]}}}){
    const common = useMemo(() => {
        const data = props.data.locales.edges.find(i=> i.node.ns === 'common')?.node.data;
        return data ? JSON.parse(data) : {};
    }, [props.data.locales.edges]);

    return (
        <Fragment>
            <title>{common.sitename}</title>
            <meta name="description" content={common.sitedescription} />
            <meta name="image" content="/shortcut.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="author" href="/humans.txt" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/shortcut.png" />
            <link rel="shortcut icon" href="/shortcut.png" />
            <script type="module" src="/analytics.js"></script>
            {props.children}
        </Fragment>
    )
}