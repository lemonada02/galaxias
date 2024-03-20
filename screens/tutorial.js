import { View, TouchableOpacity } from 'react-native';
import FlatButton from '../shared/flatButton';

export default function Tutorial({ navigation }) {

    return (
        <View>
            <FlatButton text="Nuevo Juego" onPress={() => navigation.navigate('NEWGAME')}/>
        </View>
    );
}