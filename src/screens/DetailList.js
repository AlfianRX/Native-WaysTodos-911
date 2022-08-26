import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView, TouchableHighlight } from "react-native";

export default function DetailList({navigation}) {

return (
    <View className="flex-1 bg-white">
        <StatusBar/>
            <View className="mt-11 mx-6 rounded-md bg-blue-300 px-2 py-2">
                    <Text className="bg-blue-500 rounded-md 
                        px-2 py-1 text-white font-bold 
                        absolute top-3 right-4">
                        Study</Text>
                    <Image className="rounded-full bg-white absolute top-11 right-4"
                        source={{uri:'https://res.cloudinary.com/alfiancloud/image/upload/v1661524163/waystodo/Vector_slaxjp.png'}}
                        style={{width:30,height:30}}/>
                <View className="flex flex-row">
                    <View className="basis-3/4 ml-4 ">
                        <Text className="text-[25px] font-bold text-white">Study - Golang</Text>                    
                    </View>
                    
                </View>
                <View className="items-center justify-center px-4 mt-9">
                    <Text className="text-semibold text-indent-3 text-white">Learn Golang to improve fundamentals and familiarize with coding.
                        Advantages of Go, Go has advantages over other languages, including:
                    </Text>
                </View>
            </View>
    </View>
    );
}
