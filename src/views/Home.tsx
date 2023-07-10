import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native'
import { Bars3BottomLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { theme } from '@/global/theme'
import { categories, featuredFruits } from '@/global/data'
import {FruitCard} from '@/atomic/component'



const Home = () => {

    const [activeCategory, setActiveCategory] = useState('Oranges');

    return (
        <View
            className='flex-1 bg-orange-50'
        >
            <StatusBar backgroundColor={"rgb(255,247,237)"} />
            {/* top Bar */}
            <View className="mx-5 flex-row justify-between items-center">
                <Bars3BottomLeftIcon size={30} color={"black"} />
                <TouchableOpacity className='p-2 rounded-xl bg-orange-100'>
                    <ShoppingCartIcon size={25} color={"orange"} />
                </TouchableOpacity>
            </View>

            {/* categories */}
            <View className="mt-4">

                <Text
                    style={{ color: theme.text }}
                    className="text-2xl tracking-widest font-medium ml-5">
                    Seasonal
                </Text>

                <Text className="text-3xl tracking-widest font-semibold ml-5">
                    Fruits and Vagetables
                </Text>

                <ScrollView
                    horizontal
                    className="mt-8 px-5"
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        categories.map((category: string, i: number) => {

                            let isActive: boolean = category === activeCategory;
                            let textClass = `text-xl ${isActive ? 'font-bold' : ''} `

                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => setActiveCategory(category)}
                                    className='mr-8 relative'
                                >
                                    <Text
                                        style={{ color: theme.text }}
                                        className={textClass}
                                    >
                                        {category}
                                    </Text>
                                    {
                                        isActive ? (
                                            <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                                                ___ _
                                            </Text>
                                        ) : (null)
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

            </View>

            {/* Fruits Carousel */}
            <View className="mt-8">
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        featuredFruits.map((fruit:any,i:number)=> (
                            <FruitCard fruit={fruit} key={i}  /> 
                        ))
                    }
                </ScrollView>
            </View>


        </View>
    )
}

export { Home }
