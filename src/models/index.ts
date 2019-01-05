export interface IDate {
    month: string;
    year: string;
}

export interface INestedResponsibility {
    company: string;
    program: string;
    position: string;
    data: string[];
}

export interface IItem {
    isActive: boolean;
    companyName: string;
    location: {
        country: string;
        city: string;
    };
    responsibilities: Array<string | INestedResponsibility>;
    period: {
        start: IDate;
        end: IDate;
    };
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
