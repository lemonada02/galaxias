import { View, TextInput, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';

import { Formik } from "formik";
import * as yup from "yup";

const gameSchema = yup.object({
    row: yup.string().required().test('is-num-3-15', 'El número de Filas estará entre 3-15', (val) => { //nombre, mensaje, funcion
        return parseInt(val) < 16 && parseInt(val) > 2;
    }),
    col: yup.string().required().test('is-num-3-15', 'El número de Columnas estará entre 3-15', (val) => { //nombre, mensaje, funcion
        return parseInt(val) < 16 && parseInt(val) > 2;
    }),
    diff: yup.string().required().oneOf(['normal', 'hard'], 'La dificultad debe ser normal o difícil'),
});

export default function CreateGame({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...globalStyles.content}}>
            <Formik 
                validationSchema={gameSchema} 
                initialValues={{ row: "", col: "", diff: "normal" }} 
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values.diff);
                    // navigation.navigate('PARTIDA', {difficulty: values.diff}, {rows: values.row}, {columns: values.col});
            }}>

                {(props) => (
                    <View>
                        <Text style={globalStyles.textInput}>Seleccione número de Filas</Text>
                        <TextInput minHeight={60} style={globalStyles.input} placeholder="Nº Filas" onChangeText={props.handleChange('row')} value={props.values.row} onBlur={props.handleBlur('row')}/>
                        <Text style={globalStyles.errorText}>{props.touched.row && props.errors.row}</Text>

                        <Text style={globalStyles.textInput}>Seleccione número de Columnas</Text>
                        <TextInput minHeight={60} style={globalStyles.input} placeholder="Nº Columnas" onChangeText={props.handleChange('col')} value={props.values.col} onBlur={props.handleBlur('col')}/>
                        <Text style={globalStyles.errorText}>{props.touched.col && props.errors.col}</Text>

                        <Text style={globalStyles.textInput}>Seleccione una Dificultad</Text>
                        <Picker selectedValue={props.values.diff} style={{...globalStyles.input}}
                            onValueChange={itemValue => props.setFieldValue('diff', itemValue)}>
                            <Picker.Item label="Normal" value="normal" />
                            <Picker.Item label="Difícil" value="hard" />
                        </Picker>
                        <Text style={globalStyles.errorText}>{props.touched.diff && props.errors.diff}</Text>

                        <FlatButton text="Comenzar" onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
        </TouchableWithoutFeedback>

    );
}