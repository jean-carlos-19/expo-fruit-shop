import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

interface fruit_card_sales{
    fruit:{
        color:any,
        desc:string,
        image:number,
        name:string,
        price:string,
        shadow:string,
        stars:number
    }
}
const FruitCardSales = (props:fruit_card_sales) => {
  const {fruit} = props;
 const {color,desc,image,name,price,shadow, stars} = fruit;
  return (
    <View className='mr-6'>
     <TouchableOpacity
        className='flex-row justify-center shadow-lg z-20'
     >
        <Image 
            source={image}
            style={{
                height:65, width:65,
                shadowColor:shadow,
                overflow:"visible",
                shadowRadius:15,
                shadowOffset:{width:0,height:20},
                shadowOpacity:.4,
            }}
        />
     </TouchableOpacity>
     <View 
        style={{backgroundColor:color(0.4), height:75, width:80}}
        className="rounded-3xl flex justify-end items-center -mt-10">
        <Text className="font-semibold text-center text-gray-800 pb-3 tracking-wide">
            $ {price}
        </Text>
     </View>
    </View>
  )
}

export {FruitCardSales}