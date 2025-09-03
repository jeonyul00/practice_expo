import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";

const TabLayout = () => {
  const router = useRouter();
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#000000" : "#ACACAC"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? "#000000" : "#ACACAC"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/modal");
          },
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add"
              size={24}
              color={focused ? "#000000" : "#ACACAC"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart-outline"
              size={24}
              color={focused ? "#000000" : "#ACACAC"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? "#000000" : "#ACACAC"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="following"
        options={{
          tabBarLabel: () => null,
          href: null,
        }}
      />
      <Tabs.Screen
        name="(post)/[username]/post/[postID]"
        options={{
          tabBarLabel: () => null,
          // tabbar에서 가리기
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
