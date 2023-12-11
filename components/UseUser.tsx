import { useAuth, useUser } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default function UseUser() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View>
      <Text>Hello, {user.firstName} welcome to Clerk</Text>
      <SignOut />
    </View>
  );
}
