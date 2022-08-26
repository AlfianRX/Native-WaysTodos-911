import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Login({navigation}) {

    const [text, onChangeText] = React.useState("Useless Text");

return (
    <View className="flex-1 items-center justify-center bg-white">
        <StatusBar/>
            <Image source={{ uri:'https://res.cloudinary.com/alfiancloud/image/upload/v1661414040/waystodo/landing_icon_dcshm9.png'}}
            style={{width:260, height:185}} />
            <Text className="text-[25px] font-bold mb-5 mt-5 place-self-left ">Login</Text>
            <View>
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Email"/>
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Password"/>
            </View>

             <TouchableOpacity className="mb-8 rounded-md bg-red-400 w-80 items-center py-2"
             onPress={()=> navigation.navigate("Todo List2")}>
                <Text className="text-[20px] font-extrabold text-white">Login</Text>
            </TouchableOpacity>
            <Text>New Users ?
                <Text className="text-red-400 font-bold" onPress={()=> navigation.navigate("Register")}> Register</Text>
            </Text>
    </View>
    );
}
