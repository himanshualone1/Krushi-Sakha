import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Krushi-sakha</Text>
      <TextInput style={styles.textInput} placeholder="Enter your name" />
      <TextInput style={styles.textInput1} placeholder="Enter your Email" />
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/015/259/493/original/business-consulting-services-logo-design-vector.jpg",
        }}
        style={styles.image}
      />

      <Button
        title="Submit"
        onPress={() => {
          alert("submitted");
        }}
      />

      <Text style={styles.loginText}>Already have an account?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => {
            alert("Login");
          }}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ffff", // Corrected hex color format
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20, // Added some padding for better layout
  },
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center", // Center text horizontally
    marginBottom: 20, // Added margin for spacing
  },
  textInput: {
    fontSize: 20,
    color: "black",
    width: "100%", // Make the text input take up full width
    padding: 10, // Add padding for text input
    borderWidth: 1, // Border for text input for visibility
    borderColor: "#000", // Border color
    borderRadius: 5, // Rounded corners for text input
    marginBottom: 10, // Added margin for spacing between inputs
  },
  textInput1: {
    fontSize: 20,
    color: "black",
    width: "100%", // Make the text input take up full width
    padding: 10, // Add padding for text input
    borderWidth: 1, // Border for text input for visibility
    borderColor: "#000", // Border color
    borderRadius: 5, // Rounded corners for text input
    marginBottom: 10, // Added margin for spacing between inputs
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20, // Adjust the margin for image spacing
  },
  buttonContainer: {
    marginTop: 20, // Add margin for spacing from the previous element
    width: "100%", // Ensure the button takes up the full width
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
  },
});
