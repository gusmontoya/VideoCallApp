import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import bg from '../../../assets/images/ios_BG-05.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const IncomingCallScreen = () => {
  return (
    
      <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <Text style={styles.name}>Gus Montoya</Text>
        <Text style={styles.phoneNumber}>ringing +1 415 564 1243</Text>

        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>

      <View style={styles.row}>
          <View style={styles.iconContainer}>
            <View style={styles.iconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={[styles.iconButtonContainer,{backgroundColor:'#2e7bff'}]}>
              <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
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
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    padding: 10, 
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: 'white',
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  }
});

export default IncomingCallScreen;