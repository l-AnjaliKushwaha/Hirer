import React, { useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentResume } from "../../store/Actions/resumeActions";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Project from "./Project";
import Certificate from "./Certificate";
import Accomplishment from "./Accomplishment";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  section: {
    // margin: 30,
    flexGrow: 1,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const MyDocument = ({ updatedResume }) => {
  console.log(updatedResume?.details?.firstname);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header resume={updatedResume} />
          <Education resume={updatedResume} />
          <Skills resume={updatedResume} />
          <WorkExperience resume={updatedResume} />
          <Project resume={updatedResume} />
          <Certificate resume={updatedResume} />
          <Accomplishment resume={updatedResume} />
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default MyDocument;
