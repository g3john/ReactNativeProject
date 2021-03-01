import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FilterPage = (props) => {
  const { filters, filterOptions, setFilters } = props;
  const [category, setCategory] = useState();
  const [jobType, setJobType] = useState();
  const [location, setLocation] = useState();
  const [sort, setSort] = useState('Newest first');
  const {
    category: categoryOptions,
    jobType: jobTypeOptions,
    candidateRequiredLocation: locationOptions,
  } = filterOptions.category;
  const dateOptions = ['Newest first', 'Oldest first'];
  const onSet = () => {
    const newFilters = {
      category,
      jobType,
      location,
      sort,
    };
    // setFilters(newFilters);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>Search</Text>
      <TextInput
        style={styles.filter}
        value={title}
        onChangeText={(text) => setValue(title, text)}
      />
      <View style={styles.hr} />

      <Text style={styles.titleText} value={companyName}>
        Search by Company
      </Text>
      <TextInput style={styles.filter} />
      <View style={styles.hr} /> */}

      <Text style={styles.titleText}>Category</Text>
      <Picker
        selectedValue={category}
        style={styles.filter}
        onValueChange={(itemValue) => {
          setCategory(itemValue);
        }}>
        {categoryOptions &&
          categoryOptions.map((category) => {
            return (
              <Picker.Item
                key={'category ' + category}
                label={category}
                value={category}
              />
            );
          })}
      </Picker>
      <View style={styles.hr} />
      <Text style={styles.titleText}>Type</Text>
      <Picker
        selectedValue={jobType}
        style={styles.filter}
        onValueChange={(itemValue) => {
          setJobType(itemValue);
        }}>
        {jobTypeOptions &&
          jobTypeOptions.map((jobType) => {
            return (
              <Picker.Item
                key={'jobType ' + jobType}
                label={jobType}
                value={jobType}
              />
            );
          })}
      </Picker>
      <View style={styles.hr} />
      <Text style={styles.titleText}>Location</Text>
      <Picker
        selectedValue={location}
        style={styles.filter}
        onValueChange={(itemValue) => {
          setLocation(itemValue);
        }}>
        {locationOptions &&
          locationOptions.map((location) => {
            return (
              <Picker.Item
                key={'location ' + location}
                label={location}
                value={location}
              />
            );
          })}
      </Picker>
      <View style={styles.hr} />
      <Text style={styles.titleText}>Sort</Text>
      <Picker
        selectedValue={sort}
        style={styles.filter}
        onValueChange={(itemValue) => {
          setSort(itemValue);
        }}>
        {dateOptions &&
          dateOptions.map((publicationDate) => {
            return (
              <Picker.Item
                key={'publicationDate ' + publicationDate}
                label={publicationDate}
                value={publicationDate}
              />
            );
          })}
      </Picker>
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
  filter: {
    backgroundColor: Colors.lighter,
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
