import { View, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../shared/globalStyle"

export default function FlatButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={ onPress }>
            <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}