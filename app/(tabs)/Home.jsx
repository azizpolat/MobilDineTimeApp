import { BlurView } from "expo-blur";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import FlatLists from "../../components/FlatLists";
import { db } from "../../config/firebaseConfig";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    const q = query(collection(db, "restaurants"));
    const res = await getDocs(q);

    res.forEach((item) => {
      setRestaurants((prev) => [...prev, item.data()]);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView
      style={[{ backgroundColor: "#2b2b2b" }, { paddingBottom: 20 }]}
    >
      <View className="flex items-center">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text
              className={`text-base h-10 text-xl
                ${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}
               align-middle text-white`}
            >
              {" "}
              Welcome to{" "}
            </Text>
            <Image resizeMode="cover" className={"w-20 h-12"} source={logo} />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          resizeMode="cover"
          className="mb-4 w-full bg-[#2b2b2b] h-52 items-center justify-center"
          source={banner}
        >
          <BlurView intensity={25} tint="dark" className="w-full p-4 shadow-lg">
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-white text-3xl mr-2 font-semibold">
            Special Discount %
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            data={restaurants}
            renderItem={({ item }) => <FlatLists items={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <ActivityIndicator animating color="white" />
        )}
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-[#fb9b33] text-3xl mr-2 font-semibold">
            Our Restaurants
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            data={restaurants}
            renderItem={({ item }) => <FlatLists items={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <ActivityIndicator animating color="white" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
