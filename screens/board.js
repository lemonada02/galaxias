import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';
import { MaterialIcons } from '@expo/vector-icons';

export default function Board({ route, navigation }) {

    let { difficulty, rows, columns } = route.params;
    rows = rows*2 - 1;
    columns = columns*2 - 1;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [winner, setWinner] = useState(false);
    const [pressed, setPressed] = useState({});
    const [cellColors, setCellColors] = useState({});
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

    const formatId = (row, column) => {
        return `${row}-${column}`;
    }

    function getAdjacentCells(row, column) {
        
        let morePressedLeft = 0;
        let morePressedRight = 0;

        if(row % 2 === 0){
            if(pressed[formatId(row - 2, column)] === true){
                morePressedLeft++;
            } if(pressed[formatId(row - 1, column + 1)] === true){
                morePressedLeft++;
            } if(pressed[formatId(row - 1, column - 1)] === true){
                morePressedLeft ++;
            } 
            if(pressed[formatId(row + 2, column)] === true){
                morePressedRight++;
            } if(pressed[formatId(row + 1, column + 1)] === true){
                morePressedRight++;
            } if(pressed[formatId(row + 1, column - 1)] === true){
                morePressedRight ++;
            }
        } if(column % 2 === 0){
            if(pressed[formatId(row, column - 2)] === true){
                morePressedLeft++;
            } if(pressed[formatId(row - 1, column - 1)] === true){
                morePressedLeft++;
            } if(pressed[formatId(row + 1, column - 1)] === true){
                morePressedLeft ++;
            } 
            if(pressed[formatId(row, column + 2)] === true){
                morePressedRight++;
            } if(pressed[formatId(row + 1, column + 1)] === true){
                morePressedRight++;
            } if(pressed[formatId(row - 1, column + 1)] === true){
                morePressedRight ++;
            }
        }

        return [morePressedRight, morePressedLeft];
    }

    const handlePress = (row, column) => {
        if(timerOn === false){
            setTimerOn(true);
        } 
        console.log('edge '+row+" -- "+column);

        setPressed(prev => ({...prev, [formatId(row, column)]: !prev[formatId(row, column)]}));

        const morePressedLeft = getAdjacentCells(row, column)[1];
        const morePressedRight = getAdjacentCells(row, column)[0];

        if(!pressed[formatId(row, column)] === true ) {
            if(morePressedLeft > 0){
                setCellColors(prev => ({...prev, [formatId(row, column - 1)]: 'red'}));
                setCellColors(prev => ({...prev, [formatId(row - 1, column)]: 'red'}));
            } if(morePressedRight > 0){
                setCellColors(prev => ({...prev, [formatId(row, column + 1)]: 'red'}));
                setCellColors(prev => ({...prev, [formatId(row + 1, column)]: 'red'}));
            }
        } else if(morePressedLeft > 1){
            setCellColors(prev => ({...prev, [formatId(row, column - 1)]: 'red'}));
            setCellColors(prev => ({...prev, [formatId(row - 1, column)]: 'red'}));
        } else if (morePressedRight > 1){
            setCellColors(prev => ({...prev, [formatId(row, column + 1)]: 'red'}));
            setCellColors(prev => ({...prev, [formatId(row + 1, column)]: 'red'}));
        } else {
            setCellColors(prev => ({...prev, [formatId(row, column - 1)]: 'green'}));
            setCellColors(prev => ({...prev, [formatId(row - 1, column)]: 'green'}));
            setCellColors(prev => ({...prev, [formatId(row, column + 1)]: 'green'}));
            setCellColors(prev => ({...prev, [formatId(row + 1, column)]: 'green'}));
        }
    }

    return(
        <View style={{...globalStyles.contentModal}}>
            <Text style={{...globalStyles.titleText}}>Mucha Suerte!</Text>
            <Text style={{...globalStyles.timer}}>{formatTime(time)}</Text>
            {difficulty === 'hard' && 
                <Text>Puntos: </Text>
            }

            <View style={{...globalStyles.board, width: windowWidth*0.9, height: windowHeight*0.6}}>

                {Array(rows).fill().map((_, row) => (
                    <View key={row} style={{flex: row % 2 != 0 ? 1 : 10, flexDirection: "row", }}>
                        {Array(columns).fill().map((_, column) => (
                            row % 2 != 0 && column % 2 != 0 ?
                                <View key={formatId(row, column)} 
                                    style={{
                                        flex: column % 2 != 0 ? 1 : 10, 
                                        backgroundColor: cellColors[formatId(row, column)] || 'green'
                                    }}
                                />
                                :
                                row % 2 != 0 || column % 2 != 0 ?
                                <TouchableOpacity key={formatId(row, column)} 
                                    style={{
                                        flex: column % 2 != 0 ? 1 : 10, 
                                        backgroundColor: pressed[formatId(row, column)] ? 'red' : 'green'
                                    }}
                                    onPress={() => handlePress(row, column)}
                                />
                                :
                                <View key={formatId(row, column)} 
                                    style={{
                                        flex: column % 2 != 0 ? 1 : 10, 
                                        backgroundColor: 'white'
                                    }}
                                />
                        ))}
                    </View>
                ))}

            </View>
            
            <FlatButton text="Volver a Inicio" onPress={() => {navigation.navigate('GALAXIAS'), setTimerOn(false)}} />
        </View>
    );
} 

const styles = StyleSheet.create({
    cell: {
    },
    edge: {
    }
});