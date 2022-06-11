import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "lobster-regular",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    // borderRadius: Platform.OS === "android" ? 0 : 16,
    // borderRadius: Platform.select({ ios: 16, android: 0 }),
    borderRadius: 16,
  },
});
