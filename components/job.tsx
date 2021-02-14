import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Job = (props) => {
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
  } = props.job;
  console.log(props.job);

  const hr = <View style={styles.hr} />;
  return (
    <View>
      {hr}
      <View style={styles.jobContainer}>
        <View style={styles.logo}>
          {companyLogoUrl && (
            <Image
              style={styles.logo}
              source={{
                uri: companyLogoUrl,
              }}
            />
          )}
        </View>
        <View>
          <Text style={styles.jobTitle}>{title}</Text>
          <Text>{companyName}</Text>
          <Text>{candidateRequiredLocation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    width: Dimensions.get('window').width * 0.75,
  },
  logo: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    marginRight: 10,
  },
});

export default Job;
