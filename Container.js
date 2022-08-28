import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//screens
import Home from './src/screens/Landingscreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import TodoList from './src/screens/TodoList';
import AddCategory from './src/screens/AddCategory';
import AddList from "./src/screens/AddList";
import DetailList from "./src/screens/DetailList";

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator
            screenOptions={({route}) =>({
                headerShown:false,

                tabBarIcon: ({focused}) =>{
                    let iconName;

                    if(route.name == "Todo List"){
                        iconName = focused ? "journal" : "journal-outline"
                    } else if(route.name == "Add Category"){
                        iconName = focused ? "bookmarks" : "bookmarks-outline" 
                    } else if(route.name == "Add List"){
                        iconName = focused ? "list" : "list-outline"
                    }

                    return <Ionicons name={iconName} size={20} color="red"/>
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "grey"
            })
        }
        >
            <Tab.Screen name="Todo List" component={TodoList}/>
            <Tab.Screen name="Add Category" component={AddCategory}/>
            <Tab.Screen name="Add List" component={AddList}/>

        </Tab.Navigator>
    )
}

export default function Container(){
    return(
    <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="Main" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Detail List" component={DetailList}/>
            <Stack.Screen
            name="Todo List2"
            component={MyTab}
            options={{
                headerShown: false,
                headerTintColor:"white",
                headerMode: 'screen',
            }}
            />
        </Stack.Navigator>

    </NavigationContainer>
    )
}