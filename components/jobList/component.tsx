import React, { forwardRef, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
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
  const {
    jobs,
    nonDisplayedJobs,
    savedJobs,
    displayMore,
    isSaved,
    navigation,
  } = props;
  const renderItem = ({ item }) => (
    <Job job={item} navigation={navigation}></Job>
  );
  const footerComponent =
    !isSaved && nonDisplayedJobs && nonDisplayedJobs.length ? (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    ) : null;
  const jobsToShow = isSaved ? savedJobs : jobs;
  return (
    <View>
      {jobsToShow && (
        <React.Fragment>
          <FlatList
            ref={ref}
            data={jobsToShow}
            keyExtractor={(item) => item.id.toString()}
            updateCellsBatchingPeriod={100}
            removeClippedSubviews={true}
            onEndReached={() => displayMore()}
            onEndReachedThreshold={5}
            renderItem={renderItem}
            ListFooterComponent={footerComponent}
          />
        </React.Fragment>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  activityIndicator: {
    padding: 10,
  },
});

export default JobList;
