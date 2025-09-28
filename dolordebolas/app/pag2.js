import { View, Text, Button} from "react-native";   
import { Link , useRouter} from "expo-router";
import { useAuth } from "../src/AuthContext";



export default function pag2() {    
    const {autenticado} = useAuth();
    const router = useRouter();

    if(!autenticado){
        router.push('/'); 
    }

    return (   

        <View asChild >
            <Text>Pag2 Screen</Text>
           
            <Button title="Go to Main" 
                onPress={() => router.push('/')}
            />
            
        </View>
    )}