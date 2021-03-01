import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterBar = (props) => {
  const { navigation } = props;
  const [selected, setSelected] = useState(null);
  const setCategory = (selected) => {
    setSelected(selected);
    filtersSet(selected, null, null);
  };
  const filtersSet = props.filtersSet;
  const categories = props.categories;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FilterPage');
        }}>
        <Text>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FilterBar;
