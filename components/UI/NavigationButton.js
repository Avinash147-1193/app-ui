import { View, Pressable, StyleSheet } from "react-native";
import IconHandler from "./IconHandler";

const NavigationButton = ({icon, size, color, onPress, libraryName}) => {
    //console.log(icon, size, color, onPress, libraryName, "hi");
    return (
        <Pressable onPress={onPress} android_ripple={{color: 'black', borderless: false,}} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <IconHandler icon={icon} size={size} color={color} libraryName={libraryName}/>
            </View>
        </Pressable>
    );
}

export default NavigationButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    }
});