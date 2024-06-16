import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the education section
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
  item: {
    marginBottom: 5,
  },
  school: {
    fontSize: 12,
    textTransform: "capitalize",
  },
  dateRange: {
    fontSize: 10,
    fontStyle: "italic",
  },
});

// Education component
const Education = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={educationIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Education</Text>
      </View>
      {resume?.education.map((item, index) => (
        <View key={item.id} style={styles.item}>
          {item?.college && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {item?.branch && (
                  <Text style={styles.school}>
                    {item?.degree}, ({item?.branch})
                  </Text>
                )}
                {item?.stream && item.eduType === "diploma" && (
                  <Text style={styles.school}>Diploma, ({item?.stream})</Text>
                )}
                {item?.stream && item.eduType === "phd" && (
                  <Text style={styles.school}>PHD, ({item?.stream})</Text>
                )}
                <Text style={styles.dateRange}>
                  {item?.startYear} - {item?.lastYear}
                </Text>
              </View>
              <Text style={styles.school}>{item?.college}</Text>
              {/* <Text style={styles.school}>{item?.performance}</Text> */}
            </View>
          )}
          {item?.school && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {item?.stream ? (
                  <Text style={styles.school}>
                    Higher Secondary, ({item?.board})
                  </Text>
                ) : (
                  <Text style={styles.school}>
                    High Secondary, ({item?.board})
                  </Text>
                )}
                <Text style={styles.dateRange}>{item?.completionYear}</Text>
              </View>
              <Text style={styles.school}>{item?.school}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Education;
