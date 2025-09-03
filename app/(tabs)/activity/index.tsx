import NotFound from "@/app/+not-found";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  const router = useRouter();
  const pathName = usePathname();

  if (
    ![
      "/activity",
      "/activity/follows",
      "/activity/replies",
      "/activity/mentions",
      "/activity/quotes",
      "/activity/reposts",
      "/activity/verified",
    ].includes(pathName)
  ) {
    return <NotFound />; // 자동으로 +not-found.tsx를 찾아서 호출
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity`);
          }}
        >
          <Text>All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/follows`);
          }}
        >
          <Text>Follows</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/replies`);
          }}
        >
          <Text>Replies</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/mentions`);
          }}
        >
          <Text>Mentions</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/quotes`);
          }}
        >
          <Text>Quotes</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/reposts`);
          }}
        >
          <Text>Reposts</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.push(`/activity/verified`);
          }}
        >
          <Text>Verified</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
