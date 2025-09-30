import { View, Text, Image, Pressable, ImageBackground} from "react-native"; 
import { StyleSheet } from "react-native";  
import { Link , useRouter} from "expo-router";
import { useAuth } from "../src/AuthContext";



export default function Barrita() {    
   
    const router = useRouter();
        return (   


            
            <View style={styles.Barrita}>

                <Pressable onPress={() => router.push('/logPage') } style={styles.Botom}>
                    <Image source={require('../assets/classroomLogo.png')} style={styles.ImgBarrita} ></Image>
                    <Text style= {styles.TextoBarrita}>Classroom</Text>
                </Pressable>

                <Pressable onPress={() => router.push('/logPage')}>
                    <Image source={require('../assets/libritob.png')} style={styles.ImgBarrita} >

                    </Image>
                    <Text style={styles.TextoBarrita}>Comunicados</Text>
                </Pressable>    

                

                <Pressable onPress={() => router.push('/logPage')}>
                    <Image source={require('../assets/cet1Logo.png')} style={styles.ImgBarrita} ></Image>
                    <Text>Boton 3</Text>
                </Pressable>

            </View>
       
    )}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#282828",
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: '100%',
        alignItems: 'center',
        
    },
    Barrita: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        color: "#FFFFFF",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderTopColor: "#ffffff",
    },
    ImgBarrita: {
        height: 50,
        width: 50,
    },
    TextoBarrita: {
        color: "#FFFFFF",
    },
    Botom: {
        textAlign: "center",
        alignItems: "center",
    }
    
});