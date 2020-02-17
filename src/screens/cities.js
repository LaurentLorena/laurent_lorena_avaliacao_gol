import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const cities = () => {
  return (
    <View style={styles.content}>
      <View style={styles.comun_box}>
        <Text> Cities </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  comun_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default cities;
