import React from 'react';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import Dashboard from './screens/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Dashboard />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
