import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const login = () => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Redirect href={"/(tabs)"} />;
  }
  return (
    <View>
      <Text>login</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
