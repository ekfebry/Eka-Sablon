/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IkonMenu from '../component/IkonMenu';
import Img2 from '../assets/image/kaos1.jpg';

const Produk = ({navigation}) => {
  return (
    <View>
      <IkonMenu/>
      <Image source={Img2} style={{width: 200, height: 200, alignSelf: 'center'}} />
      <Text style={styles.produk}>Sablon Kaos</Text>
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  produk: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
});
