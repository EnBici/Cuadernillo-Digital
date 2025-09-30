import { View, Text, Image, Pressable, ImageBackground} from "react-native"; 
import { StyleSheet } from "react-native";  
import { Link , useRouter} from "expo-router";
import { useAuth } from "../src/AuthContext";
import Barrita from "../src/Barrita";



export default function pag2() {    
    const {autenticado} = useAuth();
    const router = useRouter();

    if(!autenticado){
        router.push('/'); 
    }

    return (   

        <View Aschild style={styles.container} >
            <Text>Pag2 Screen</Text>
        
            
            {Barrita()}
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
        backgroundColor: '#013345',
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
    
});