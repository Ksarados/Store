import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Интерфейс для товаров
interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  reviews: Array<{
    title: string;
    content: string;
  }>;
}

// Интерфейс для компонента
interface ProductListProps {
  product: Product;
  onPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ product, onPress}) => {
  if (!product) return null;

  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(product)}>// product.title // product.reviews[0].title //
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: product.thumbnail }} />
      </View>
      <View>
      <Text>  $ {product.price}</Text>
      </View>
      <View style={styles.textView}>
      <Text>{product.title}</Text>
      <Text>{product.rating}</Text>
      <Text>comment: {product.reviews.length}</Text>
      <Text></Text>
      </View>
      <View style={styles.imageView}>
      <TouchableOpacity style={styles.buttonBay}>
      <Text> Buy </Text>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  button: {
    flex: 1,
    // width: '50%',
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    margin: 1,
  },
  imageView: {
    alignItems: 'center',
    marginBottom: 5
  },
  image: {
    flex: 1,
    width: '50%',
    height: 150,
    borderRadius: 16,
  },
  textView: {
    marginLeft: 10,
  },
  buttonBay: {
    height: 35,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 16
  }
});
//product.thumbnail
//product.title
//product.description
//product.rating
export default ProductList;