import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, BlurView } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../src/AuthContext';

export default function logPage() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setcontrasena] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [codigo, setCodigo] = useState(null);
    const router = useRouter();
    const {setAutenticado} = useAuth();


    const enviarLogin = async () => {
        try {
            const response = await axios.post(
                'https://7b72f420bb1a.ngrok-free.app/login',JSON.stringify(
                {
                    user: usuario,
                    pass: contrasena,
                })
            );
            console.log(response.status);
            setRespuesta(JSON.stringify(response.data));
            setCodigo(response.status);

            // Usa directamente response.status para navegar
            if (response.status === 200) {
                setAutenticado(true);
                router.replace('/pag2');
            }
        } catch (error) {
            setRespuesta("Usuario o contraseña incorrecta");
            setCodigo(400);
            //console.error('Error al enviar el login:', error);
        }
    }

    return (
        

        <ImageBackground
            source={require('../assets/cet1Logo.png')}
            //source={{ uri: 'https://picsum.photos/600/800' }}
            
            style={styles.container}
            resizeMode="cover"
            
        >
            <View style={styles.fondoLogin}>
              
            
        
                <Text style={styles.texto}>Inicio de sesion</Text>

                {codigo === 400 && <Text style={{ color: 'red', marginTop: 10 }}>{respuesta}</Text> }

                <TextInput 
                
                    placeholder='Usuario' 
                    style={styles.inputs}
                    value={usuario}
                    onChangeText={setUsuario}
                />
               <TextInput 
                    placeholder='Contraseña' 
                    style={styles.inputs}
                    value={contrasena}
                    onChangeText={setcontrasena}
                    secureTextEntry
                />


               <Pressable onPress={enviarLogin}>
                <View style={styles.boton}>
                    <Text style={styles.texto}>Iniciar session</Text>
                    
                    </View>
               </Pressable>

               <Pressable onPress={() => router.replace('/registerPage')}>
                    <Text style={styles.registrate}>
                        No tienes cuenta? Registrate
                    </Text>
                </Pressable>
            
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#282828",
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    fondoLogin: {
        backgroundColor: "#282828",
       overflow: 'hidden',
        width: '80%',
        height: '40%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    texto: {
        color: "white",
        fontSize: 18,
    },
    inputs:{
        marginTop: 20,
        textAlign: 'left',
        width: '80%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    
    boton: {
        marginTop: 15,
        backgroundColor: '#013345',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 50,
    },
    registrate: {
        marginTop: 2,
        color: 'white',
    },

    
});