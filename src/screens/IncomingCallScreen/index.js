import React from 'react';
import bg from '../../../assets/images/ios_BG-05.jpg';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const IncomingCallScreen = () => {
  return (
    
        <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
            <Text style={styles.name}>Gustavo</Text>
            <Text style={styles.phoneNumber}>ringing +1 415 123 5467</Text>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Ionicons name="ios-alarm" size={20} color={'white'}/>
                    <Text style={styles.IconText} color={'white'}>Remind Me</Text>
                </View>

                <View style={styles.iconContainer}>
                    <Ionicons name="ios-chatbubble" size={20} color={'white'}/>
                    <Text  style={styles.IconText} color={'white'}>Message</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Feather name="x-circle" size={60} color={'white'}/>
                    <Text  style={styles.IconText} color={'white'}>Decline</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Octicons name="check-circle" size={60} color={'white'}/>
                    <Text  style={styles.IconText} color={'white'}>Accept</Text>
                </View>
            </View>
        </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 100,
        marginBottom: 15,
    },
    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },
    bg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 10,
    },
    row{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    iconContainer{
        alignItems:  'center',
    },
    iconText{
        color: 'white',
    },
});

export default IncomingCallScreen