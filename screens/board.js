import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';
import { MaterialIcons } from '@expo/vector-icons';

export default function Board({ difficulty, rows, columns, navigation }) {

    const [board, setBoard] = useState([]);
    const [winner, setWinner] = useState(false);
    const [dots, setDots] = useState(0);
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000);
        } else if (!timerOn) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return(
        <View style={{...globalStyles.content}}>
            <Text style={{...globalStyles.titleText}}>Bienvenido a Galaxias!!</Text>
            <Text style={{...globalStyles.timer}}>{formatTime(time)}</Text>
            <TouchableOpacity onPress={() => setTimerOn(true)}>
                <View style={{...globalStyles.board}}>

                   
                </View>
            </TouchableOpacity>
            <FlatButton text="Volver a Inicio" onPress={() => navigation.navigate('GALAXIAS')} />
        </View>
    );
}