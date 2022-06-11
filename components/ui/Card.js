import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 50,
    marginHorizontal: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Android only shadow
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
