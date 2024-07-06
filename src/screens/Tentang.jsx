import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';

const About = () => {
  const handlePress = async () => {
    // Ganti URL ini dengan URL WhatsApp atau website Anda
    const url = 'https://wa.me/6281939776637';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Tidak dapat membuka URL');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Eka_Sablon</Text>
        <Text style={styles.description}>
          Kami adalah spesialis sablon berkualitas tinggi dengan pengalaman lebih dari 10 tahun.
          Kami menawarkan berbagai layanan sablon untuk kaos, topi, tas, dan banyak lagi.
        </Text>
        <Text style={styles.instruction}>
          Untuk informasi lebih lanjut, silakan hubungi kami melalui WhatsApp:
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Hubungi Kami di WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#25D366', // Warna WhatsApp
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});