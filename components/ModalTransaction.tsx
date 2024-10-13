import dayjs from "dayjs";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";
import Feather from "@expo/vector-icons/Feather";

export default function ModalTransaction() {
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image
              source={require("../assets/images/close.png")}
              style={styles.modalCloseButton}
            />
            <Text style={styles.modalHeaderTitle}>Nova Despesa</Text>
          </View>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionLbl}>R$</Text>
            <TextInput style={styles.transactionValue} value="2.500,00" />
          </View>
          <TextInput
            placeholder="Nome da Despesa"
            style={styles.transactionName}
          />
          <Dropdown
            style={[styles.dropdownCategories]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Categoria"}
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
          <Dropdown
            style={[styles.dropdownCategories]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Receber na conta"}
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
          <TouchableOpacity
            style={styles.dataInputContainer}
            onPress={() => setOpen(true)}
            activeOpacity={0.5}
          >
            <View style={styles.dataInput} pointerEvents="none">
              <Text>{date.toLocaleDateString()}</Text>
              <Feather name="calendar" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "90%",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  modalCloseButton: {
    width: 12,
    height: 12,
  },
  modalHeaderTitle: {
    fontSize: 18,
    color: "#343A40",
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: -1,
    marginLeft: 76,
  },
  transactionContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  transactionLbl: {
    fontSize: 18,
    color: "#ADB5BD",
    marginRight: 4,
  },
  transactionValue: {
    color: "#343A40",
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 32,
    letterSpacing: -1,
    alignSelf: "center",
  },
  transactionName: {
    borderWidth: 1,
    borderColor: "#ADB5BD",
    height: 50,
    color: "#495057",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 400,
    padding: 8,
    marginTop: 40,
  },
  dropdownCategories: {
    height: 50,
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 12,
    color: "#495057",
    fontWeight: 400,
    lineHeight: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  dataInputContainer: {
    marginTop: 16,
  },
  dataInput: {
    height: 50,
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
});
