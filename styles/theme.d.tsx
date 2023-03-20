import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            black: string;
            white: string;
            coral: string;
            blue: string;
            red: string;
            halfBlack: string;
            themeColor: string;
        };
        fontSize: {
            small: string;
            normal: string;
            base: string;
            subTitle: string;
            title: string;
            big: string;
            samiBig: string;
        };
    }
}
