import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import IkonMenu from '../component/IkonMenu';
import Img2 from '../assets/image/kaos.jpg';
import Img3 from '../assets/image/sweater.jpeg';
import Img4 from '../assets/image/totebag.jpeg';

const Produk = ({ navigation }) => {
  const products = [
    {
      id: 1,
      image: Img2,
      name: 'Sablon Kaos',
      description: 'Kaos berkualitas tinggi dengan sablon custom sesuai keinginan Anda. Tersedia berbagai ukuran dan warna.',
      price: 70000,
    },
    {
      id: 2,
      image: Img3,
      name: 'Sweater',
      description: 'Sweater keren dengan desain custom sesuai keinginan Anda. Cocok untuk berbagai gaya.',
      price: 150000,
    },
    {
      id: 3,
      image: Img4,
      name: 'Tas Totebag',
      description: 'Tas totebag serbaguna dengan desain custom sesuai keinginan Anda. Kapasitas besar dan ramah lingkungan.',
      price: 50000,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <IkonMenu />
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.produk}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>Rp {product.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Produk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169e1',
  },
  productContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  infoContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 14,
    marginTop: -40,
    marginHorizontal: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  produk: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 15,
    color: 'white',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});