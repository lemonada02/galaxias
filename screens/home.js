import { View, Text, Modal } from 'react-native';
import React, { useState } from 'react';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../shared/globalStyle';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={{...globalStyles.content}}>

        <Text style={{...globalStyles.titleBasic}}>Bienvenido a Galaxias!!</Text>

        <FlatButton text="Nuevo Juego" onPress={() => navigation.navigate('NUEVO JUEGO')}/>
        <FlatButton text="Cargar Juego" onPress={() => navigation.navigate('CARGAR JUEGO')}/>
        <FlatButton text="Tutorial" onPress={() => navigation.navigate('TUTORIAL')}/>

        <FlatButton text="Ranking" onPress={() => setModalOpen(true)} />

        <Modal visible={modalOpen} animationType='slide'>
          <View style={globalStyles.contentModal}>
            <MaterialIcons name="close" size={30} style={{...globalStyles.modalToggle, ...globalStyles.modalClose}} onPress={() => setModalOpen(false)}/>
              {/* Add ranking here  */}
            <Text style={globalStyles.titleText}>Ranking</Text>
              
          </View>
          
        </Modal>
    </View>
  );
}
