import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { Button } from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FilterPage = (props) => {
  const { filters, filterOptions, setFilters } = props;
  const [category, setCategory] = useState({});
  const [jobType, setJobType] = useState({});
  const [location, setLocation] = useState([]);
  const [sort, setSort] = useState('Newest first');
  const [locationMap, setLocationMap] = useState(new Map());
  const {
    category: categoryOptions,
    jobType: jobTypeOptions,
    location: locationOptions,
  } = filterOptions;
  const dateOptions = [
    { item: 'Newest first', id: 'Newest' },
    { item: 'Oldest first', id: 'Oldest' },
  ];
  const onSet = () => {
    const newFilters = {
      category,
      jobType,
      location,
      sort,
    };
    // setFilters(newFilters);
  };

  const onMultiChange = (item) => {
    const newMap = locationMap;
    if (!newMap.has(item.id)) {
      newMap.set(item.id, item.item);
    } else {
      newMap.delete(item.id);
    }
    const newArr = Array.from(newMap, ([key, value]) => ({
      item: key,
      id: value,
    }));
    setLocationMap(newMap);
    setLocation(newArr);
  };

  return (
    <View style={styles.container}>
      <SelectBox
        label="Category"
        inputPlaceholder="Category"
        options={categoryOptions}
        value={category}
        onChange={(val) => {
          console.log('category', val);
          setCategory(val);
        }}
        hideInputFilter={true}
        labelStyle={styles.label}
        containerStyle={styles.filterContainer}
        optionContainerStyle={styles.optionContainer}
        arrowIconColor={Colors.dark}
      />
      <View style={styles.hr} />
      <SelectBox
        label="Job type"
        inputPlaceholder="Job type"
        options={jobTypeOptions}
        value={jobType}
        onChange={(val) => {
          console.log('jobType', val);
          setJobType(val);
        }}
        hideInputFilter={true}
        labelStyle={styles.label}
        containerStyle={styles.filterContainer}
        arrowIconColor={Colors.dark}
      />
      <View style={styles.hr} />
      <SelectBox
        label="Location"
        inputPlaceholder="Location"
        options={locationOptions}
        selectedValues={location}
        onMultiSelect={(val) => {
          onMultiChange(val);
        }}
        onTapClose={(val) => {
          onMultiChange(val);
        }}
        labelStyle={styles.label}
        containerStyle={styles.filterContainer}
        arrowIconColor={Colors.dark}
        isMulti
      />
      <View style={styles.hr} />
      <SelectBox
        label="Sort"
        inputPlaceholder="Sort"
        options={dateOptions}
        value={sort}
        onChange={(val) => {
          console.log('sort', val);
          setSort(val);
        }}
        hideInputFilter={true}
        labelStyle={styles.label}
        containerStyle={styles.filterContainer}
        arrowIconColor={Colors.dark}
      />
      <View style={styles.hr} />
      <Button onPress={() => onSet()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleText: {
    fontSize: 16,
    marginBottom: 8,
  },
  filterContainer: {
    backgroundColor: Colors.lighter,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  label: {
    display: 'none',
  },
  optionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FilterPage;

/*
    title, SEARCH
    company_name: companyName, SEARCH
    category, PICKER
    jobType, PICKER
    candidateRequiredLocation, SELECT
    publicationDate, SORT
*/
