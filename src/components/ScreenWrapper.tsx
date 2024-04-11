import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children}) => {
  const route = useRoute();

  useEffect(() => {
    if (route.name === 'SplashScreen') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('#ffffff');
      StatusBar.setBarStyle('dark-content');
    }
  }, [route]);

  return <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default ScreenWrapper;
