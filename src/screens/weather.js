import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const weather = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.comun_box}>
        <TextInput placeholder="Nome da Cidade" />
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
