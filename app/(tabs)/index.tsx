import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  useWindowDimensions
} from 'react-native';
import { useFonts } from 'expo-font';

import bgImageMobile from '@/assets/images/ChiraiMobile.png';
import bgImageDesktop from '@/assets/images/Chirai.png';

import InstaNickmus from '@/assets/images/InstaNickmus.png';
import ChiraiInsta from '@/assets/images/ChiraiInsta.png';
import InstaVendas from '@/assets/images/InstaVendas.png';
import VendasInsta from '@/assets/images/VendasInsta.png';
import InstaCacau from '@/assets/images/InstaCacau.png';
import LogoCacau from '@/assets/images/LogoCacau.png';
import colors from '@/constants/Colors';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Fascinate: require('@/assets/fonts/Fascinate-Regular.ttf'),
    Pompiere: require('@/assets/fonts/Pompiere/Pompiere-Regular.ttf')
  });

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  if (!fontsLoaded) return null;

  const items = [
    { type: 'title', title: 'Coisas que eu faço' },
    {
      type: 'list',
      items: [
        'Pintura no tênis',
        'Postagens de arte no Instagram',
        'Pinturas com guache, em papel e em parede',
        'Vendo brincos de origami, Cacau Show, Hinode, Pinturas no papel e Pintura personalizada em tênis',
        'Trabalho voluntário na biblioteca da escola (Sesi)',
        'Empréstimo de livros (Pedagógicos)'
      ]
    },
    { type: 'title', title: 'Instagram' },
    {
      type: 'item',
      image: InstaNickmus,
      subtitle: 'Post Instagram - @arte.nickmus',
      text: 'Esse é o meu Instagram onde posto coisas pessoais e também minhas artes.',
      instagramUrl: 'https://www.instagram.com/arte.nickmus?igsh=MXY5MzQ5NnBmc283bg==',
      instagramName: '@arte.nickmus'
    },
    {
      type: 'item',
      image: InstaVendas,
      subtitle: 'Post Instagram - @arte.nickmus_vendas',
      text: 'Esse é o meu Instagram de vendas, onde mostro minhas artes, produtos e promoções de coisas que vendo.',
      instagramUrl: 'https://www.instagram.com/arte.nickmus_vendas?igsh=aGRlZTg0d21vZnMx',
      instagramName: '@arte.nickmus_vendas'
    },
    {
      type: 'item',
      image: InstaCacau,
      subtitle: 'Post Instagram - @chirai.cacaushow',
      text: 'Esse é o meu Instagram da Cacau Show, onde mostro produtos e promoções.',
      instagramUrl: 'https://www.instagram.com/chirai.cacaushow/?igsh=MThzcHFoaWVweWxj#',
      instagramName: '@chirai.cacaushow'
    }
  ];

  const handlePressInstagram = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={isSmallScreen ? bgImageMobile : bgImageDesktop}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.customFont}>Meus trabalhos artísticos</Text>
          <Text style={[styles.customFont2, { color: colors.indigo }]}>De Nickmus</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.verdigris }]}>Trabalhos</Text>

        <View style={styles.container}>
          {items.map((item, index) => {
            if (item.type === 'title') {
              return (
                <Text key={index} style={styles.sectionTitle}>
                  {item.title}
                </Text>
              );
            }

            if (item.type === 'list') {
              return (
                <View key={index} style={styles.listContainer}>
                  {item.items.map((listItem, listIndex) => (
                    <Text key={listIndex} style={styles.listItem}>
                      • {listItem}
                    </Text>
                  ))}
                </View>
              );
            }

            return (
              <View
                key={index}
                style={[
                  styles.itemContainer,
                  { flexDirection: isSmallScreen ? 'column' : 'row' }
                ]}
              >
                <Image
                  source={item.image}
                  style={[
                    styles.image,
                    {
                      width: isSmallScreen ? width * 0.9 : width * 0.4,
                      height: isSmallScreen ? width * 0.6 : width * 0.3
                    }
                  ]}
                  resizeMode="cover"
                />

                <View style={styles.textContainer}>
                  {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
                  <Text style={styles.text}>{item.text}</Text>

                  {item.instagramUrl && (
                    <TouchableOpacity
                      style={[
                        styles.instagramButton,
                        {
                          width: isSmallScreen ? width * 0.85 : 400,
                          height: isSmallScreen ? 80 : 100
                        }
                      ]}
                      onPress={() => handlePressInstagram(item.instagramUrl)}
                    >
                      <Image
                        source={
                          item.instagramName === '@chirai.cacaushow'
                            ? LogoCacau
                            : item.instagramName === '@arte.nickmus_vendas'
                            ? VendasInsta
                            : ChiraiInsta
                        }
                        style={[
                          styles.instagramImage,
                          {
                            width: isSmallScreen ? 60 : 80,
                            height: isSmallScreen ? 60 : 80
                          }
                        ]}
                        resizeMode="cover"
                      />
                      <View style={styles.instagramTextContainer}>
                        <Text
                          style={[
                            styles.instagramTitle,
                            { fontSize: isSmallScreen ? 14 : 16 }
                          ]}
                        >
                          Instagram ({item.instagramName})
                        </Text>
                        <Text
                          style={[
                            styles.instagramSubtitle,
                            { fontSize: isSmallScreen ? 12 : 14 }
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.indigo,
    paddingBottom: 50
  },
  backgroundImage: {
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(245, 245, 245, 0.31)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  content: {
    padding: 16
  },
  customFont: {
    fontFamily: 'Fascinate',
    fontSize: 48,
    textAlign: 'center'
  },
  customFont2: {
    fontFamily: 'Pompiere',
    fontSize: 20,
    marginTop: 6,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Fascinate',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20
  },
  sectionTitle: {
    fontFamily: 'Fascinate',
    fontSize: 28,
    color: colors.verdigris,
    marginBottom: 20,
    textAlign: 'left'
  },
  container: {
    gap: 24
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 10
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    maxWidth: '90%'
  },
  image: {
    borderRadius: 12
  },
  subtitle: {
    fontFamily: 'Fascinate',
    fontSize: 24,
    color: colors.verdigris,
    marginBottom: 6,
    textAlign: 'left'
  },
  text: {
    fontFamily: 'Pompiere',
    fontSize: 22,
    color: colors.verdigris,
    textAlign: 'left'
  },
  listContainer: {
    marginBottom: 20,
    paddingLeft: 10
  },
  listItem: {
    fontFamily: 'Pompiere',
    fontSize: 20,
    color: colors.verdigris,
    marginBottom: 8
  },
  instagramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verdigris,
    padding: 10,
    borderRadius: 12,
    marginTop: 12,
    alignSelf: 'center'
  },
  instagramImage: {
    borderRadius: 8,
    marginRight: 10
  },
  instagramTextContainer: {
    flex: 1
  },
  instagramTitle: {
    fontFamily: 'Fascinate',
    color: 'white'
  },
  instagramSubtitle: {
    fontFamily: 'Pompiere',
    color: 'white'
  }
});
