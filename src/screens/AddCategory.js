import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";

export default function AddCategory({navigation}) {

    const [text, onChangeText] = React.useState("Useless Text");

return (
    <View className="flex-1 bg-white">
        <StatusBar/>
            <View className="mt-11 mx-9 flex flex-row">
                <Text className="text-[25px] font-bold">Add Category</Text>  
            </View>
            <View className="items-center justify-center mt-9">
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-9 px-3 bg-gray-200"
                placeholder="Name"/>
                <TouchableOpacity className="mb-8 rounded-md bg-red-400 w-80 items-center py-2">
                    <Text className="text-[20px] font-extrabold text-white">Add Category</Text>
                </TouchableOpacity>
            </View>
            <View className="mt-11 mx-9">
                <Text className="text-[25px] font-bold">List Category</Text>  
            </View>
            <View className="mt-4 mx-9 flex flex-row flex-wrap">
                <View className="basis-1/8 mx-1 mb-2">
                    <Text className="bg-red-400 rounded-md px-2 py-1 text-white font-bold">
                        Home Work</Text>
                </View>
                
            </View>
    </View>
    );
}
