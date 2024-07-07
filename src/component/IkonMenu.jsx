import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IkonMenu = () => {
  return (
    <View>
      <Text style={styles.menu}>Berikut Beberapa Contoh Produk Eka Sablon </Text>
    </View>
  );
};

export default IkonMenu;

const styles = StyleSheet.create({
  menu: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
});