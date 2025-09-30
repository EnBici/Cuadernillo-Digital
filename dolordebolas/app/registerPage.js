import {View,Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../src/AuthContext';

export default function registerPage() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setcontrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [codigo, setCodigo] = useState(null);
    const {setAutenticado} = useAuth();

    const router = useRouter();

    const enviarRegister = async () => {
        try {
            const response = await axios.post(
                'https://0b735ead8d66.ngrok-free.app/register',JSON.stringify(
                {
                    user: usuario,
                    pass: contrasena,
                    mail: email,
                    name: nombre,
                })
            );
            console.log(response.status);
            setRespuesta(JSON.stringify(response.data));
            setCodigo(response.status);

            
            if (response.status === 200) {
                setAutenticado(true);
                router.replace('/pag2');
            }
        } catch (error) {
            setRespuesta("El usuario ya existe o hay un error en los datos");
            setCodigo(400);
            
        }
    }


    return (
        <View style={styles.container}>
            <Pressable style={styles.volve} onPress={() => router.replace('/logPage')}>
                <Text>Volver</Text>
            </Pressable>

           
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/Logo.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

          
            <View style={styles.inputsContainer}>
                <TextInput 
                    placeholder='Usuario' 
                    style={styles.wuajaja} 
                    value={usuario}
                    onChangeText={setUsuario}
                />
                <TextInput 
                    placeholder='Nombre completo' 
                    style={styles.wuajaja} 
                    value={nombre} 
                    onChangeText={setNombre}
                />
                <TextInput 
                    placeholder='Email' 
                    style={styles.wuajaja}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    placeholder='Contraseña' 
                    style={styles.wuajaja} 
                    value={contrasena}
                    onChangeText={setcontrasena}
                    secureTextEntry
                />
                <TextInput 
                    placeholder='Repetir contraseña' 
                    style={styles.wuajaja} 
                    value={confirmarContrasena}
                    onChangeText={setConfirmarContrasena}
                    secureTextEntry
                />

                
                <Pressable onPress={enviarRegister} >

                    <Text style={styles.aceta}>aceta</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#282828",
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    volve: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex: 10,
    },
    logoContainer: {
        position: 'absolute',
        height: 100,
        width: '100%',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 0,
    },
    logo: {
        width: 250,
        height: 250,
    },
    inputsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wuajaja: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
        alignContent: 'center',
    },

    aceta: {
        marginTop: 20,
        width: 80,
        textAlign: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
        backgroundColor: '#fff',
    },
});