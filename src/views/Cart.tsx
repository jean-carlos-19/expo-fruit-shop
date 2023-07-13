import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, StatusBar } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { cartItems } from "@/global/data";
import { FruitCardCart } from "@/atomic/component";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex justify-between bg-orange-50">
      <StatusBar backgroundColor={" rgb(255, 247, 237)"} />
      <View className="flex-row justify-start mx-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border border-gray-300 rounded-xl"
        >
          <ChevronLeftIcon size={30} color={"gray"} />
        </TouchableOpacity>
      </View>
      <View className="mx-5 flex-1">
        <Text className="text-2xl py-10">
          Your <Text className="font-bold">Cart</Text>
        </Text>
        <View>
          {cartItems.map((fruit: any, i: number) => (
            <FruitCardCart fruit={fruit} key={i} />
          ))}
        </View>
        <View className="flex-row justify-end py-4">
          <Text className="text-lg">
            Total price:{" "}
            <Text className="font-bold text-yellow-500"> 450.80 </Text>
          </Text>
        </View>
        <View className="flex-row justify-center mx-7 my-4">
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              opacity: 0.8,
            }}
            className="p-3 flex-1 rounded-xl"
          >
            <Text className="text-xl text-center text-white font-bold">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { Cart };
