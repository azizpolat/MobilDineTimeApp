import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const FlatLists = ({ items }) => {
  const route = useRouter();
  return (
    <TouchableOpacity
      onPress={() => route.push(`/restaurant/${items.name}`)}
      className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md"
    >
      <Image
        resizeMode="cover"
        source={{ uri: items?.image }}
        className="h-28 mt-2 mb-1 rounded-lg"
      />
      <Text className="text-white text-lg font-bold mb-2 mt-2">
        {items?.name}
      </Text>
      <Text className="text-white text-sm font-bold mb-2">
        {items?.address}
      </Text>
      <Text className="text-white text-base font-bold mb-2">
        Open: {items?.opening} - Close: {items?.closing}
      </Text>
    </TouchableOpacity>
  );
};

export default FlatLists;
