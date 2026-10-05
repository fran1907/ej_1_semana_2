import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (

    <SafeAreaView style={styles.contenedorPrincipal}>
      <Image source={require('./assets/register_now.png')} style={styles.foto1} resizeMode='contain'></Image>
      <ScrollView>
        <View style={styles.contenedorSecundario}>
          <View style={styles.contenedorFormulario}>
            <TextInput style={styles.cuadroTexto} maxLength={100} placeholder='Introduce tu nombre'></TextInput>
            <TextInput style={styles.cuadroTexto} maxLength={100} placeholder='Apellidos'></TextInput>
            <TextInput style={styles.cuadroTexto} maxLength={9} keyboardType='numeric' placeholder='Telefono'></TextInput>
            <TextInput style={styles.cuadroTexto} maxLength={100} keyboardType='email-address' placeholder='Correo Electronico'></TextInput>
            <TextInput style={styles.cuadroTexto} maxLength={12} secureTextEntry={true} placeholder='Contraseña'></TextInput>
            <TextInput style={[styles.cuadroTexto, styles.cuadroObservaciones]} maxLength={100} numberOfLines={5} multiline={true} placeholder='Observaciones'></TextInput>
            <View style={styles.contenedorPicker}>
              <Picker style={styles.colorGris}>
                <Picker.Item label="--Nivel de estudios--" value="ne" />
                <Picker.Item label="Secundaria" value="eso" />
                <Picker.Item label="Bachillerato" value="bh" />
                <Picker.Item label="Ciclo de FP" value="fp" />
                <Picker.Item label="Universidad" value="uni" />
                <Picker.Item label="Sin estudios" value="nada" />
              </Picker>
            </View>
            <Text style={styles.colorGris}>Pulsando el siguiente boton, el usuario se hace responsable de hacer uso correcto del portal, sin subir
              contenidos que supogan un incumplimiento de las leyes de proteccion de datos ni de la propiedad intelectual
            </Text>
            <BouncyCheckbox
              size={16}
              fillColor="red"
              unFillColor="white"
              text="He leído y acepto los términos"
              textStyle={{ textDecorationLine: 'none' }}
            />
            <Pressable style={({ pressed }) => pressed ? styles.estiloBotonPulsado : styles.estiloBoton}
              onPress={() => console.log("Boton pulsado")}>
              <Text style={styles.textoBoton}>Registrar</Text>
            </Pressable>
            <Text style={styles.colorGris}>Al pulsar el botón sus datos personales serán proporcionados a nuestro proveedor de
              publicidad, que insertará anuncios de suinterés durante el uso de la aplicación. Para dejar de ver anuncios, deberá
              adquirir la versión de pago de la app en la {Platform.OS === 'android' ? 'Play Store' : 'Aple Store'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={({ pressed }) => [styles.fab, { backgroundColor: pressed ? '#cc7000' : 'orange' }
        ]}
        onPress={() => console.log("FAB pulsado")}>
          <MaterialIcons style={styles.textoFab} name='share'></MaterialIcons>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1
  },
  foto1: {
    width: "100%",
    height: 200
  },
  contenedorSecundario: {
    backgroundColor: '#f5f3f3ff',
    width: "100%",
    padding: 12
  },
  contenedorFormulario: {
    backgroundColor: "white",
    padding: 20,
    gap: 12
  },
  cuadroTexto: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e7e5e5ff',
    borderRadius: 8

  },
  cuadroObservaciones: {
    width: '100%'
  },
  contenedorPicker: {
    borderColor: '#e7e5e5ff',
    borderWidth: 1,
    borderRadius: 8
  },
  colorGris: {
    color: '#8c8c8c'
  },
  estiloBoton: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: '#e45151ff',
    borderRadius: 25
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center"
  },
  estiloBotonPulsado: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: '#c13b3b',
    borderRadius: 25
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    borderRadius: '50%',
    width: 56,
    height: 56
  },
  textoFab:{
    color: 'white',
    fontSize: 24,
    margin: 'auto'
  }
})