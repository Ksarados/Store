import { ApiUrls } from './urls';
import { getRequest } from './index';

console.log('Я дошел до передачи запроса');

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: any[];
  thumbnail: string;
}

interface ProductListProps {
  products: Product[];
}

export const loadProducts = async (): Promise<Product[] | null>  => {
  try {
    console.log('передаю', ApiUrls.products);
    const response = await getRequest<ProductListProps>(ApiUrls.products, {});
    if (response && response.data && response.data.products.length > 0) {
      console.log('products', response.data?.products);
      return response.data.products;
    } else {
      console.log('Продукты не найдены или некорректные данные');
      return []; // Возвращаем пустой массив, если продуктов нет
    }
  } catch (error) {
    console.log('Products Response', error);
    return null
  }
};