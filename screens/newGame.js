import { View, Text } from 'react-native';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';

import Board from './board';

export default function NewGame({ navigation }) {

    return (
        <View style={{...globalStyles.contentModal}}>
            <Text style={{...globalStyles.titleText}}>Seleccione Dificultad</Text>

            <FlatButton text="7x7 Normal" onPress={() => navigation.navigate('PARTIDA', {difficulty: 'normal'}, {rows: "7"}, {columns: "7"})}/>
            <FlatButton text="7x7 Difícil" onPress={() => navigation.navigate('PARTIDA', {difficulty: 'hard'}, {rows: "7"}, {columns: "7"})}/>
            <FlatButton text="10x10 Normal" onPress={() => navigation.navigate('PARTIDA', {difficulty: 'normal'}, {rows: "10"}, {columns: "10"})}/>
            <FlatButton text="15x15 Normal" onPress={() => navigation.navigate('PARTIDA', {difficulty: 'normal'}, {rows: "15"}, {columns: "15"})}/>
            <FlatButton text="Personalizado" onPress={() => navigation.navigate('CREAR JUEGO')}/>

        </View>
    );
}