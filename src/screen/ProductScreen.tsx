import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <View>
      <Text>ProductScreen</Text>  
      <FlatList
        data={products}
        renderItem={({ item })=> (
          <View style={styles.itemContainer}>
            <Image 
              style={styles.image}
              source={{
                uri: item.image
              }}
            />
          </View>   
        )}  
        numColumns={2}
        />
      </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
     itemContainer: {
        width: "50%",
        padding: 1
      },
      image: {
        width: "100%",
        aspectRatio: 1
      }
})