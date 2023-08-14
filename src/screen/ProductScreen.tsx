import React from 'react';
import { RootState } from "../../store";
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from '../redux/ProductSlice';

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState)=> state.products.products);
  return (
      <FlatList
        data={products}
        renderItem={({ item })=> (
          <Pressable
            onPress={()=> {
            dispatch(productsSlice.actions.selectedProducts(item.id))
            navigation.navigate("Product Details")}}
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