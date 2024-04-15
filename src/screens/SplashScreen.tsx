import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {logo, intersect2, intersect1} from '../assets/index';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {percentageHeight, percentageWidth} from '../utils/Dimensions';
import ScreenWrapper from '../components/ScreenWrapper';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const percentageWidth = (initialWidth: number) => {
//   return (initialWidth / windowWidth) * 100;
// };

// const percentageHeight = (initialHeight: number) => {
//   return (initialHeight / windowHeight) * 100;
// };
type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);


  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.splashView}>
          <View style={styles.top1}>
            <Image source={intersect2} style={styles.topImg} />
          </View>
          <View style={styles.logoView}>
            <Image source={logo} style={styles.logoImg} />
          </View>
          <View style={styles.intersectBottomView}>
            <Image source={intersect1} style={styles.bottomImg} />
          </View>
        </View>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#FFFFFF"
  },
  splashView: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },
  logoView: {
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  intersectBottomView: {
    alignItems: 'flex-end',
  },
  top1: {
    // alignItems:'center'
  },
  logoImg: {
    width: responsiveWidth(percentageWidth(121)),
    height: responsiveHeight(percentageHeight(59)),
    resizeMode: 'contain',
  },
  bottomImg: {
    width: responsiveWidth(percentageWidth(217)),
    height: responsiveHeight(percentageHeight(243)),
    resizeMode: 'contain',
  },
  topImg: {
    width: responsiveWidth(percentageWidth(183)),
  
    height: responsiveHeight(percentageHeight(105)),
    resizeMode: 'contain',
  },
});

export default SplashScreen;
