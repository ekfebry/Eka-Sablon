import React from 'react';
import { Image, View } from 'react-native';
import Img1 from '../assets/image/tentangkami.png';

const About = () => {
  return (
    <View>
      <Image source={Img1} style={{ width: 400, height: 780 }} />
    </View>
  );
};

export default About;