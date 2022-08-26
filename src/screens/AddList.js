import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import CategoryDropForm from "../components/CategoryDropForm";

export default function AddList({navigation}) {

    const [text, onChangeText] = React.useState("Useless Text");

return (
    <View className="flex-1 bg-white">
        <StatusBar/>
            <View className="mt-11 mx-9 flex flex-row">
                <Text className="text-[25px] font-bold">Add List</Text>  
            </View>
            <View className="items-center justify-center mt-9">
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Name"/>
                <CategoryDropForm/>
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Choose Date"/>
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Description"/>
                <TouchableOpacity className="mb-8 rounded-md bg-red-400 w-80 items-center py-2">
                    <Text className="text-[20px] font-extrabold text-white">Add List</Text>
                </TouchableOpacity>
            </View>
    </View>
    );
}
