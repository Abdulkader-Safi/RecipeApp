import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";
import { useDispatch } from "react-redux";
import { SET_LOGGED_IN } from "../../redux/slices/authSlices";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setEmail("");
        setPassword("");

        dispatch(SET_LOGGED_IN());
        navigation.navigate("Home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const HandleForgetPassword = () => {
    alert("tell");
    navigation.navigate("ForgetPassword");
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
      <ScreenWrapper>
        <View className="h-screen flex justify-between items-center bg-bg-color">
          <View className="flex-col justify-center items-center mt-10"></View>
          <View className="flex-col justify-center items-center mt-10">
            <Image className="h-72 w-72" source={require("./../../assets/images/Main.png")} />
          </View>
          <View className="w-screen h-2/5 rounded-t-3xl bg-wlc-color flex justify-center items-center">
            <View className="w-4/5 mb-14 h-4/5 justify-around">
              <View className="">
                <Text className="text-slate-800 mb-2">Email</Text>
                <TextInput
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                />
              </View>
              <View className="">
                <Text className="text-slate-800 mb-2">Password</Text>
                <TextInput
                  placeholder="Password"
                  onChangeText={setPassword}
                  secureTextEntry
                  value={password}
                  className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                />
              </View>
              <View className="">
                <TouchableOpacity onPress={HandleForgetPassword}>
                  <Text className="text-slate-800 text-txt-gold">Forget Password?</Text>
                </TouchableOpacity>
              </View>
              <View className="">
                <TouchableOpacity
                  onPress={HandleLogin}
                  className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
                >
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Login;
