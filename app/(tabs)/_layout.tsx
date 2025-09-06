import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Tabs, useRouter } from "expo-router";
import React, { useContext, useRef, useState } from "react";
import {
  Animated,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../_layout";

const AnimatedTabBarButton = ({
  children,
  onPress,
  style,
}: BottomTabBarButtonProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressOut = () => {
    Animated.sequence([
      Animated.spring(scaleValue, {
        toValue: 1.2,
        useNativeDriver: true,
        speed: 200,
      }),
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        speed: 200,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressOut={handlePressOut}
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        style,
      ]}
      android_ripple={{ borderless: false, radius: 0 }}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const TabLayout = () => {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;

  const toLoginPage = () => {
    setIsLoginModalOpen(false);
    router.push("/login");
  };

  return (
    <>
      <Tabs
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <AnimatedTabBarButton {...props} />
          ),
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
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
              if (isLoggedIn) router.navigate("/modal");
              else openLoginModal();
            },
          }}
          options={{
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
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (isLoggedIn) router.navigate("/modal");
              else openLoginModal();
            },
          }}
          options={{
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
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (isLoggedIn) router.navigate("/modal");
              else openLoginModal();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#000000" : "#ACACAC"}
              />
            ),
          }}
        />

        {/* (tabs)의 '직속 자식 세그먼트'인 "(post)"를 name으로 지정해야 숨김이 제대로 적용됩니다. */}
        <Tabs.Screen
          name="(post)/[username]/post/[postID]"
          options={{
            href: null,
          }}
        />
      </Tabs>
      <Modal visible={isLoginModalOpen} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <Pressable onPress={toLoginPage}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}
              >
                Login Modal
              </Text>
            </Pressable>
            <TouchableOpacity
              onPress={closeLoginModal}
              style={{
                alignSelf: "flex-end",
                padding: 8,
              }}
            >
              <Ionicons name="close" size={24} color={"#555"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TabLayout;
