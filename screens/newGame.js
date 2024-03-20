import { View, Text } from 'react-native';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';

export default function NewGame({ navigation }) {

    return (
        <View style={{...globalStyles.contentModal}}>
            <Text style={{...globalStyles.titleText}}>Seleccione Dificultad</Text>

            <FlatButton text="7x7 Normal" onPress={() => navigation.navigate('GAME', {difficulty: '7Normal'})}/>
            <FlatButton text="7x7 Difícil" onPress={() => navigation.navigate('GAME', {difficulty: '7Dif'})}/>
            <FlatButton text="10x10 Normal" onPress={() => navigation.navigate('GAME', {difficulty: '10Normal'})}/>
            <FlatButton text="15x15 Normal" onPress={() => navigation.navigate('GAME', {difficulty: '15Normal'})}/>
            <FlatButton text="Personalizado" onPress={() => navigation.navigate('CREAR JUEGO')}/>

        </View>
    );
}