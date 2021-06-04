import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { LightGreenButton } from '../components/LightGreenButton'
//import { useNavigation } from '@react-navigation/core';


export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus() {
        setIsFocused(true);
    }
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }
    //const navigation = useNavigation();

    // function handleSubmit(){
    //     navigation.navigate('Confirmation');
    // }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                😊
                        </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                        </Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <LightGreenButton 
                                    title="Confirmar"
                                    iconName=""
                                    />
                                    {/* onPress={handleSubmit}/> */}
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 2,
        borderColor: colors.light_grey,
        color: colors.dark_text,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 28,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.dark_text,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'
    }

});