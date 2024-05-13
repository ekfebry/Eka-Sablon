import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View>
      <Text style={styles.produk}>
        Untuk lebih lanjut silahkan klik tombol dibawah ini !!
      </Text>
      <Text style={styles.descripsion}>Eka_Sablon</Text>
      <Button title="Tombol" onPress={() => Alert.alert('belum berfungsi')} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  produk: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  descripsion: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
});
