import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Home({navigation}) {
return (
    <View className="flex-1 items-center justify-center bg-white">
        <StatusBar/>
            <Image source={{ uri:'https://res.cloudinary.com/alfiancloud/image/upload/v1661413347/waystodo/accept-request_1_ndi7t4.png'}}
            style={{width:300, height:300}}/>
            <Text className="text-[35px] font-bold mb-3">Ways
                <Text className="text-red-700"> To</Text>
                <Text className="text-red-400">DO</Text>
            </Text>
            <Text className="text-center mb-16 mx-16">
                Write your activity and finish your activity.
                Fast, Simple and Easy to Use
            </Text>

            <TouchableOpacity className="rounded-md bg-red-400 w-80 items-center py-2 mb-9"
            onPress={()=> navigation.navigate("Login")}>
                <Text className="text-[20px] font-extrabold text-white">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity className="rounded-md bg-gray-400 w-80 items-center py-2"
            onPress={()=> navigation.navigate("Register")}>
                <Text className="text-[20px] font-extrabold text-white">Register</Text>
            </TouchableOpacity>
    </View>
    );
}

