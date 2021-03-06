import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FilterPage = (props) => {
  const { filters, filterOptions, setFilters, navigation } = props;
  const [category, setCategory] = useState({});
  const [jobType, setJobType] = useState({});
  const [location, setLocation] = useState([]);
  const [sort, setSort] = useState({
    id: 'Newest first',
    item: 'Newest first',
  });
  const [locationMap, setLocationMap] = useState(new Map());

  const {
    category: categoryOptions,
    jobType: jobTypeOptions,
    location: locationOptions,
  } = filterOptions;
  const dateOptions = [
    { item: 'Newest first', id: 'Newest first' },
    { item: 'Oldest first', id: 'Oldest first' },
  ];

  useEffect(() => {
    if (filters.category) {
      setCategory({ id: filters.category, item: filters.category });
    }
    if (filters.jobType) {
      setJobType({ id: filters.jobType, item: filters.jobType });
    }
    if (filters.location.length > 0) {
      const newLocation = [];
      filters.location.forEach((loc) => {
        newLocation.push({ id: loc, item: loc });
      });
      setLocation(newLocation);
    }
    setSort({ id: filters.sort, item: filters.sort });
  }, []);

  const onSet = () => {
    const locationArr = [];
    location.forEach((loc) => {
      locationArr.push(loc.item);
    });
    const newFilters = {
      category: category.item ? category.item : null,
      jobType: jobType.item ? jobType.item : null,
      location: locationArr,
      sort: sort.item,
    };
    setFilters(newFilters);
    navigation.goBack();
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
      <View style={styles.buttonContainer}>
        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onSet()}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.button}>Filter</Text>
          </View>
        </TouchableHighlight>
      </View>
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
    marginTop: 20,
    marginBottom: 20,
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
  buttonTextContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  button: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default FilterPage;
