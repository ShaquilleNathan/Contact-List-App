import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ContactList'>

                <Stack.Screen
                    name='ContactList'
                    component={ContactListScreen} // Nomor 1
                    options={{
                        title: 'Contact List',
                        headerStyle: {
                        backgroundColor: '#81ff9f',
                        },
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='AddContact'
                    component={AddContactScreen} // Nomor 2
                    options={{
                       title: 'Add Contact',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;