import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';

import shoppingImg from '../assets/undraw_shopping_app_flsj.png';
import { LightGreenButton } from '../components/LightGreenButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    const navigation = useNavigation();
    function handleStart(){
        // navigation.navigate('UserIdentification'); CORRETO - TROCAR DEPOIS!!!!!!!!!!!!!!!!
        navigation.navigate('ComparationHistory');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Nossa missão é fazer {'\n'}
                você <Text style={styles.greenText}>economizar</Text>{'\n'}
                <Text style={styles.greenText}>dinheiro</Text> de verdade{'\n'}
                nas suas compras
            </Text>
            <View style={styles.buttonAlign}>
                <LightGreenButton title={"COMEÇAR"} 
                                  iconName={"chevron-right"} 
                                  onPress={handleStart}
                                  />
            </View>            
            <Image style={styles.image} source={shoppingImg} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 30,
        lineHeight: 48,
        textAlign: 'center',
        color: colors.dark_text,
        fontFamily: fonts.heading,
        marginTop: 90,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        zIndex: 1,
        elevation: 1
    },
    image: {
        height: Dimensions.get('window').width * 1.5,
        width: Dimensions.get('window').height * 0.5,
        zIndex: 0
    },
    greenText: {
        fontFamily: fonts.text,
        color: colors.green,
        lineHeight: 48,
        fontSize: 30
        
    },
    buttonAlign:{
        top: 40,
        zIndex: 2,
        elevation: 2
    }
})