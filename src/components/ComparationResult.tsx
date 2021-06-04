<View>
    <Text>
        Nome da comparação 1
</Text>
    <View>

    </View>
</View>



import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

interface ComparationResultProps extends TouchableOpacityProps {
    title: string;
    bestItem: string;
    economy: string; 
}

export function ComparationResult({ title, bestItem, economy, ...rest }: ComparationResultProps) {
    // const [showIconElement, setShowIconElement] = useState(!!iconName);
    const navigation = useNavigation();
    function createComparation(){
        navigation.navigate('Welcome');
    }
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <View style={styles.namesBox}>
                <Text style={styles.comparationName}>
                    {title}
                </Text>
                <View style={styles.item}>
                    <FontAwesome 
                        name='star'
                        color='gold'
                        size={24}
                    />
                    <Text style={styles.itemName}>
                        {bestItem}
                    </Text>
                </View>

            </View>

            <View style={styles.line}/>

            <View style={styles.economyBox}>
                <Text style={styles.economyText}>
                    Economia
                </Text>
                <Text style={styles.economyValue}>
                    {economy}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light_grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        height: 100,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        shadowRadius: 10,
        elevation: 5,
    },
    namesBox:{
        flexDirection: 'column',
        width: '65%',
        height: '100%',
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    },
    comparationName: {
        color: colors.dark_text,
        fontFamily: fonts.text,
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 9
    },
    item:{
        flexDirection: 'row'
    },
    itemName: {
        color: colors.dark_text,
        fontFamily: fonts.text,
        fontSize: 16,
        marginLeft: 10
    },
    line: {
        height: '80%',
        width: 1,
        borderColor: colors.dark_text,
        borderRightWidth: 1,
        borderStyle: 'dashed',
        // marginRight: 10
    },
    economyBox: {
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    },
    economyText: {
        color: colors.green,
        fontFamily: fonts.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
    economyValue: {
        color: colors.dark_text,
        fontFamily: fonts.text,
        fontSize: 16,
        fontWeight: 'bold',
    }

})