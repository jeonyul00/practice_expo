import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const modal = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>modal</Text>
      <TouchableOpacity>
        <Text>close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({});
