import AddProduct from '../../pages/AddProduct';
import EditProduct from '../../pages/EditProduct';
import Login from '../../pages/Login';
import ProductItem from '../../pages/ProductItem';
import Products from '../../pages/Products';
import { Pages, RoutProperties } from '../../types/pages';

export const privateRouter: RoutProperties[] = [
    { path: Pages.products, element: Products },
    { path: Pages.productItem, element: ProductItem },
    { path: Pages.addProduct, element: AddProduct },
    { path: Pages.editProduct, element: EditProduct }
]

export const publicRouter: RoutProperties[] = [
    { path: Pages.login, element: Login }
]