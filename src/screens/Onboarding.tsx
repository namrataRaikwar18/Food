import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {onboarding1, onboarding2, onboarding3} from '../assets';
import {percentageHeight, percentageWidth} from '../utils/Dimensions';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ScreenWrapper from '../components/ScreenWrapper';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    id: 1,
    title: 'All your favorites',
    description:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    image: onboarding1,
  },
  {
    id: 2,
    title: 'Order from choosen chef',
    description:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    image: onboarding2,
  },
  {
    id: 3,
    title: 'Free delivery offers',
    description:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    image: onboarding3,
  },
];

const renderScreen = (item: {
  id?: number;
  title: any;
  description: any;
  image: any;
}) => {
  return (
    <View style={styles.onboardingView}>
      <Image source={item.image} style={styles.onboardingImg1} />
      <View style={styles.favTextView}>
        <Text style={styles.favText}>{item.title}</Text>
        <Text style={styles.foodText}>{item.description}</Text>
      </View>
    </View>
  );
};

const buttonLabel = (label: string) => {
  return (
    <View style={[styles.btns]}>
      <View
        style={[
          styles.nextBtn,
          {marginBottom: responsiveHeight(percentageHeight(16))},
        ]}>
        <Text style={styles.nextText}>{label}</Text>
      </View>
    </View>
  );
};

const Onboarding = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.scrollContainer}>
        <AppIntroSlider
          data={slides}
          renderItem={({item}) => (
            <View style={styles.slideContent}>{renderScreen(item)}</View>
          )}
          showSkipButton
          bottomButton
          activeDotStyle={{
            backgroundColor: '#FF7622',

            marginBottom: responsiveHeight(percentageHeight(40)),
          }}
          dotStyle={{
            backgroundColor: '#FFE1CE',

            marginBottom: responsiveHeight(percentageHeight(40)),
          }}
          renderNextButton={() => buttonLabel('NEXT')}
          renderDoneButton={() => (
            <View style={styles.btns}>
              <View style={styles.nextBtn}>
                <Text style={styles.nextText}>GET STARTED</Text>
              </View>
              <Text style={styles.skipText}></Text>
            </View>
          )}
          renderSkipButton={() => {
            return (
              <View style={styles.btns}>
                <View>
                  <Text style={styles.skipText}>Skip</Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  onboardingView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(percentageWidth(20)),
    paddingTop: responsiveHeight(percentageHeight(114)),
  },
  onboardingImg1: {
    width: responsiveWidth(percentageWidth(240)),
    height: responsiveHeight(percentageHeight(292)),
  },
  favText: {
    fontWeight: '800',
    fontSize: responsiveFontSize(percentageHeight(24)),
    color: '#32343E',
  },
  foodText: {
    fontWeight: '400',
    fontSize: responsiveFontSize(percentageHeight(16)),
    color: '#646982',
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: '#FF7622',
    width: responsiveWidth(percentageWidth(303)),

    height: responsiveHeight(percentageHeight(62)),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(percentageWidth(12)),
  },
  nextText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  skipText: {
    color: '#646982',
    fontSize: responsiveFontSize(percentageHeight(16)),
    fontWeight: '400',
  },
  favTextView: {
    alignItems: 'center',
    paddingTop: responsiveHeight(percentageHeight(63)),
    paddingBottom: responsiveHeight(percentageHeight(32)),
    gap: responsiveHeight(percentageHeight(18)),
  },
  btns: {
    // borderWidth:1,borderColor:'orange',
    alignItems: 'center',
    gap: responsiveHeight(percentageHeight(16)),
    // paddingTop:responsiveHeight(percentageHeight(69))
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: responsiveHeight(percentageHeight(150)),
  },
});
export default Onboarding;
