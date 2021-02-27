import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Linking,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const JobPage = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const { job } = props.route.params;
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
  } = job;
  const { savedJobs, saveJob, removeJob } = props;
  useEffect(() => {
    savedJobs && setIsSaved(savedJobs.some((savedJob) => savedJob.id === id));
  }, [savedJobs]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.jobContainer}>
        <View style={styles.logo}>
          {companyLogoUrl ? (
            <FastImage
              style={styles.logo}
              resizeMode={FastImage.resizeMode.contain}
              source={{
                uri: companyLogoUrl,
              }}
            />
          ) : (
            <IonIcons
              name={'briefcase'}
              size={Dimensions.get('window').width * 0.25}
              color={'grey'}
              style={{ opacity: 0.2 }}
            />
          )}
        </View>
        <View>
          <Text style={styles.jobTitle}>{title}</Text>
          <Text>{companyName}</Text>
          <Text>{candidateRequiredLocation}</Text>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                underlayColor="#DDDDDD"
                onPress={() =>
                  Linking.canOpenURL(url).then((supported) => {
                    supported
                      ? Linking.openURL(url)
                      : Alert('This url is not supported');
                  })
                }>
                <View style={styles.buttonTextContainer}>
                  <Text style={styles.button}>Apply</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              {isSaved ? (
                <TouchableHighlight
                  underlayColor="#DDDDDD"
                  onPress={() => removeJob(job)}>
                  <View style={styles.buttonTextContainer}>
                    <Text style={styles.button}>UnSave</Text>
                  </View>
                </TouchableHighlight>
              ) : (
                <TouchableHighlight
                  underlayColor="#DDDDDD"
                  onPress={() => saveJob(job)}>
                  <View style={styles.buttonTextContainer}>
                    <Text style={styles.button}>Save</Text>
                  </View>
                </TouchableHighlight>
              )}
            </View>
          </View>
        </View>
      </View>
      <WebView
        scalesPageToFit={false}
        originWhitelist={['*']}
        source={{ html: description }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 24,
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    width: Dimensions.get('window').width * 0.65,
  },
  logo: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.65,
  },
  buttonContainer: {
    width: '30%',
    marginRight: 50,
  },
  buttonTextContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default JobPage;
