import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import realm from '../../store/realm';

const AddContactScreen = (props) => {
    const { navigation } = props;
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const saveContact = () => {
        if (name !== '' && phoneNumber !== '') {
            realm.write(() => {
                const data = realm.objects('Contact'); 
                const lastId = data.length === 0 ?
                                    1
                                    :
                                    data[data.length - 1].id;
                realm.create('Contact', { 
                    id: data.length === 0 ? 1 : lastId + 1,
                    name: name,
                    phoneNumber: phoneNumber
                });
            });
            navigation.navigate('ContactList');
        } else {
            alert('Can`t save your contact!');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Name</Text>
                <TextInput
                    placeholder='Write name here'
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            <Text style={styles.text}>Phone Number</Text>
                <TextInput
                    placeholder='Write phone number here'
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
             <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => saveContact(name, phoneNumber)}
                >
                    <Text style={styles.textButton}>
                        SAVE CONTACT
                    </Text>
                </TouchableOpacity>
            </View>
       </View>
    );
};

export default AddContactScreen;

const styles = StyleSheet.create ({
    mainContainer: {
        margin: 16,
        marginBottom: 0
    },
    text: {
        marginBottom: 8,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10
    },
    buttonContainer: {
        alignItems: 'center',
        margin: 16
    },
    saveButton: {
        backgroundColor: '#B7F1D4',
        padding: 16,
        borderRadius: 10
    },
    textButton: {
        fontWeight: 'bold'
    }
});