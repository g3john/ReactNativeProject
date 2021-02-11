import React from 'react';
import {View, FlatList} from 'react-native';
import Job from './job';

const testJob = {
  id: '123',
  url: '',
  title: 'Test Job',
  companyName: 'Test Company',
  category: 'Software Engineer',
  jobType: 'Remote',
  candidateRequiredLocation: 'Toronto',
  salary: '$100000',
  description: 'This is a test job',
};

const JobList = (props) => {
  const jobs = props && props.jobs ? props.jobs : [];
  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Job job={item}></Job>}
      />
    </View>
  );
};

export default JobList;
