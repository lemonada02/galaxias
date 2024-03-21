import { View } from 'react-native';
import FlatButton from '../shared/flatButton';

export default function ContinueGame({ navigation }) {

    return (
        <View>
            <FlatButton text="Nuevo Juego" onPress={() => navigation.navigate('NUEVO JUEGO')}/>
        </View>
    );
}