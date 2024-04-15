import { Dimensions } from 'react-native';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const windowContentWidth = 327;
  
  const percentageWidth = (initialWidth: number) => {
    return (initialWidth / windowWidth) * 100;
  };
  
  const percentageHeight = (initialHeight: number) => {
    return (initialHeight / windowHeight) * 100;
  };

  const percentageContentWidth = (initialWidth: number) => {
    return (initialWidth / windowContentWidth) * 100;
    
  }

  export {percentageHeight, percentageWidth, percentageContentWidth};