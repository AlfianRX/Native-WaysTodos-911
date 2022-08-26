import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import CategoryDrop from "../components/CategoryDrop";
import StatusDrop from "../components/StatusDrop";

export default function TodoList({navigation}) {

return (
    <View className="flex-1 bg-white">
        <StatusBar/>
        <View className="mt-11 mx-5 flex flex-row">
            <View className="basis-3/4 ml-4">
                <Text className="text-[25px] font-bold">Hi Ananda</Text>
                <Text className="text-red-400">200 List</Text>
            </View>
            <View className="justify-center rounded-full border-2 border-red-600">
                <Image className="rounded-full" source={{uri : 'https://res.cloudinary.com/alfiancloud/image/upload/v1661230361/cld-sample-5.jpg'}}
                style={{width:50,height:50}}/>
            </View>
        </View>
            <View className="items-center justify-center mt-9">
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-12  mb-5 px-3 bg-gray-200"
                placeholder="Search List..."/>
                <View className="flex flex-row">
                    <View>
                        <CategoryDrop/>
                    </View>
                    <View>
                        <StatusDrop/>
                    </View>
                </View>
            </View>

             <TouchableOpacity className="mb-8 rounded-md bg-red-400 w-80 items-center py-2">
                <Text className="text-[20px] font-extrabold text-white">Login</Text>
            </TouchableOpacity>
            <Text>New Users ?
                <Text className="text-red-400 font-bold" onPress={()=> navigation.navigate("Register")}> Register</Text>
            </Text>
    </View>
    );
}
