import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export async function setUserRole(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("role", jsonValue);
    console.log("Role Set Successfully");
  } catch (e) {
    // saving error
  }
}

export async function getUserRole() {
  try {
    const jsonValue = await AsyncStorage.getItem("role");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export async function storeValue(key, value) {
  try {
    console.log("Value", value);

    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(key, " Set Successfully");
  } catch (e) {
    // saving error
  }
}

export async function getStoredValue(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export function errorToastMessage(title, description) {
  Toast.show({
    type: "error",
    text1: title,
    text2: description,
  });
}

export function successToastMessage(title, description) {
  Toast.show({
    type: "success",
    text1: title,
    text2: description,
  });
}

export function infoToastMessage(title, description) {
  Toast.show({
    type: "info",
    text1: title,
    text2: description,
  });
}
