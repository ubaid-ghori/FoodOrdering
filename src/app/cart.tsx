import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItems";
import Button from "@/components/Button";
const CartScreen = () => {
  const { items,total } = useCart();

  return (
    <View style={{padding:10}}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding:10,gap:10}}
      />
      <Text style={{marginTop:10,fontWeight:"500",fontSize:20,}}>${total}</Text>
      <Button  text="checkout"/>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
