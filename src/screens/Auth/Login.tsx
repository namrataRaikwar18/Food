import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  logo,
  intersect2,
  intersect1,
  authHeaderImg1,
  authHeaderImg2,
  auth1,
} from '../../assets/index';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenWrapper from '../../components/ScreenWrapper';
import {percentageHeight, percentageWidth} from '../../utils/Dimensions';
import {scale, verticalScale} from 'react-native-size-matters';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const percentageWidth = (initialWidth: number) => {
//   return (initialWidth / windowWidth) * 100;
// };

// const percentageHeight = (initialHeight: number) => {
//   return (initialHeight / windowHeight) * 100;
// };

const Login = () => {
  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.container}>

        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.splashView}>
        {/* <KeyboardAvoidingView 
        //  behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
      > */}
          <View style={styles.loginHeaderView}>
            <View style={styles.top1}>
              <Image source={auth1} style={styles.topImg} />
            </View>
            <View style={styles.headerView}>
              <Text style={[styles.loginHeaderText, styles.loginText]}>
                Log In
              </Text>
              <View style={{opacity: 0.9}}>
                <Text style={[styles.loginHeaderText, styles.loginText2]}>
                  Please sign in to your existing account
                </Text>
              </View>

              {/* <Image source={logo} style={styles.logoImg} /> */}
            </View>
            <View style={styles.intersectBottomView}>
              <Image source={authHeaderImg2} style={styles.bottomImg} />
            </View>
          </View>
          <View style={styles.loginMain}>
            <View style={styles.eachInput}>
              <Text style={styles.label}>PHONE /EMAIL</Text>
              <TextInput style={styles.input} placeholder="example@gmail.com" 
                placeholderTextColor={'#A0A5BA'}
                />
            </View>
            <View style={styles.eachInput}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                textContentType="password"
                placeholder="**********"
                placeholderTextColor={'#A0A5BA'}
              />
            </View>
            
          </View>
        {/* </KeyboardAvoidingView> */}
        </View>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121223',
  },
  splashView: {
    flex: 1,
    justifyContent: 'space-between',
    // flexDirection: 'row',
    position: 'relative',
  },
  loginHeaderView: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // position: 'relative',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  keyboardAvoidingView: {
     borderWidth: 1,
    borderColor: 'pink',
    flex: 1, // Ensures the view takes up the full screen
    // justifyContent: 'center', // Centers the content vertically
    // alignItems: 'center', // Centers the content horizontally
    // padding: 20, // Adds some padding around the content
 },
  headerView: {
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    paddingTop: responsiveHeight(percentageHeight(118)),
    justifyContent: 'space-between',
    // paddingHorizontal:'2%'
    paddingHorizontal: responsiveHeight(percentageHeight(42)),
    // top: '25%',
    // left: '50%',
    // transform: [{translateX: -50}, {translateY: -50}],
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
    backgroundColor: 'pink',
  },
  bottomImg: {
    // width: responsiveWidth(percentageWidth(217)),
    // height: responsiveHeight(percentageHeight(243)),
    width: responsiveWidth(percentageWidth(121)),
    height: responsiveHeight(percentageHeight(354)),
    // height:'40%',

    resizeMode: 'contain',
    // top:-89,
    position: 'absolute',
    // backgroundColor: 'pink',
    // left:responsiveHeight(percentageHeight(272)),
    // right:responsiveHeight(percentageHeight(-103)),
    right: responsiveHeight(percentageHeight(-16)),
  },
  topImg: {
    //   width: responsiveWidth(percentageWidth(183)),
    //   height: responsiveHeight(percentageHeight(105)),
    width: responsiveWidth(percentageWidth(138)),
    height: responsiveHeight(percentageHeight(138)),
    // width:scale(177),
    // height:verticalScale(177),
    resizeMode: 'contain',
    //   position:'absolute',
    //   top:-94,
    //   left:-83,
    // backgroundColor: 'red',
    // borderEndWidth:94,
  },
  loginHeaderText: {
    color: '#fff',
  },
  loginText: {
    fontSize: responsiveFontSize(percentageHeight(30)),
    fontWeight: '700',
    // opacity: 0.9
  },
  loginText2: {
    fontSize: responsiveFontSize(percentageHeight(16)),
    fontWeight: '400',
    // opacity:0.8,
    // opacity: 0.5
  },
  loginMain: {
    backgroundColor: '#FFFFFF',
    height: '70%',
    //   borderWidth: 1,
    // borderColor: 'yellow',
    // borderRadius: 24,
    borderTopLeftRadius: responsiveHeight(percentageHeight(24)),
    borderTopRightRadius: responsiveHeight(percentageHeight(24)),
    padding: responsiveHeight(percentageHeight(24)),
    gap: responsiveHeight(percentageHeight(24)),
  },
  label: {
    fontSize: responsiveFontSize(percentageHeight(13)),
    // marginBottom: 10,
    fontWeight: '400',
    color: '#32343E',
  },
  input: {
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    paddingLeft: 19,
    backgroundColor: '#F0F5FA',
    borderRadius: 10,
    height: responsiveHeight(percentageHeight(62)),
  },
  eachInput:{
    gap:8,
  }
});

export default Login;
