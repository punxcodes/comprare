import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    StatusBar
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { LightGreenButton } from '../components/LightGreenButton';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useRef } from 'react';



export function NewComparation() {
    const navigation = useNavigation();

    function handleReturn() {
        navigation.navigate('ComparationHistory');
    }
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.return} 
                    onPress={handleReturn}
                >
                    <FontAwesome name="arrow-left" style={styles.backButtonIcon} />
                </TouchableOpacity>
                <TextInput
                    style={[styles.input]}
                    multiline= {false}
                    numberOfLines={1}
                    placeholder="Nome comparação 1 e blá blá blá faisudhsaiudh"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                />
            </View> 
            <View style={styles.content}>
                <Text style={styles.noItemsText}>
                    Nenhum item adicionado.{'\n'} 
                    Clique no botão + para adicionar
                </Text>
            </View>
            <View style={styles.footer}>
                {/* <View style={styles.boxLeft}>

                </View> */}
                {/* <View style={styles.buttonBox}>         */}
                    <LightGreenButton                   
                        title={"comparar"} 
                        iconName={""}
                    />
                {/* </View> */}
                <TouchableOpacity 
                    style={styles.addItemButton}  
                    onPress={onOpen}                  
                >
                    <FontAwesome name="plus" style={styles.addItemIcon} />
                </TouchableOpacity>                
            </View>
            <Modalize                 
                ref={modalizeRef}
                snapPoint={600}
                modalHeight={600}                
            >
                <Text style={{fontSize: 40}}>
                    chupa ai vagabundos
                </Text>
            </Modalize>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'space-between'        
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row' ,
        backgroundColor: colors.green,
        padding: 10               
    },
    backButtonIcon:{
        fontSize: 24,
        color: colors.light_text          
    },
    input:{
        color: colors.light_text,
        fontSize: 18,
        height: '100%',
        margin: 0,
        fontFamily: fonts.heading,
        width: '85%'   
    },
    return: {
        width: '100%',
        padding:10
    },
    comparationName: {

    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    noItemsText:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row' ,
        backgroundColor: colors.light_text,        
        padding: 5
    },
    addItemButton:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10,
        marginHorizontal: 70,
        height: 70,
        width: 70        
    },
    addItemIcon:{
        color: colors.light_text,
        fontSize: 38, 
    }

});
