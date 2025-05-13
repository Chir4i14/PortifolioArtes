import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import colors from '@/constants/Colors';

import IndicaçõesCulturais from '@/assets/images/IndicaçõesCulturais.png';
import AtividadeArvore from '@/assets/images/AtividadeArvore.png';
import VanGogh from '@/assets/images/VanGogh.png';
import DropsDeAnis from '@/assets/images/DropsDeAnis.png';
import NoiteEstrelada from '@/assets/images/NoiteEstrelada.png';
import OFarol from '@/assets/images/OFarol.png';
import ParedePreta from '@/assets/images/ParedePreta.png';
import Tsurus from '@/assets/images/Tsurus.png';
import CharingCrossBridge from '@/assets/images/CharingCrossBridge.png';
import Tenis11 from '@/assets/images/Tenis11.png';
import Tenis12 from '@/assets/images/Tenis12.png';
import DesenhoDigital from '@/assets/images/DesenhoDigital.png';
import NoiteETintaNanquim from '@/assets/images/NoiteETintaNanquim.png';
import TintaNanquin from '@/assets/images/TintaNanquin.png';

import influencersImage from '@/assets/images/influencersdacultura.png';

const Explore = () => {
  const [fontsLoaded] = useFonts({
    Fascinate: require('@/assets/fonts/Fascinate-Regular.ttf'),
    Pompiere: require('@/assets/fonts/Pompiere/Pompiere-Regular.ttf'),
  });

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  if (!fontsLoaded) {
    return null;
  }

  const items = [
    { type: 'title', title: 'Design Digital' },
    { type: 'item', image: DesenhoDigital, subtitle: 'Desenho Digital de Águas Vivas', text: 'Quis fazer um desenho simples digital de águas vivas de um jeito diferante em relação as cores.' },
    { type: 'item', image: IndicaçõesCulturais, subtitle: 'Post Instagram', text: 'Esse é o trabalho de um post para uma página de Instagram que irá promover a cultura.' },
    { type: 'item', image: DropsDeAnis, subtitle: 'Divulgação de eventos culturais - Instagram', text: 'Arte inspirada no clube de cinema da escola "Drops de Anis", para a divulgação do clube.' },
    { type: 'title', title: 'Manualidades ' },
    { type: 'item', image: Tsurus, subtitle: 'Brincos', text: 'Venda de brincos, como: Tsuru, Coração e com Bolinhas de pulseira.' },
    { type: 'title', title: 'Estilização de Roupas ' },
    { type: 'item', image: Tenis11, subtitle: 'Tênis All Stars - Pinturas Aleatórias', text: 'Pintei esse tênis sendo um com a bandeira LGBTQIAPN+ e o outro preto e branco com desenhos aleatórios e música.' },
    { type: 'item', image: Tenis12, subtitle: 'aaa', text: 'aaa.' },
    { type: 'title', title: 'Pinturas' },
    { type: 'item', image: AtividadeArvore, subtitle: 'Atividade de criação livre', text: 'Atividade artística com elementos da natureza.' },
    { type: 'item', image: VanGogh, subtitle: 'Desenho de Canetinha', text: 'Interpretação da obra do Van Gogh.' },
    { type: 'item', image: ParedePreta, subtitle: 'Pintura e Estilização da Parede do meu quarto', text: 'Pintura feita a guache com contraste na parede escura, com fotos e desenhos a giz.' },
    { type: 'item', image: NoiteEstrelada, subtitle: 'Interpretação da obra "Noite Estrelada" de Van Gogh.', text: 'Pintura a Guache no papel A3.' },
    { type: 'item', image: OFarol, subtitle: 'Pintura da obra "O farol" de Anita Malfatti', text: 'Feita com guache no papel A3.' },
    { type: 'item', image: CharingCrossBridge, subtitle: 'Pintura da obra "Charing Cross Bridge" de André Derain', text: 'Feita com guache no papel A3.' },
    { type: 'item', image: TintaNanquin, subtitle: 'Pintura com tinta Nanquim', text: 'Inspirada em uma obra que já existe.' },
    { type: 'item', image: NoiteETintaNanquim, subtitle: 'Pintura com tinta Nanquim-Releitura Noite Estrelada', text: 'É um releitura que fiz de uma obra que amo de paixão.' },
  ];

  const handlePressInstagram = () => {
    Linking.openURL('https://www.instagram.com/influencersdacultura/');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.overlay}>
        <Text style={[styles.title, { color: colors.verdigris }]}>Trabalhos</Text>
      </View>

      <View style={styles.container}>
        {items.map((item, index) => {
          if (item.type === 'title') {
            return (
              <Text key={index} style={styles.sectionTitle}>
                {item.title}
              </Text>
            );
          }

          return (
            <View key={index} style={[styles.itemContainer, { flexDirection: isSmallScreen ? 'column' : 'row' }]}>
              <Image
                source={item.image}
                style={[
                  styles.image,
                  {
                    width: isSmallScreen ? width * 0.9 : width * 0.4,
                    height: isSmallScreen ? width * 0.6 : width * 0.3,
                  },
                ]}
                resizeMode="cover"
              />
              <View style={styles.textContainer}>
                {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
                <Text style={styles.text}>{item.text}</Text>

                {item.image === IndicaçõesCulturais && (
                  <TouchableOpacity
                    style={[
                      styles.instagramButton,
                      {
                        width: isSmallScreen ? width * 0.85 : 400,
                        height: isSmallScreen ? 80 : 100,
                      },
                    ]}
                    onPress={handlePressInstagram}
                  >
                    <Image
                      source={influencersImage}
                      style={[
                        styles.instagramImage,
                        {
                          width: isSmallScreen ? 60 : 80,
                          height: isSmallScreen ? 60 : 80,
                        },
                      ]}
                    />
                    <View style={styles.instagramTextContainer}>
                      <Text
                        style={[
                          styles.instagramTitle,
                          { fontSize: isSmallScreen ? 14 : 16 },
                        ]}
                      >
                        Instagram (@influencersdacultura)
                      </Text>
                      <Text
                        style={[
                          styles.instagramSubtitle,
                          { fontSize: isSmallScreen ? 12 : 14 },
                        ]}
                      >
                        Instagram photos and videos
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 50,
    backgroundColor: colors.yaleBlue,
  },
  container: {
    gap: 24,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Fascinate',
    fontSize: 40,
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: 'Fascinate',
    fontSize: 28,
    color: colors.verdigris,
    marginBottom: 20,
    textAlign: 'left',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 10,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    maxWidth: '90%',
  },
  image: {
    borderRadius: 12,
  },
  subtitle: {
    fontFamily: 'Fascinate',
    fontSize: 24,
    color: colors.verdigris,
    marginBottom: 6,
    textAlign: 'left',
  },
  text: {
    fontFamily: 'Pompiere',
    fontSize: 22,
    color: colors.verdigris,
    textAlign: 'left',
  },
  instagramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verdigris,
    padding: 10,
    borderRadius: 12,
    marginTop: 12,
    alignSelf: 'center',
  },
  instagramImage: {
    borderRadius: 8,
    marginRight: 10,
  },
  instagramTextContainer: {
    flex: 1,
  },
  instagramTitle: {
    fontFamily: 'Fascinate',
    color: 'white',
  },
  instagramSubtitle: {
    fontFamily: 'Pompiere',
    color: 'white',
  },
});

export default Explore;
