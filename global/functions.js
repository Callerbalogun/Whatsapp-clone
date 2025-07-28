import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Data saved successfully!, key: ${key}, value: ${value}`);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed successfully!");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

export { storeData, getData, removeData };
