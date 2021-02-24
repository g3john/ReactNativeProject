import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterBar = (props) => {
  const [selected, setSelected] = useState(null);
  const setCategory = (selected) => {
    setSelected(selected);
    filtersSet(selected, null, null);
  };
  const filtersSet = props.filtersSet;
  const categories = props.categories;
  if (categories && categories[0] && categories[0].id !== -1) {
    categories.unshift({ id: -1, name: 'All', slug: null });
  }
  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => setCategory(itemValue)}>
        {categories.map((category) => {
          return (
            <Picker.Item
              key={'category ' + category.id}
              label={category.name}
              value={category.slug}
            />
          );
        })}
      </Picker>
      <Text>Filter</Text>
    </View>
  );
};

export default FilterBar;
