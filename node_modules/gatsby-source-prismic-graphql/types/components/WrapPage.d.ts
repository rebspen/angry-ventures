import React from 'react';
interface WrapPageState {
    data: any;
    loading: boolean;
    error: Error | null;
}
export declare class WrapPage extends React.PureComponent<any, WrapPageState> {
    state: WrapPageState;
    keys: string[];
    readonly params: any;
    getQuery(): string;
    componentDidMount(): void;
    load: ({ variables, query, fragments, ...rest }?: any) => Promise<import("apollo-client").ApolloQueryResult<any>>;
    render(): React.DetailedReactHTMLElement<any, HTMLElement>;
}
export {};
