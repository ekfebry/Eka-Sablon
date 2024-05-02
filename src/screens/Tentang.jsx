import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View>
      <Text style={styles.produk}>Ke Tentang</Text>
      <Text style={styles.descripsion}>hhhhhhhhhh</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  produk: {
    fontSize: 40,
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
