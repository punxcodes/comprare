import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';


export function NewComparation() {
    const navigation = useNavigation();

    function handleReturn(){
        navigation.navigate('ComparationHistory');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.return}>
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.comparationName}>
                    Nova Comparação
                </Text>
            </View>
            <View style={styles.content}>
                Nenhum item na lista ainda, clique no botão de adicionar
            </View>
            <View style={styles.buttons}>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header:{

    },
    return:{

    },
    comparationName:{

    },
    content:{

    },
    buttons:{
        
    }

});