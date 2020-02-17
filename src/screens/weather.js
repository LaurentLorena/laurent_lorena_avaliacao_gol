import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const weather = ({navigation}) => {
  return (
    <View style={styles.content}>
      <View style={styles.comun_box}>
        <TouchableOpacity onPress={() => navigation.navigate('CitiesScreen')}>
          <Text>Nome da Cidade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.comun_box}>
        <Text>mapa</Text>
      </View>
      <View style={styles.comun_box}>
        <Text>Previsão do tempo</Text>
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

export default weather;
