import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the skills section
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
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "25%",
    marginBottom: 5,
    // marginRight: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    width: 4,
    height: 4,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "black",
  },
  skillName: {
    fontSize: 12,
    textTransform: "capitalize",
  },
});

// Skills component
const Skills = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={skillIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Skills</Text>
      </View>
      <View style={styles.skillsContainer}>
        {resume?.skills.map((item) => (
          <View key={item.id} style={styles.skillItem}>
            <View style={styles.bulletPoint}></View>
            <Text style={styles.skillName}>{item?.skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Skills;
