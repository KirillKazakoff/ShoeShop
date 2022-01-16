// ContentTypes
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

export type ContentTypeCart = {
    id: number;
    title: string;
    size: string;
    amount: number;
    price: number;
};

export type ContentType = {
    id: number;
    title: string;
    images: string[];
    price: number;
    category: number;
};

// Category
export type CategoryType = {
    id: number;
    title: string;
};

// InputState
export type InputField = {
    name: string;
    value: string;
    isValid: boolean | undefined;
    error: string | undefined;
};

// totalOrder
export interface Item {
    id: number;
    price: number;
    count: number;
}

export interface Owner {
    phone: string;
    address: string;
}

export interface TotalOrder {
    owner: Owner;
    items: Item[];
}
