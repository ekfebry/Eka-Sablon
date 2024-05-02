import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const IkonMenu = () => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.menu}>Selamat Datang di Produk Eka Sablon</Text>
      </View>
    </TouchableOpacity>
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
  },
});
