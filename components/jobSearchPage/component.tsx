import React, { useEffect, useState, useRef } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import FilterBar from '../filterBar';
import JobList from '../jobList';
import { getJobs, getCategories } from '../../api';

const JobSearchPage = (props) => {
  const { jobs, loadJobs } = props;
  const [filters, setFilters] = useState({
    category: null,
    company: null,
    search: null,
  });
  const [categories, setCategories] = useState([]);
  const flatListRef = useRef(null);
  const filtersSet = (category, company, search) => {
    getJobs(category, company, search, 10).then((res) => {
      loadJobs(res);
      flatListRef.current.scrollToIndex({ animated: true, index: 0 });
    });
  };

  useEffect(() => {
    getJobs(filters.category, filters.company, filters.search, 10).then(
      (res) => {
        loadJobs(res);
      },
    );
    getCategories().then((res) => {
      setCategories(res ? res : []);
    });
  }, []);

  return (
    <View>
      <View
        style={[
          styles.shadowBorderBottom,
          { height: Dimensions.get('window').height * 0.1 },
        ]}>
        <FilterBar filtersSet={filtersSet} categories={categories} />
      </View>
      <View style={{ height: Dimensions.get('window').height * 0.8 }}>
        <JobList ref={flatListRef} jobs={jobs} />
      </View>
      <View
        style={[
          styles.shadowBorderTop,
          { height: Dimensions.get('window').height * 0.1 },
        ]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBorderBottom: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 24,
  },
  shadowBorderTop: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -12 },
    shadowRadius: 16,
    shadowOpacity: 0.85,
    elevation: 24,
  },
});

export default JobSearchPage;
