/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import IkonMenu from '../component/IkonMenu';
import Img1 from '../assets/image/beranda.png';

const Beranda = () => {
  return (
    <View>
      <Image source={Img1} style={{width: 400, height: 730}} />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
