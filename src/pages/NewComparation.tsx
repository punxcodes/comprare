import React,{ useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';
import { FontAwesome } from '@expo/vector-icons';
import { LightGreenButton } from '../components/LightGreenButton';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useRef } from 'react';
import { Input } from 'react-native-elements';



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
    const [nameOfComparation, setNameOfComparation] = useState<string>();
    const [nameOfItem, setNameOfItem] = useState<string>();
    const [valueOfPrice, setValueOfPrice] = useState<number>();
    const [valueOfMeasure, setValueOfMeasure] = useState<string>();
    const [valueOfQuantityOfItems, setValueOfQuantityOfItems] = useState<number>();    
    const [valueOfNumberOfItems, setValueOfNumberOfItems] = useState<number>();    
    const [errorPrice,setErrorPrice] = useState<string>();
    const [errorMeasure,setErrorMeasure] = useState(null);
    const [errorQuantityOfItems,setErrorQuantityOfItems] = useState(null);
    const [errorNumberOfItems,setErrorNumberOfItems] = useState(null);

    const validar = () =>{

        return true;
    }

    function salvar(){
        if (validar()){
            alert('salvou');
        }
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!nameOfComparation);
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setNameOfComparation(value);
    }  

    var InputHeaderProps = {
        style: styles.input,
        multiline: false,
        numberOfLines:1,
        placeholder: "Nome comparação 1",
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        onChangeText: handleInputChange,
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
                    {...InputHeaderProps}
                />
            </View> 
            <View style={styles.content}>
                <Text style={styles.noItemsText}>
                    Nenhum item adicionado.{'\n'} 
                    Clique no botão + para adicionar
                </Text>
            </View>
            <View style={styles.footer}>
                    <LightGreenButton                   
                        title={"comparar"} 
                        iconName={""}
                    />
                <TouchableOpacity 
                    style={styles.addItemButton}  
                    onPress={onOpen}                  
                >
                    <FontAwesome name="plus" style={styles.addItemIcon} />
                </TouchableOpacity>                
            </View>            
            <Modalize                 
                ref={modalizeRef}
                snapPoint={570}
                modalHeight={570}                
            >
                <View style={styles.formContainer}>
                    <Text style={styles.textLabelFormContainer}>
                        Nome do Item (opcional)
                    </Text>
                    <Input
                        style={[styles.inputTextModal]}
                        multiline= {false}
                        numberOfLines={1}
                        placeholder="Ex: Garrafa água 600ml"
                        onChangeText={value => setNameOfItem(value)}                        
                    >
                    </Input>
                    <Text style={styles.textLabelFormContainer}>
                        Preço
                    </Text>
                    <Input
                        style={[styles.inputTextModal]}
                        multiline= {false}
                        numberOfLines={1}
                        placeholder="Ex: R$ 2,00"
                        keyboardType="number-pad"
                        onChangeText = {value => setValueOfNumberOfItems(parseFloat(value))}
                        errorMessage= {errorPrice}
                    >
                    </Input>
                    <Text style={styles.textLabelFormContainer}>
                        Medida
                    </Text>
                    <Input
                        style={[styles.inputTextModal]}
                        multiline= {false}
                        numberOfLines={1}
                        placeholder="Ex: mL"
                    >
                    </Input>
                    <View style={styles.QuantityAndNumberOfItensContainer}>
                        <View style={styles.QuantityContainer}>
                            <Text style={styles.textLabelFormContainer}>
                                Quantidade {'\n'}
                            </Text>
                            <Input
                                style={[styles.inputTextModalInline]}
                                multiline= {false}
                                numberOfLines={1}
                                keyboardType="number-pad"
                                placeholder="Ex: 600"
                            >
                            </Input>
                        </View>
                        <View style={styles.NumberOfItensContainer}>
                            <Text style={styles.textLabelFormContainer}>
                                Número de itens {'\n'}
                            </Text>
                            <Input
                                style={[styles.inputTextModalInline]}
                                multiline= {false}
                                numberOfLines={1}
                                keyboardType="number-pad"
                                placeholder="Ex: 3"
                            >
                            </Input>
                        </View>
                    </View>
                    <View style={styles.buttonsFooterContainer}>
                        <TouchableOpacity style={styles.buttonCancelFooter}>
                            <Text style={styles.textButtonCancelFooter}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAddFooter}>
                            <Text style={styles.textButtonAddFooter}>
                                Adicionar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        color: colors.light_text ,
        width: '70%'         
    },
    input:{
        color: colors.light_text,
        fontSize: 18,
        height: '100%',
        margin: 0,
        paddingHorizontal: 20,
        fontFamily: fonts.heading,
        width: '100%'   
    },
    return: {
        width: '20%',
        paddingHorizontal:20,
        paddingVertical: 10
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
    },
    formContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 5
    },
    inputTextModal:{
        width: '90%',
        fontFamily: fonts.text,
        fontSize: 16              
    },
    inputTextModalInline:{
        width: '100%',
        fontFamily: fonts.text,
        fontSize: 16         
    },
    textLabelFormContainer:{
        textAlign: 'left',
        width: '100%',
        fontFamily: fonts.heading,
        fontSize: 18,
        right: -10        
    },
    QuantityAndNumberOfItensContainer:{
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    QuantityContainer:{
        width: '50%',
        left: -10
    },
    NumberOfItensContainer:{
        width: '50%',
        right: 10
    },
    buttonsFooterContainer:{
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 20
    },
    buttonCancelFooter:{
        borderWidth: 2,
        padding: 20,
        width:'48%',
        borderColor: colors.medium_grey,
        borderRadius: 5        
    },
    buttonAddFooter:{
        borderWidth: 2,
        padding: 20,
        width:'48%',
        borderColor: colors.green,
        borderRadius: 5    
    },
    textButtonAddFooter:{
        textAlign: 'center',
        color: colors.green,
        fontFamily: fonts.heading,
        fontSize: 18
    },
    textButtonCancelFooter:{
        textAlign: 'center',
        color: colors.medium_grey,
        fontFamily: fonts.heading,
        fontSize: 18
    }

});
