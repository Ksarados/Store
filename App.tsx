import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';

import { loadProducts } from './src/api/getProduct';
import StatusBarF from './src/components/StatusBar';
import ProductList from './src/components/ProductList';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: any[];
  thumbnail: string;
}

export default function App() {
  console.log('app started')
  const [products, setProducts] = useState<Product[] | null >(null);

  const loadProductsState = async () => {
    try {
      const products = await loadProducts();

      console.log('Продукты',products);
      setProducts(products);
    } catch (error) {
      console.log('product', error);
      setProducts(null);
    }
  };

  useEffect(() => {
    loadProductsState();
  }, []);

  const OnePressItem = (product: Product) => {
    console.log('One press item', product);
  };

  const renderItem = ({ item }: { item: Product}) => {
    return <ProductList product={item} onPress={OnePressItem}/>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarF />
      <Text>Hello</Text>
      <FlatList 
        data={products} 
        numColumns={2} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
