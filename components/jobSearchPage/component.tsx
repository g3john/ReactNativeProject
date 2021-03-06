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

const JobSearchPage = (props) => {
  const {
    isLoading,
    setLoadingJobs,
    setFilterOptions,
    loadJobs,
    navigation,
  } = props;
  const [filters, setFilters] = useState({
    category: 'Software Development',
    company: null,
    search: null,
  });
  const flatListRef = useRef(null);
  DeviceEventEmitter.addListener('event.scrollToTop', () => {
    flatListRef.current.scrollToIndex({ animated: true, index: 0 });
  });

  useEffect(() => {
    setLoadingJobs(true);
    getJobs(null, null, null, null).then((res) => {
      setFilterOptions(getFilterOptions(res));
      loadJobs(res);
      setLoadingJobs(false);
      navigation.navigate('FilterPage');
    });
  }, []);

  return (
    <View>
      <View
        style={[
          styles.shadowBorderBottom,
          { height: Dimensions.get('window').height * 0.1 },
        ]}>
        <FilterBar navigation={navigation} />
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={{ height: Dimensions.get('window').height * 0.8 }}>
          <JobList ref={flatListRef} navigation={navigation} />
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default JobSearchPage;
