import AddProduct from '../../pages/AddProduct';
import ProductItem from '../../pages/ProductItem';
import Products from '../../pages/Products';
import { Pages, RoutProperties } from '../../types/pages';

export const router: RoutProperties[] = [
    { path: Pages.products, element: Products },
    { path: Pages.productItem, element: ProductItem },
    { path: Pages.addProduct, element: AddProduct }
]