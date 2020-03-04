declare const _default: {
    parse(pattern: string, urlPathname: string): {
        [key: string]: string;
    };
    build(pattern: string, params?: {
        [key: string]: string;
    }): string;
    extractFixURL(urlPattern: string): string | undefined;
};
export default _default;
