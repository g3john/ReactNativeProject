import React, { forwardRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import Job from '../job';

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

const JobList = forwardRef((props, ref) => {
  const { navigation } = props;
  const jobs = props && props.jobs ? props.jobs : [];
  const renderItem = ({ item }) => (
    <Job job={item} navigation={navigation}></Job>
  );

  return (
    <View>
      {jobs && (
        <FlatList
          ref={ref}
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          updateCellsBatchingPeriod={100}
          removeClippedSubviews={true}
          renderItem={renderItem}
        />
      )}
    </View>
  );
});

export default JobList;
