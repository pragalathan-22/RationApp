import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const logout = () => {
    auth.signOut();
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Welcome to Ration App</Text>
      <TouchableOpacity onPress={logout} style={{ backgroundColor: "red", padding: 10, marginTop: 20 }}>
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
