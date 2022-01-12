export type ContentType = {
    id: number;
    title: string;
    images: string[];
    price: number;
    category: number;
};

export type Size = {
    size: string;
    avalible: boolean;
};

export type ContentTypeFull = {
    id: number;
    category: number;
    title: string;
    images: string[];
    sku: string;
    manufacturer: string;
    color: string;
    material: string;
    reason: string;
    season: string;
    heelSize: string;
    price: number;
    oldPrice: number;
    sizes: Size[];
};

export type CategoryType = {
    id: number;
    title: string;
};
