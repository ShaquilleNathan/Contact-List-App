import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import realm from '../../store/realm';

const ContactListScreen = (props) => {
    const { navigation } = props;
    const [data, setData] = useState([]);
    const getData = () => {
        const allData = realm.objects('Contact') 
        setData(allData); 
    };

    const deleteContact = (id) => {
        const data = realm.objects('Contact').filtered(`id = ${id}`);
        realm.write(() => {
        realm.delete(data);
        });

        const collectData = realm.objects('Contact');
        setData(collectData);
        };

        useEffect(() => {
            const focusListener = navigation.addListener('focus', () => {
              getData();
            });
            return focusListener;
          }, []);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                contentContainerStyle={styles.flatListContainer}
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => {
                    return (
                        <View style={styles.mainDataContainer}>
                            <View style={styles.noteContainer}>
                                <Text style={styles.nameText}>
                                    {item.name} 
                                </Text>
                                <Text style={styles.numberText}>
                                    {item.phoneNumber} 
                                </Text>
                            </View>

                            <TouchableOpacity
                            style={styles.contactButton}
                            onPress={() => deleteContact(item.id)}
                            >
                            <Icon
                            name="cross"
                            type="entypo"
                            />
                            </TouchableOpacity>
                        </View>
                    )
                }}
                ListEmptyComponent={
                    <View style={styles.noItems}>
                        <Text>No items.</Text>
                    </View>
                }
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddContact')}
                >
                    <Icon
                        name="plus"
                        type="antdesign"
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ContactListScreen;

const styles = StyleSheet.create ({
    mainContainer: {
       flex: 1
    },
    flatListContainer: {
        padding: 8
    },
    mainDataContainer: {
        margin: 8,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
     },
     nameText: {
        fontSize: 20,
        fontWeight: 'bold',
     },
     numberText: {
        fontSize: 18
     },
     buttonContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16
     },
     addButton: {
        backgroundColor: '#B7F1D4',
        padding: 16,
        borderRadius: 100
     },
     noItems: {
        alignItems: 'center', 
        margin: 8,
    },
});