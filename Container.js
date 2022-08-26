import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from './src/screens/Landingscreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import TodoList from './src/screens/TodoList';
import AddCategory from './src/screens/AddCategory';
import AddList from "./src/screens/AddList";
import DetailList from "./src/screens/DetailList";

let Stack=createStackNavigator();

export default function Container(){
    return(
    <NavigationContainer>

        <Stack.Navigator initialRouteName="TodoList">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="TodoList" component={TodoList} options={{headerShown: false}} />
            <Stack.Screen name="Add Category" component={AddCategory} options={{headerShown: false}} />
            <Stack.Screen name="Add List" component={AddList} options={{headerShown: false}} />
            <Stack.Screen name="Detail List" component={DetailList} options={{headerShown: false}} />
        </Stack.Navigator>

    </NavigationContainer>
    )
}