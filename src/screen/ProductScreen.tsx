import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';



const ProductScreen = () => {
  const navigation = useNavigation()
  return (
      <FlatList
        data={products}
        renderItem={({ item })=> (
          <Pressable
            onPress={()=> navigation.navigate("Product Details")}
            style={styles.itemContainer}>
            <Image 
              style={styles.image}
              source={{
                uri: item.image
              }}
            />
          </Pressable>   
        )}  
        numColumns={2}
        />
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