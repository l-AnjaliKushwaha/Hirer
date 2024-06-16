import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the Certificate section
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
  content: {
    fontSize: 12,
  },
  dateRange: {
    fontSize: 10,
    fontStyle: "italic",
  },
  bulletPoint: {
    width: 4,
    height: 4,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "black",
  },
});

// Certificate component
const Certificate = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={certificateIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Certificates</Text>
      </View>
      {resume?.courses.map((course) => (
        <View key={course.id} style={styles.content}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.bulletPoint}></View>
              <Text>
                {course?.training} from {course?.organization}
              </Text>
            </View>
            <Text style={styles.dateRange}>
              {course?.startDate} - {course?.endDate}
            </Text>
          </View>
          {/* <Text>{course?.description}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default Certificate;
