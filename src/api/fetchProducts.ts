import axios from "axios";
import { AddProductProps } from "../types/addproduct";

export async function addProduct(data: AddProductProps) {
    const response = await axios.post('https://fakestoreapi.com/products', {
        title: data.titleAddProduct,
        price: data.priceAddProduct,
        description: data.descriptionAddProduct
    })
}