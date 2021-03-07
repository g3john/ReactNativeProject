import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  DeviceEventEmitter,
} from 'react-native';
import FilterBar from '../filterBar';
import JobList from '../jobList';
import { getJobs } from '../../api';
import { getFilterOptions } from '../../helpers/';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const JobSearchPage = (props) => {
  const {
    isLoading,
    setLoadingJobs,
    setFilterOptions,
    loadJobs,
    navigation,
  } = props;

  useEffect(() => {
    setLoadingJobs(true);
    getJobs().then((res) => {
      setFilterOptions(getFilterOptions(res));
      navigation.navigate('FilterPage');
      loadJobs(res);
      setLoadingJobs(false);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.shadowBorderBottom,
          { height: Dimensions.get('window').height * 0.1 },
        ]}>
        {!isLoading && <FilterBar navigation={navigation} />}
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <View style={{ height: Dimensions.get('window').height * 0.8 }}>
          <JobList navigation={navigation} />
        </View>
      )}

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
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    elevation: 24,
  },
  shadowBorderTop: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -12 },
    shadowRadius: 16,
    shadowOpacity: 0.85,
    elevation: 24,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JobSearchPage;
