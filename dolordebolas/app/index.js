import {View, Text, Button} from 'react-native';
import { Link , useRouter} from 'expo-router';
import logPage from './logPage';
import pag2 from './pag2';


export default function main() {    
    const router = useRouter();
    return (   
        logPage()
    )}