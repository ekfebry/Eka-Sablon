import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import IkonMenu from '../component/IkonMenu';
import Img2 from '../assets/image/kaos.jpg';
import Img3 from '../assets/image/sweater.jpeg';
import Img4 from '../assets/image/totebag.jpeg';

const Produk = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: Img2,
      name: 'Sablon Kaos',
      description: 'Wujudkan kreativitas Anda dalam kaos premium berkualitas tinggi dengan desain custom sesuai keinginan, terbuat dari bahan katun combed yang lembut dan nyaman dipakai, serta dicetak menggunakan teknologi sablon digital yang menghasilkan gambar tajam, detail, dan tahan lama. Kaos ini siap menjadi kanvas untuk mengekspresikan diri Anda, baik sebagai hadiah unik, seragam komunitas, media promosi, atau sekadar untuk menunjukkan gaya personal Anda.',
      price: 70000,
    },
    {
      id: 2,
      image: Img3,
      name: 'Sweater',
      description: 'Sweater keren dengan desain custom sesuai keinginan Anda siap menemani Anda dalam berbagai suasana dan gaya. Ekspresikan diri Anda melalui desain unik yang Anda buat sendiri, atau pilih dari koleksi desain eksklusif kami. Terbuat dari bahan berkualitas tinggi yang nyaman dipakai, sweater ini akan menjadi pilihan tepat untuk melengkapi gaya Anda sehari-hari.',
      price: 150000,
    },
    {
      id: 3,
      image: Img4,
      name: 'Tas Totebag',
      description: 'Bawa semua kebutuhan Anda dengan gaya menggunakan totebag serbaguna kami! Desain custom sesuai keinginan Anda akan membuat totebag ini menjadi aksesori unik yang mencerminkan kepribadian Anda. Dengan kapasitas besar, totebag ini siap menemani aktivitas sehari-hari, dari belanja hingga bepergian. Terbuat dari bahan ramah lingkungan, totebag ini juga merupakan pilihan bijak untuk mengurangi penggunaan plastik.',
      price: 50000,
    },
  ];

  const toggleProductDetails = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <IkonMenu />
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <TouchableOpacity onPress={() => toggleProductDetails(product.id)}>
              <Image source={product.image} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.produk}>{product.name}</Text>
                <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
              </View>
            </TouchableOpacity>
            {expandedProduct === product.id && (
              <View style={styles.detailContainer}>
                <Text style={styles.detailTitle}>Detail Produk:</Text>
                <Text style={styles.description}>{product.description}</Text>
              </View>
            )}
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
    marginBottom: 20,
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
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  detailContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});