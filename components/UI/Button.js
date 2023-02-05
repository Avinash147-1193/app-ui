import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Button({children, onPress, mode, style}) {

    return(
        <View style={style}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style= {[styles.buttonText, mode === 'flat' && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderColor: 'black',
        borderRadius: 10,
        padding: 8,
        borderStyle: 'solid'
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary700,
        borderRadius: 4
    }
});