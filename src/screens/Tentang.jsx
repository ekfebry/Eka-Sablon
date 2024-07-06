import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import Img1 from '../assets/image/Eka_Sablon.png';

const About = () => {
  const handlePress = async () => {
    const url = 'https://wa.me/6281939776637';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Tidak dapat membuka URL');
    }
  };

  return (
    <View>
      <Image source={Img1} style={{ width: 400, height: 730 }} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Hubungi Kami via WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#25D366', // Warna WhatsApp
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});