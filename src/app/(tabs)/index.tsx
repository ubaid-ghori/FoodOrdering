import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, View, Image } from "react-native";
import products from "@/assets/data/products";

const product = products[0];

const productListItem=()=>{
  return(
    <View style={styles.container}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
  )
}

export default function TabOneScreen() {
  return (
   <View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: "bold",
  },
});
