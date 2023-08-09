import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screen/ProductScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
ProductDetailScreen

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailScreen />
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
