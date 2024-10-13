import AddTransactionButton from "@/components/AddTransactionButton";
import ModalTransaction from "@/components/ModalTransaction";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const openModalTransaction = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerAdd}>
        <AddTransactionButton onPress={openModalTransaction} />
      </View>
      <ModalTransaction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
    position: "relative",
  },
  containerAdd: {
    position: "absolute",
    bottom: 40,
    right: 16,
    alignItems: "flex-end",
  },
});
