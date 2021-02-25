import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const JobPage = (props) => {
  const {
    id,
    url,
    title,
    company_name: companyName,
    category,
    job_type: jobType,
    candidate_required_location: candidateRequiredLocation,
    salary,
    description,
    company_logo_url: companyLogoUrl,
    publication_date: publicationDate,
    tags,
  } = props.route.params.job;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default JobPage;
