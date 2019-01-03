export interface IDate {
    month: string;
    year: string;
}

export interface IItem {
    isActive: boolean;
    companyName: string;
    location: {
        country: string;
        city: string;
    };
    responsibilities: string[];
    period: {
        start: IDate;
        end: IDate;
    };
}

export interface IGoodAt {
    label: string;
    pathLength: string;
    percentage: string;
}

export interface IMenuItem {
    label: string;
    link: string;
    isVisible: boolean;
}

export interface IWorkItem {
    label: string;
    linkHref: string;
    bgImageUrl: string;
}
