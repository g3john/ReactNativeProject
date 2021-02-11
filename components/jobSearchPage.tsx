import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import JobList from './jobList';
import {getJobs, getCategories} from '../api';

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs(null, null, null, 10).then((res) => {
      setJobs(res);
    });
  }, []);

  return (
    <View>
      <JobList jobs={jobs} />
    </View>
  );
};

export default JobSearchPage;
