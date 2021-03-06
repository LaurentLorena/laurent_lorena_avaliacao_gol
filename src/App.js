import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Router} from './services';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safe_area}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safe_area: {flex: 1},
});

export default App;
