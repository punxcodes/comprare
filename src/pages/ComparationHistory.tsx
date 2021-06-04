import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    FlatList,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ComparationResult } from '../components/ComparationResult';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function ComparationHistory() {
    const navigation = useNavigation();
    function createComparation(){
        navigation.navigate('Welcome');
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={createComparation}>
                <Text style={styles.buttonText}>
                    Nova Comparação
                </Text>
                <FontAwesome name="plus" style={styles.buttonIcon}/>
            </TouchableOpacity>

            <FlatList
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
                renderItem={( {item} ) =>
                    <ComparationResult
                        title={'Arroz'}
                        bestItem={'Sepé'}
                        economy={'R$ 2,00'}
                    />
                }
                style={styles.comparationList}
            />             
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    newButton: {
        width: '100%'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: '5%'
    },
    button: {
        paddingVertical: 20,
        width: 350,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 1,
    },
    buttonText: {
        fontSize: 20,
        color: colors.light_text,
        fontFamily: fonts.heading
    },
    buttonIcon: {
        fontSize: 24,
        color: colors.light_text,
        paddingLeft: 20
    },
    comparationList: {
        width: '100%'
    }

})