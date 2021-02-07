import React from 'react';
import {View} from 'react-native';
import Job from './job';
import {getJobs, getCategories} from '../api';

const JobList = () => {
  const jobs = [];
  return (
    <View>
      {jobs.forEach((job) => {
        <Job job={job}></Job>;
      })}
    </View>
  );
};

export default JobList;
