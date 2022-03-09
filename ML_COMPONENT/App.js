import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const WIDTH = Dimensions.get('window').width   
const HEIGHT_MODAL = 700;


const MailComponent = ()=> {
  return (
    <TouchableOpacity
      disabled={true}
      style={styles.container}>
      
      <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Notifica por mail</Text>
          </View>
          <View>

          <TextInput style={styles.dataContainer}
            label="Asunto"
            variant="outlined"
            color='#1F4349'
            placeholder='Asunto'
            inputContainerStyle={{height:50}}
            inputStyle={{fontFamily:'SofiaPro'}}
            placeholderTextColor='#D8D8D8'

          />
          </View>

          <View>

          <TextInput style={styles.dataContainer}
            label="Para"
            variant="outlined"
            color='#1F4349'
            placeholder='Para'
            inputContainerStyle={{height:50}}
            inputStyle={{fontFamily:'SofiaPro'}}
            placeholderTextColor='#D8D8D8'

          />
          </View>

          <View>

          <TextInput style={styles.dataContainer}
            label="Mensaje"
            variant="outlined"
            color='#1F4349'
            placeholder='Mensaje'
            inputContainerStyle={{height:50}}
            inputStyle={{fontFamily:'SofiaPro'}}
            placeholderTextColor='#D8D8D8'
              

          />
            <Text style={styles.textView} >¿Le gustaría recibir ofertas de trabajo 
              que solo se correspondan con lo que está buscando?
              ¿No es necesario enviar CV y postularse para vancantes?</Text>
            <Text style={styles.textView}>Dania Ruiz te ha invitado para que subas tu perfil 
              en lapieza.io y recibas las mejores ofertas. Deja que las 
              empresas lleguen a ti y regístrate: https://lapieza.io/registro?promo_code=DVda-Va65154 
              Saludos.</Text>
          </View>
       


      
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.touchableOpacity} >
                  <Text style={styles.textBtnLater}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.touchableOpacity, styles.btnContinue]} >
                  <Text style={styles.textBtnContinue}>Enviar</Text>
                </TouchableOpacity>
            </View>  




      </View>     
    
    </TouchableOpacity >


  )
}
    




  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
    
  
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 50,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textTitle: {
    fontFamily: 'SofiaPro',
    fontSize:20, 
    color:'#1E4146',
    marginBottom: 10, 
    textAlign:'center',
  }, 
  touchableOpacity: {
    height: 50,
    width: 120,
  },
  textView: {
    fontFamily: 'SofiaPro',
    fontSize:15, 
    color:'#1E4146',
    marginBottom: 10, 
    textAlign: 'justify',
    
  }, 
  btnView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }, 
  textBtnLater: {
    fontFamily: 'SofiaPro',
    fontSize:15, 
    color:'red',
    marginBottom: 3, 
    textAlign:'center',
    padding: 10,
  },
  btnContinue: {
    backgroundColor:'#1F4349',
    borderRadius: 10,
  },
  textBtnContinue: {
    fontFamily: 'SofiaPro',
    fontSize:15, 
    color:'white',
    marginBottom: 3, 
    textAlign:'center',
    alignContent: 'center',
    padding: 10,
  },
  dataContainer: {
    width: '100%', 
    borderRadius: 5, 
    marginBottom: 20,
  },


});

export default MailComponent;
