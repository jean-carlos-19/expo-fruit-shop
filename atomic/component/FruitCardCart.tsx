import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";

interface fruit_card_cart {
  fruit: {
    color: any;
    desc: string;
    image: number;
    name: string;
    price: string;
    shadow: string;
    stars: number;
    qty: any;
  };
}

const FruitCardCart = (props: fruit_card_cart) => {
  const { fruit } = props;
  const { color, desc, image, name, price, shadow, stars, qty } = fruit;
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center space-x-5 mb-5">
      <View className="ml-7  ">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product", {
              color,
              desc,
              image,
              name,
              price,
              shadow,
              stars,
            })
          }
          className="flex-row -mb-10 -ml-8 shadow-lg z-20"
        >
          <Image
            source={image}
            style={{
              height: 65,
              width: 65,
              shadowColor: shadow,
              overflow: "visible",
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 0.4,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ backgroundColor: color(0.4), height: 60, width: 60 }}
          className="rounded-3xl flex justify-end items-center -ml-2"
        >
          <Text className="font-semibold text-center text-gray-800 pb-3 tracking-wide"></Text>
        </View>
      </View>

      <View className="flex-1 space-y-1">
        <Text className="text-base font-bold">{name}</Text>
        <Text className="text-yellow-500 font-extrabold">$ {price}</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
          <PlusIcon size={15} color={"white"} />
        </TouchableOpacity>
        <Text> {qty} </Text>
        <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
          <MinusIcon size={15} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { FruitCardCart };
