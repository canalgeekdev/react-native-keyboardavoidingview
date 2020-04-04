import React from 'react'
import { StyleSheet, View, TextInput, Image,
          Text,
          TouchableOpacity,
          KeyboardAvoidingView,
          } from 'react-native'

export default function App() {

  function validaSenhas() {
    alert("Usuário cadastrado !")
  }

  return (  

    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      >

        <View
          style={styles.containerView}
          >

          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          />

          <TextInput 
            placeholder="Nome completo"
            placeholderTextColor="#7f8c8d"
            autoCorrect={false}
            style={styles.input} />

          <TextInput 
            placeholder="E-mail"
            placeholderTextColor="#7f8c8d"
            keyboardType="email-address"
            style={styles.input} />

          <TextInput 
            placeholder="Senha"
            placeholderTextColor="#7f8c8d"
            keyboardType="numeric"
            secureTextEntry={true}
            style={styles.input} />

          <TextInput 
            placeholder="Confirme a Senha"
            placeholderTextColor="#7f8c8d"
            keyboardType="numeric"
            secureTextEntry={true}
            style={styles.input} />
          <TouchableOpacity
            style={styles.botaoCadastro}
            onPress= { () => validaSenhas() }
            >
              <Text style={styles.textBotaoCadastro}>Registrar</Text>
          </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#34495e',
  },
  containerView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#34495e',
  },
  input: {
    marginTop: 200,
    backgroundColor: '#ecf0f1',
    width: 250,
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: 30,
    marginBottom: 40,
  },
  botaoCadastro: {
    width: 250,
    height: 40,
    backgroundColor: "#f39c12",
    marginTop: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textBotaoCadastro: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",

  }
})
