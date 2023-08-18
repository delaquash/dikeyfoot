import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { productsSlice } from '../../redux/ProductSlice';

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