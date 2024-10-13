import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

interface AddTransactionButtonProps {
  onPress: () => void;
}

export default function AddTransactionButton({
  onPress,
}: AddTransactionButtonProps) {
  return (
    <>
      <View style={styles.containerOptions}>
        <View style={styles.optionRow}>
          <View>
            <Image source={require("../assets/images/despesa.png")} />
          </View>
          <Text style={styles.optionLbl}>Nova Despesa</Text>
        </View>
      </View>
      <TouchableHighlight style={styles.addBtn} onPress={onPress}>
        <Text style={styles.addLbl}>+</Text>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  containerOptions: {
    backgroundColor: "white",
    padding: 8,
    borderTopRightRadius: 12,
    borderBottomEndRadius: 12,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionLbl: {
    fontSize: 14,
    marginLeft: 8,
  },
  addBtn: {
    width: 48,
    height: 48,
    padding: 8,
    backgroundColor: "#087F5B",
    borderRadius: 24,
    marginTop: 16,
  },
  addLbl: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
  },
});
