export interface NumberJsonArray {
    advertisement: number[];
    clickCount: number[];
    exposure: number[];
    transformCount: number[];
    transformFee: number[];
    CPC: number[];
    CPM: number[];
    CTR: number[];
    ROAS: number[];
}

export interface CardLineProps {
    data: number[];
    labels: string[];
}

export interface CardTitleProps {
    title: string;
    average: string;
    distinguish: boolean;
    total: string;
}

export interface EnumNumberString {
    [key: number]: number;
}

export interface ChildrenProps {
    children: React.ReactNode;
}
