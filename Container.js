import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from './src/screens/Landingscreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import TodoList from './src/screens/TodoList';

let Stack=createStackNavigator();

export default function Container(){
    return(
    <NavigationContainer>

        <Stack.Navigator initialRouteName="TodoList">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="TodoList" component={TodoList} options={{headerShown: false}} />
        </Stack.Navigator>

    </NavigationContainer>
    )
}