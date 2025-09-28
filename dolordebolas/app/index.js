import {View, Text, Button} from 'react-native';
import { Link , useRouter} from 'expo-router';
import logPage from './logPage';


export default function main() {    
    const router = useRouter();
    return (   
        logPage()
    )}