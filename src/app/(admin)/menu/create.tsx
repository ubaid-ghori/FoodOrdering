import { View, Text, StyleSheet, TextInput,Image } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import { Stack } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const resetFields = () => {
    setName("");
    setPrice("");
    setErrors(""); 
  };

  const validateInput = () => {
    if (!name || !price) {
      setErrors("Please fill all fields");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price must be a valid number");
      return false;
    }
    return true;
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Product created:", name);
    resetFields();  
  };


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'Create Product'}} />
        <Image source={{uri:image || defaultPizzaImage}} style={styles.image} />
        <Text onPress={pickImage} style={styles.textBtn}>Select Image</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      
      <Text style={styles.label}>Price $</Text>
      <TextInput
        placeholder="e.g., 9.99"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      
      {errors ? <Text style={styles.errorText}>{errors}</Text> : null}

      <Button onPress={onCreate} text="Create" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  image:{
    width: '50%',
    aspectRatio:1,
    alignSelf: 'center',
  },
  textBtn:{
    alignSelf:'center',
    fontSize: 16,
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginVertical:10
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default CreateProductScreen;
