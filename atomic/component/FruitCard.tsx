import React, { useState } from 'react'
import { View, Image, Text,TouchableOpacity } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid';
import { Shadow } from 'react-native-shadow-2';


interface fruit_card_props {
    fruit: {
        color: (opacity: number) => string,
        image: any,
        name:string,
        price:string,
        shadow:string
    }
}
const FruitCard = (props: fruit_card_props) => {
    const { fruit } = props;
    const [isFavorite,setIsFavorite] = useState(false );
    
    return (
        <View
            style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
            className='mx-5'
        >
            <View className="flex-row justify-end">
                <TouchableOpacity 
                    onPress={()=>setIsFavorite(!isFavorite)}
                    className='p-2 rounded-full mr-4 mt-4'
                    style={{backgroundColor:'rgba(255,255,255,.3)'}}
                >
                    <HeartIcon size={25} color={isFavorite ? fruit.shadow:'white'} />
                </TouchableOpacity>
            </View>
            <View
                className="flex-row justify-center"
            >
                <Image
                    source={fruit.image}
                    style={{ width: 210, height: 210 }}
                />
            </View>
            <View
                className='ml-4 my-4'
            >
                <Text
                    className='font-bold text-xl text-white shadow'
                >
                    {fruit.name}
                </Text>
                <Text
                    className='font-bold text-lg text-white shadow tracking-wide'
                >
                    $ {fruit.price}
                </Text>
            </View>
        </View>
    )
}

export { FruitCard }
