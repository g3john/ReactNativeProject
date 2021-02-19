import React, {useEffect, useState, useRef} from 'react';
import {View, Dimensions} from 'react-native';
import FilterBar from './filterBar';
import JobList from './jobList';
import {getJobs, getCategories} from '../api';

const JobSearchPage = () => {
  const [filters, setFilters] = useState({
    category: null,
    company: null,
    search: null,
  });
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const flatListRef = useRef(null);
  const filtersSet = (category, company, search) => {
    getJobs(category, company, search, 10).then((res) => {
      setJobs(res);
      flatListRef.current.scrollToIndex({animated: true, index: 0});
    });
  };

  useEffect(() => {
    getJobs(filters.category, filters.company, filters.search, 10).then(
      (res) => {
        setJobs(res);
      },
    );
    getCategories().then((res) => {
      setCategories(res ? res : []);
    });
  }, []);

  return (
    <View>
      <View style={{height: Dimensions.get('window').height * 0.1}}>
        <FilterBar filtersSet={filtersSet} categories={categories} />
      </View>
      <View style={{height: Dimensions.get('window').height * 0.8}}>
        <JobList ref={flatListRef} jobs={jobs} />
      </View>
      <View style={{height: Dimensions.get('window').height * 0.1}}></View>
    </View>
  );
};

export default JobSearchPage;
