import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";


import RequestPending from "../components/UI/RequestPending";
import SuggestedCollabs from "../components/UI/SuggestedCollabs";

const Collaborations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <RequestPending />
      </View>
      
      <View style={styles.containerInner}>
        <SuggestedCollabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerInner: {
    flex: 1,
  }
});

export default Collaborations;
