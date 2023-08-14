import React from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useAppSelector } from "../../hooks";


const ProductDetailScreen = () => {
    const { width} = useWindowDimensions()
    const product = useAppSelector((state)=>state.products.selectedProducts)
    /* `const product = products[0]` is assigning the first element of the `products` array to the
    `product` variable. */
    // const product = products[0]
  return (
    <View>
        <ScrollView>
            {/* image carousel */}
            <FlatList 
                data={product.images}
                renderItem={({ item })=> (
                    <Image 
                        source={{uri: item}}
                        style={{ width, aspectRatio: 1}}
                    />
                )}
                horizontal
                pagingEnabled

            />
            <View style={{ padding: 20 }}>
                    {/* title */}
                    <Text style={styles.productTitle}>{product.name}</Text>
                    {/* price */}
                    <Text style={styles.productPrice}>USD {product.price}</Text>
                    {/* Description */}
                    <Text style={styles.productDescription}>{product.description}</Text>
            </View>
        </ScrollView>
      {/* Add to cart button */}
      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>Add to Cart</Text>
      </Pressable>
      {/* Navigation icon */}
    </View>
  )
}

export default ProductDetailScreen
const styles = StyleSheet.create({
    productTitle: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical:10
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 1.5
    },
    productDescription: {
        marginVertical: 10,
        fontWeight: "300",
        lineHeight: 30,
        fontSize: 18
    },
    pressable: {
        position:"absolute",
        backgroundColor:"black",
        bottom: 30,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 100,
        alignItems:"center"
    }, 
    pressableText: {
        color: "white",
        fontWeight: "500",
        fontSize: 16
    }
})