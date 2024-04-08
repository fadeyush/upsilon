export interface AddProductProps {
    titleAddProduct: string;
    priceAddProduct: number;
    descriptionAddProduct: string;
    isAddProductPublished: boolean;
    dateAddProduct: string;
}

export interface AddedProductProps {
    addedProductList: AddProductProps[];
}
