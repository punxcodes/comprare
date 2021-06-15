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
    function createComparation() {
        navigation.navigate('NewComparation');
    }

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Arroz 2 Kg com 5 Kg",
            bestItem: "Arroz 5kg",
            economy: "R$ 2,00"
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28er",
            title: "Garrafa agua 5 L com 500 mL",
            bestItem: "Garrafa 5L",
            economy: "R$ 6,00"
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
            title: "Mussarela fatiada vs peça",
            bestItem: "Peça",
            economy: "R$ 0,90"
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb18ba",
            title: "Arroz 2 Kg com 5 Kg",
            bestItem: "1 Arroz 5kg",
            economy: "R$ 0,90"
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-4ad53abb28ba",
            title: "Garrafa agua 5 L com 500 mL",
            bestItem: "Garrafa 5L",
            economy: "R$ 6,00"
        },
        {
            id: "bd7acbea-c1b1-56c2-aed5-3ad53abb28ba",
            title: "Mussarela fatiada vs peça",
            bestItem: "Peça",
            economy: "R$ 0,80"
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={createComparation}>
                <Text style={styles.buttonText}>
                    Nova Comparação
                </Text>
                <FontAwesome name="plus" style={styles.buttonIcon} />
            </TouchableOpacity>
            <View style={styles.separator}>
                <FontAwesome name="clock-o" style={styles.iconSeparator} />
                <Text style={styles.textSeparator}>Últimas comparações</Text>
            </View>
            <View style={styles.line} />
            <FlatList
                data={DATA}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                    <ComparationResult
                        id={item.id}
                        title={item.title}
                        bestItem={item.bestItem}
                        economy={item.economy}
                    />
                }
                style={styles.comparationList}
                showsVerticalScrollIndicator={false}
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
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: '5%'
    },
    separator: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    textSeparator: {
        color: colors.dark_text,
        fontFamily: fonts.text,
        marginTop: 4
    },
    iconSeparator: {
        fontSize: 22,
        color: colors.dark_text,
        marginHorizontal: 8
    },
    line: {
        width: '100%',
        borderColor: colors.dark_grey,
        borderBottomWidth: 1,
        marginBottom: 20
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