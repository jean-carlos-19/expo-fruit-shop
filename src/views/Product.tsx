import { theme } from '@/global/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StatusBar, View, TouchableOpacity, Image, Text } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import StarRating from 'react-native-star-rating'
/* we are getting the fruit details in this new screen */
const Product = (props: any) => {
    const { color, desc, image, name, price, shadow, stars } = props.route.params;
    const navigation = useNavigation();

    return (
        <View className='flex-1' style={{ backgroundColor: color(1) }}>
            <StatusBar backgroundColor={color(1)} barStyle={'light-content'} />
            <View className="flex-row justify-start mx-5">
                <TouchableOpacity
                    style={{
                        backgroundColor: "rgba(255,255,255,.2)"
                    }}
                    className='border border-gray-50 rounded-xl'
                    onPress={() => navigation.goBack()}
                >
                    <ChevronLeftIcon size={30} color={"white"} />
                </TouchableOpacity>
            </View>
            <View
                className="flex-row justify-center mt-5 pb-10"
            >
                <Image source={image} style={{ width: 290, height: 290 }} />
            </View>
            <View 
                style={{borderTopLeftRadius:45,borderTopRightRadius:45}}
                className="bg-orange-50 flex-1 px-6 space-y-2">
                <Text className="mt-8 text-2xl font-bold">{ name }</Text>
                <View className="flex-row justify-between mb-3">
                    <Text className="text-gray-500 font-semibold"> {desc} </Text>
                    <Text className="text-gray-500 font-semibold"> 
                        Sold  <Text className="text-gray-800 font-extrabold">239</Text>
                    </Text>
                </View>
                <StarRating 
                    disabled={true}
                    starSize={18}
                    containerStyle={{width:120}}
                    maxStars={5}
                    rating={stars}
                    emptyStarColor={"lightgray"}
                    fullStar={require("../../assets/images/fullStar.png")}
                />
                <View style={{height:165}}>
                    <Text style={{color:theme.text}} className='tracking-wider py-3' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, enim ex explicabo tenetur dolorem fuga delectus id! Eius est temporibus, illum eveniet quibusdam vel tempore expedita eos cumque iure quo fuga sunt voluptate aliquam ea, tenetur sint sequi incidunt in dolores quod deserunt! Dolores quia aliquid maxime similique, dolorum ducimus?
                    </Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-3xl">$ {price} </Text>
                    <TouchableOpacity
                        className='text-3xl p-3 ml-6 flex-1 rounded-xl'
                        style={{
                            backgroundColor:shadow,
                            opacity:.6,
                        }}
                    >
                        <Text className="text-xl text-center text-white font-bold">Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { Product }
