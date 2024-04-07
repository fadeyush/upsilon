export interface ProductState {
    id: number;
    title: string;
    price: number;
    image?: string;
    description?: string;
    category?: string;
}

export interface ProductsStateProps {
    products: ProductState[];
    isLoading: boolean;
    error: string;
}