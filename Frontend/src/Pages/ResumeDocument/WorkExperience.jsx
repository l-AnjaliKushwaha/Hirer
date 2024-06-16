import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the WorkExperience section
const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    // marginLeft: 5
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 12,
  },
  dateRange: {
    fontSize: 10,
    fontStyle: "italic",
  },
  description: {
    fontSize: 12,
  },
  bulletPoint: {
    width: 4,
    height: 4,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "black",
  },
});

// WorkExperience component
const WorkExperience = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={workIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Work Experience</Text>
      </View>
      {resume?.jobs.map((item) => (
        <View key={item.id} style={styles.experienceItem}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.jobTitle}>
              Position : {item?.designation}, ({item?.profile})
            </Text>
            <Text style={styles.dateRange}>
              Job : {item?.startDate} - {item?.endDate}
            </Text>
          </View>
          <Text style={styles.companyName}>
            Organization : {item?.organization}
          </Text>
          {item?.description && (
            <View style={styles.description}>
              <Text>Desription :</Text>
              {item?.description.split("\n").map((point, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <View style={styles.bulletPoint}></View>
                  <Text className="ml-2">
                    {point.trim().replace(/^\d+\./, "")}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
      {resume?.internships.map((item) => (
        <View key={item.id} style={styles.experienceItem}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.jobTitle}>Profile : {item?.profile}</Text>
            <Text style={styles.dateRange}>
              Internship : {item?.startDate} - {item?.endDate}
            </Text>
          </View>
          <Text style={styles.companyName}>
            Organization : {item?.organization}
          </Text>
          {item?.description && (
            <View style={styles.description}>
              <Text>Desription :</Text>
              {item?.description.split("\n").map((point, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <View style={styles.bulletPoint}></View>
                  <Text className="ml-2">
                    {point.trim().replace(/^\d+\./, "")}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default WorkExperience;
