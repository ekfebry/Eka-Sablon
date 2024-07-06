import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
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
      price: 150000,
      features: [
        { icon: '✨', text: 'Kualitas Premium' },
        { icon: '', text: 'Desain Custom' },
        { icon: '', text: 'Berbagai Ukuran' },
      ],
    },
    {
      id: 2,
      image: Img3,
      name: 'Topi Custom',
      description: 'Topi keren dengan desain custom sesuai keinginan Anda. Cocok untuk berbagai gaya.',
      price: 100000,
      features: [
        { icon: '', text: 'Bahan Berkualitas' },
        { icon: '', text: 'Desain Custom' },
        { icon: '☀️', text: 'Melindungi dari Matahari' },
      ],
    },
    {
      id: 3,
      image: Img4,
      name: 'Tas Totebag',
      description: 'Tas totebag serbaguna dengan desain custom sesuai keinginan Anda. Kapasitas besar dan ramah lingkungan.',
      price: 120000,
      features: [
        { icon: '', text: 'Jahitan Kuat' },
        { icon: '', text: 'Desain Custom' },
        { icon: '♻️', text: 'Ramah Lingkungan' },
      ],
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
              <View style={styles.features}>
                {product.features.map((feature) => (
                  <Feature key={feature.icon} icon={feature.icon} text={feature.text} />
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Design')}>
        <Text style={styles.buttonText}>Lihat Produk Lainnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Feature = ({ icon, text }) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

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
  }},
)