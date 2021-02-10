import React from 'react';
import {View} from 'react-native';
import JobList from './jobList';
import {getJobs, getCategories} from '../api';

const JobSearchPage = () => {
  const jobs = [];
  return (
    <View>
      <JobList />
    </View>
  );
};

export default JobSearchPage;
