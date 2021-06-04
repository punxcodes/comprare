import React, {useState} from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity,
         TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {FontAwesome} from '@expo/vector-icons';

interface LighGreenButtonProps extends TouchableOpacityProps{
    title: string;
    iconName: string;
}

export function LightGreenButton({title, iconName, ...rest} : LighGreenButtonProps ){
    const [showIconElement, setShowIconElement] = useState(!!iconName);
    return(
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}  
                {...rest}              
                >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
                {   
                    showIconElement &&
                    <FontAwesome name={iconName} style={styles.buttonIcon}/>
                }
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.light_green,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginVertical: 10,
        marginHorizontal: 70,
        height: 70,
        width: 200
    },
    buttonText: {
        color: colors.green,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: fonts.text
    },
    buttonIcon:{
        color: colors.green,
        paddingLeft: 12,
        marginTop: 2,
        fontSize: 18,        
    }
})