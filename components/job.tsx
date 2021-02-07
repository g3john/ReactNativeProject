import React from 'react';
import {View, Text} from 'react-native';

const Job = (props) => {
  const {
    id,
    url,
    title,
    companyName,
    category,
    jobType,
    candidateRequiredLocation,
    salary,
    description,
  } = props.job;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Job;
