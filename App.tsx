import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/clerk-expo";
import SignInWithOAuth from "./components/SignInWithOAuth";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import UseUser from "./components/UseUser";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";

const tokenCache = {
  getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <UseUser />
        </SignedIn>
        <SignedOut>
          <SignUpScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
