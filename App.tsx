import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl text-green-300">
        Open up App.js to start working on your app!
      </Text>
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}
