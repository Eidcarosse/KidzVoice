import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setUserRole(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("rolw", jsonValue);
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
