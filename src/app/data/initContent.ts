export interface ContentType {
    id: number;
    title: string;
    images: string[];
    price: number;
    category: number;
}

export interface Size {
    size: string;
    avalible: boolean;
}

export interface ContentTypeFull {
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
}
