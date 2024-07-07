import React from 'react';
import { Image, View } from 'react-native';
import Img1 from '../assets/image/Eka_.png';

const About = () => {
  return (
    <View>
      <Image source={Img1} style={{ width: 400, height: 730 }} />
    </View>
  );
};

export default About;