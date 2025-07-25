import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, View } from "react-native";

const CarouselItem = ({
  items,
  index,
  currentIndex,
  setCurrentIndex,
  flatListRef,
}) => {
  const windowWidth = Dimensions.get("window").width;

  const handleNextImage = () => {
    const nextIndex =
      currentIndex < flatListRef.current?.props?.data.length - 1
        ? currentIndex + 1
        : 0;
    setCurrentIndex(nextIndex);
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
  };

  return (
    <View style={{ width: windowWidth - 2 }} className="h-64 relative ">
      <View
        style={{
          position: "absolute",
          top: "50%",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 50,
          padding: 5,
          zIndex: 1,
          right: "6%",
        }}
      >
        <Ionicons
          onPress={handleNextImage}
          name="arrow-forward"
          size={24}
          color="white"
        />
      </View>

      <View>
        <Image
          source={{ uri: items }}
          style={{
            opacity: 0.5,
            backgroundColor: "black",
            marginRight: 20,
            marginLeft: 5,
            borderRadius: 25,
          }}
          className="h-64"
        />
      </View>
    </View>
  );
};

export default CarouselItem;
