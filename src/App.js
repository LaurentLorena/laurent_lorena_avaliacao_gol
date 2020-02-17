import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WeatherScreen} from './screens';

const App = () => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <WeatherScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {flex: 1},
});

export default App;
