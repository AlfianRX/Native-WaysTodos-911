import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryDrop from "../components/CategoryDrop";
import StatusDrop from "../components/StatusDrop";

export default function TodoList({navigation}) {

    const todos = [
        {
            title: 'Belajar Golang',
            desc: 'Sinau masxeh'
        },
        {
            title: 'Kerjain PR',
            desc: 'Sinau masxeh'
        },
        {
            title: 'Beli Sayur',
            desc: 'Sinau masxeh'
        },
        {
            title: 'Healing',
            desc: 'Sinau masxeh'
        },
    ]

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
                <View className="flex flex-row gap-2">
                    <View>
                        <CategoryDrop/>
                    </View>
                    <View>
                        <StatusDrop/>
                    </View>
                </View>
            </View>
            <View className="flex-1 items-center">
                <FlatList
                    data={todos}
                    key={item => item.index}
                    renderItem={({item})=>(
                        
                            <TouchableOpacity className="mb-4 rounded-md border-2 border-blue-400 bg-blue-100 w-80
                                px-4 py-4" onPress={()=> navigation.navigate("Detail List")}>
                                    <Text className="font-bold text-[18px] mb-3">{item.title}</Text>
                                    <Text>{item.desc}</Text>
                            </TouchableOpacity>                          
                        
                    )}
                />       
                
            </View>
    </View>
    );
}
