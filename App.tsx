import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screen/ProductScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import ShoppingCart from './src/screen/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingCart />
      {/* <ProductScreen /> */}
      {/* <ProductDetailScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
