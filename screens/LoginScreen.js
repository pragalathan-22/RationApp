import { useState, useRef } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useNavigation } from "@react-navigation/native"; // Import navigation
import { auth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from "../firebase";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [otp, setOtp] = useState("");

  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation(); // Get navigation instance

  const sendOtp = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verification = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      setVerificationId(verification);
      Alert.alert("OTP Sent", "Please enter the OTP sent to your number.");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      Alert.alert("Login Successful", "You are now logged in.");
      
      // ✅ Navigate to HomeScreen after successful OTP verification
      navigation.replace("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={auth.app.options} />
      
      <Text>Enter Phone Number</Text>
      <TextInput placeholder="+91XXXXXXXXXX" value={phoneNumber} onChangeText={setPhoneNumber} />

      <Button title="Send OTP" onPress={sendOtp} />

      {verificationId && (
        <>
          <Text>Enter OTP</Text>
          <TextInput placeholder="123456" value={otp} onChangeText={setOtp} />
          <Button title="Verify OTP" onPress={verifyOtp} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
