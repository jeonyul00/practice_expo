import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathName = usePathname();
  const isLoggedIn = false;

  return (
    <SafeAreaView style={styles.container}>
      <BlurView style={styles.header} intensity={70}>
        <Image
          source={require("../../../assets/images/react-logo.png")}
          style={styles.headerLogo}
        />
        {!isLoggedIn && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              router.navigate("/login");
            }}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {isLoggedIn && (
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                router.push(`/`);
              }}
            >
              <Text style={{ color: pathName === "/" ? "red" : "black" }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push(`/following`);
              }}
            >
              <Text style={{ color: pathName === "/" ? "black" : "red" }}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabContainer: { flexDirection: "row" },
  tab: { flex: 1 },
  header: { alignItems: "center" },
  headerLogo: { width: 42, height: 42 },
  loginButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
  },
});
