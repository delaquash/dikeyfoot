import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
// import cart from '../data/cart';
import { useSelector } from 'react-redux';
import CartListItem from '../../components/CartListItem';
import { CartProps } from '../../redux/CartSlice';


const ShoppingCartDetails = ()=> (
    
    <View style={styles.totalsContainer}>
        <View style={styles.rows}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410, 00NGN</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>410, 00NGN</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>410, 00NGN</Text>
        </View>
    </View>
)

const ShoppingCart = () => {
    const cartItems = useSelector((state:CartProps)=> state.items)
  return (
    <>
      <FlatList 
        data={cartItems}
        renderItem={({ item })=> (
            <View style={styles.cartList}>
                <CartListItem cartItem={item}/>
            </View>
        )}
            ListFooterComponent={ShoppingCartDetails}
      />
       <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>Add to Cart</Text>
      </Pressable>
    </>
  )
}

export default ShoppingCart;

const styles = StyleSheet.create({
    totalsContainer: {
        borderTopWidth: 1,
        margin: 20,
        padding: 10,
        backgroundColor: "gainsboro",
        border: "red"
    },
    rows: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        fontWeight:"bold",
        color: "gray"
    },
    textBold: {
        fontSize: 16,
        fontWeight: "500"
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
    },
    cartList: {
        // margin: 10,
        paddingTop: 20
    }
})