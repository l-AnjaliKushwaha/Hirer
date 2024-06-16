import React from "react";
import { Text, View, StyleSheet, Link, Image } from "@react-pdf/renderer";
import linkIcon from "./images/external-link-line.png";

// Define styles for the Project section
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
  projectItem: {
    marginBottom: 10,
  },
  projectName: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  projectDescription: {
    fontSize: 12,
  },
  dateRange: {
    fontSize: 10,
    fontStyle: "italic",
  },
  link: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
  },
  bulletPoint: {
    width: 4,
    height: 4,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "black",
  },
});

// Project component
const Project = ({ resume }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {/* <Image src={projectIcon} style={{ width: 12, height: 12 }} /> */}
        <Text style={styles.header}>Projects</Text>
      </View>
      {resume?.projects.map((project) => (
        <View key={project.id} style={styles.projectItem}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.projectName}>{project.title}</Text>
              <Link
                target="_blank"
                href={project?.projectLink}
                style={styles.link}
              >
                <Image src={linkIcon} style={{ width: 10, height: 10 }} />
              </Link>
            </View>
            {/* <Text style={styles.dateRange}>{project?.startDate} - {project?.endDate}</Text> */}
          </View>
          {project?.description && (
            <View style={styles.projectDescription}>
              <Text>Desription :</Text>
              {project?.description.split("\n").map((point, index) => (
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
          {/* <Text style={styles.projectDescription}>{project.description}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default Project;
