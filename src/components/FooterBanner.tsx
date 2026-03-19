import { Image, StyleSheet, View } from 'react-native';

export default function FooterBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/footer.png')} // troca pelo seu arquivo
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center', // centraliza a imagem
  },
  image: {
    width: 500, // NÃO usa 100%
    height: 200,
  },
});