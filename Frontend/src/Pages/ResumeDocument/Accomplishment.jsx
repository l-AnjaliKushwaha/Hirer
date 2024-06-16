import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the Accomplishment section
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

// Accomplishment component
const Accomplishment = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={accIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Accomplishments</Text>
      </View>
      {resume?.accomplishments.map((accomplishment) => (
        <View key={accomplishment.id} style={styles.content}>
          <View>
            {accomplishment?.description.split("\n").map((point, index) => (
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
          {/* <Text style={styles.dateRange}>{accomplishment?.date}</Text> */}
          {/* <Text>{accomplishment?.description}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default Accomplishment;
