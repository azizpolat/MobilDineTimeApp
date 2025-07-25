import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import CarouselItem from "../../components/CarouselItem";
import { db } from "../../config/firebaseConfig";
const Restaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNextImage = () => {
    if (currentIndex < currentIndex.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }

    if (currentIndex == currentIndex.length - 1) {
      const nextIndex = 0;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  const { restaurant } = useLocalSearchParams();

  const [restaData, setRestaData] = useState({});
  const [carouselData, setCarouselData] = useState({});
  const [slotData, setSlotData] = useState({});

  const getRestaData = async () => {
    try {
      const restaQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurant)
      );
      const resSnapshot = await getDocs(restaQuery);

      if (resSnapshot.empty) {
        console.log("No matcing restaurant found!!");
        return;
      }

      for (const doc of resSnapshot.docs) {
        const resData = doc.data();
        setRestaData(resData);

        const carouselQuery = query(
          collection(db, "carousel"),
          where("res_id", "==", doc.ref)
        );

        const carouselSnapshot = await getDocs(carouselQuery);

        const carouselImages = [];
        if (carouselSnapshot.empty) {
          console.log("No matcing carousel found!!");
          return;
        }
        carouselSnapshot.forEach((carouselDoc) => {
          carouselImages.push(carouselDoc.data());
        });
        setCarouselData(carouselImages);

        const slotsQuery = query(
          collection(db, "slots"),
          where("ref_id", "==", doc.ref)
        );

        const slotsSnapshot = await getDocs(slotsQuery);

        const slots = [];
        if (slotsSnapshot.empty) {
          console.log("No matcing slots found!!");
          return;
        }
        slotsSnapshot.forEach((slotsDoc) => {
          slots.push(slotsDoc.data());
        });
        setSlotData(slots);
      }
    } catch (error) {
      console.log("Error fetcing data", error);
    }
  };

  useEffect(() => {
    getRestaData();
  }, []);

  return (
    <SafeAreaView
      style={[{ backgroundColor: "#2b2b2b" }, { paddingBottom: 20 }]}
    >
      <StatusBar style="light" backgroundColor="#2b2b2b" />
      <ScrollView className="h-full">
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-[#f49b33] font-semibold">
            {restaurant}
          </Text>
          <View className="border-b border-[#f49b33] p-1"></View>
        </View>
        <View className="h-64 max-w-[98%] mx-2 rounded-[25px]">
          <FlatList
            ref={flatListRef}
            data={carouselData[0]?.images}
            renderItem={({ item, index }) => (
              <CarouselItem
                items={item}
                index={index}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                flatListRef={flatListRef}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            scrollEnabled={true}
            style={{ borderRadius: 25 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
