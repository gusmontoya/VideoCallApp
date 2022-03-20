import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}>
            <Text style={styles.name}>Gustavo</Text>
            <Text style={styles.phoneNumber}>ringing +1 415 123 5467</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <View style={styles.iconButton}>
                <Ionicons name="ios-camera-reverse" size={30} color={'white'}/>
            </View>

            <View style={styles.iconButton}>
                <MaterialIcons name="camera-off" size={30} color={'white'}/>
            </View>

            <View style={styles.iconButton}>
                <Ionicons name="ios-mic-off" size={30} color={'white'}/>
            </View>

            <View style={styles.iconButton}>
                <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#b1bf91',
    },
    cameraPreview: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
        name: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 50,
            marginBottom: 15,
        },
        phoneNumber: {
            fontSize: 20,
            color: 'white',
        },
        buttonsContainer: {
            backgroundColor: '#333333',
            padding: 20,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        iconButton: {
            backgroundColor: '#4a4a4a',
            padding: 10,
            borderRadius: 50,
        }
});

export default CallingScreen;