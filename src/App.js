import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Router} from './services';
import {Provider} from 'react-redux';
import {Stores} from './stores';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={Stores}>
      <NavigationContainer>
        <SafeAreaView style={styles.safe_area}>
          <Router />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safe_area: {flex: 1},
});

export default App;
