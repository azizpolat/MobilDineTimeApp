import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import frame from "../assets/images/Frame.png";
// const logo = require("../assets/images/dinetimelogo.png");
// const frame = require("../assets/images/Frame.png");
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-2 my-2 rounded-lg bg-[#f49b33] border border-[#f49b33] max-w-fit"
            >
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/Home")}
              className="p-2 my-2 rounded-lg bg-[#2b2b2b] border border-[#f49b33] max-w-fit"
            >
              <Text className="text-lg font-semibold text-[#f49b33] text-center">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-white text-base my-4 font-semibold">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity
              className="flex flex-row items-center justify-center gap-2"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-white font-semibold text-center">
                Already a User ?
              </Text>
              <Text className="text-base font-semibold underline  text-[#f49b33]">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
}
