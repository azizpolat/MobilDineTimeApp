import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import frame from "../../assets/images/Frame.png";
import validationSchema from "../../utils/signUpSchema";
const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {};
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 220, height: 150 }} />
          <Text className="text-lg text-white text-center justify-center font-bold mb-10">
            Let's get you started
          </Text>
          <View className="w-5/6">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSignIn}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <View className="w-full">
                  <Text className="text-[#f49b33] mb-2 mt-2 font-semibold">
                    Email
                  </Text>
                  <TextInput
                    className="h-10 border border-white text-white rounded px-2"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    values={values.email}
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.email}
                    </Text>
                  )}
                  <Text className="text-[#f49b33] mb-2 mt-2 font-semibold">
                    Password
                  </Text>
                  <TextInput
                    className="h-10 border border-white text-white rounded px-2"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    values={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="p-2 my-2 rounded-lg bg-[#f49b33]  border border-[#f49b33] max-w-fit mt-10"
                  >
                    <Text className="text-lg font-semibold text-center">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <View>
              <View className="flex justify-center items-center">
                <TouchableOpacity
                  className="flex flex-row items-center mt-5 p-2 justify-center gap-2"
                  onPress={() => router.push("/signup")}
                >
                  <Text className="text-white font-semibold text-center">
                    New User ?
                  </Text>
                  <Text className="text-base font-semibold underline  text-[#f49b33]">
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <Text className="text-center text-white text-base mb-4 font-semibold">
                  <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />{" "}
                  or{" "}
                  <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
                </Text>
                <TouchableOpacity
                  className="flex flex-row items-center mb-5 p-2 justify-center gap-2"
                  onPress={() => router.push("/Home")}
                >
                  <Text className="text-white font-semibold text-center">
                    Be a
                  </Text>
                  <Text className="text-base font-semibold underline  text-[#f49b33]">
                    Guest user
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
    </SafeAreaView>
  );
};

export default SignIn;
