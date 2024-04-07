export interface ProductState {
    id?: number;
    title: string;
    price: number | null;
    image?: string;
    description?: string;
    category?: string;
}

export interface ProductsStateProps {
    products: ProductState[];
    isLoading: boolean;
    error: string;
}

export interface ProductItemStateProps {
    productItem: ProductState;
    isLoading: boolean;
    error: string;
}