import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButtons";

function StartGameScreen() {
  return (
    <View>
      <TextInput placeholder="Enter a Number" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;
