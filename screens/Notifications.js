import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { GlobalStyles } from "../constants/GlobalStyles";
const jobs = [
  {
    id: 1,
    title: "Google",
    company: "Viewed your application",
    location: "20 mins ago",
    logo: require("../assets/images/google.png"),
  },
  {
    id: 2,
    title: "Ashika Bansal",
    company: "Liked your post",
    location: "28 mins ago",
    logo: require("../assets/images/ss1.png"),
  },
  {
    id: 3,
    title: "Avinash Dwivedi",
    company: "Invited to join TechGuru page",
    location: "1 hour ago",
    logo: require("../assets/images/ss.png"),
  },
  {
    id: 4,
    title: "Ashish Kumar",
    company: "",
    location: "1 hour ago",
    logo: require("../assets/images/google.png"),
  },
  {
    id: 5,
    title: "Avinash Dwivedi",
    company: "Invited to join TechGuru page",
    location: "1 hour ago",
    logo: require("../assets/images/ss1.png"),
  },
  {
    id: 6,
    title: "Avinash Dwivedi",
    company: "Invited to join TechGuru page",
    location: "1 hour ago",
    logo: require("../assets/images/ss.png"),
  },
  {
    id: 7,
    title: "Ashika Bansal",
    company: "Shared your page",
    location: "10 hour ago",
    logo: require("../assets/images/google.png"),
  },
  {
    id: 8,
    title: "Avinash Dwivedi",
    company: "Invited to join TechGuru page",
    location: "1 Day ago",
    logo: require("../assets/images/ss1.png"),
  },
  {
    id: 9,
    title: "Kumar Devdas",
    company: "Invited to join Start-Up mantra page",
    location: "1 day ago",
    logo: require("../assets/images/ss.png"),
  },
];

const Internship = () => {
  const [jobList, setJobList] = useState(jobs);

  const handlePress = (job) => {
    // Navigate to job details page or show more details about the job
    console.log("Job selected:", job);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={jobList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.jobContainer}
              onPress={() => handlePress(item)}
            >
              <View style={styles.leftContainer}>
                <Image style={styles.logo} source={item.logo} />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobCompany}>{item.company}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatList: {},
  jobContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary700,
    marginBottom: 10,
    borderRadius: 7,
  },
  titleText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray400,
    textAlign: "center",
    marginBottom: 4,
  },
  bottomText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray700,
    textAlign: "center",
  },
  leftContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 13,
    color: "gray",
  },
  jobLocation: {
    fontSize: 13,
    color: "gray",
  },
  flatListContainer: {
    borderBottomColor: GlobalStyles.colors.gray400,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderStyle: "solid",
  },
});

export default Internship;
