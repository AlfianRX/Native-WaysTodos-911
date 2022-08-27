import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login({navigation}) {

    const [form, setForm] = React.useState({
        email:'',
        password:''
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            
            const body = JSON.stringify(form);
            setIsLoading(true)
            const response = await axios.post('https://api.kontenbase.com/query/api/v1/7205b1b0-d903-47c9-9e8c-99d05599eb68/auth/login', body, config);
            console.log(response);

            setIsLoading(false)
            if (response) {
                await AsyncStorage.setItem('token', response.data.token);
            }

            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                console.log(value);
                navigation.navigate("Todo List2")
            }

        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            setIsLoading(false)
        }
    };

return (
    <View className="flex-1 items-center justify-center bg-white">
        <StatusBar/>
            <Image source={{ uri:'https://res.cloudinary.com/alfiancloud/image/upload/v1661414040/waystodo/landing_icon_dcshm9.png'}}
            style={{width:260, height:185}} />
            <Text className="text-[25px] font-bold mb-5 mt-5 place-self-left ">Login</Text>
            <View>
                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Email"
                onChangeText={(value) => handleOnChange('email', value)}
                value={form.email}/>

                <TextInput className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(value) => handleOnChange('password', value)}
                value={form.password}/>
            </View>

             <TouchableOpacity className="mb-8 rounded-md bg-red-400 w-80 items-center py-2"
             onPress={handleOnPress}>
                {
                    isLoading ? <Text className="text-[20px] font-extrabold text-white">Loading...</Text> : <Text className="text-[20px] font-extrabold text-white">Login</Text>
                }
                
            </TouchableOpacity>

            <Text>New Users ?
                <Text className="text-red-400 font-bold" onPress={()=> navigation.navigate("Register")}> Register</Text>
            </Text>
    </View>
    );
}
