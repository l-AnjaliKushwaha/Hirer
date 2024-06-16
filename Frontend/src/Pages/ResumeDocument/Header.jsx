import React from "react";
import { Text, View, StyleSheet, Link, Image } from "@react-pdf/renderer";
import githubIcon from "./images/github-fill.png";
import blogIcon from "./images/news-fill.png";
import playstoreIcon from "./images/playstation-line.png";
import behanceIcon from "./images/behance-line.png";
import otherIcon from "./images/links-line.png";
import emailIcon from "./images/mail-fill.png";
import contactIcon from "./images/phone-fill.png";
import locationIcon from "./images/map-pin-fill.png";

// Define styles for the header
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  leftColumn: {
    flexDirection: "column",
    width: "100%",
    paddingRight: 10,
  },
  rightColumn: {
    // width: '50%',
    // paddingLeft: 10,
  },
  name: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "blue",
  },
  contactInfo: {
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 2,
  },
  link: {
    fontSize: 10,
    color: "black",
    textDecoration: "underline",
    marginLeft: 5,
    marginBottom: 2,
  },
});

// Header component
const Header = ({ resume }) => {
  console.log(resume?.details?.firstname);
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.name}>
          {resume?.details?.firstname} {resume?.details?.lastname}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src={emailIcon} style={{ width: 10, height: 10 }} />
          <Text style={styles.contactInfo}>{resume?.details?.email}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src={contactIcon} style={{ width: 10, height: 10 }} />
          <Text style={styles.contactInfo}>{resume?.details?.contact}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src={locationIcon} style={{ width: 10, height: 10 }} />
          <Text style={styles.contactInfo}>{resume?.details?.city}</Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        {resume?.worksamples.map((link) => (
          <View
            key={link.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            {link.key === "playstoreLink" && (
              <Image src={playstoreIcon} style={{ width: 10, height: 10 }} />
            )}
            {link.key === "githubLink" && (
              <Image src={githubIcon} style={{ width: 10, height: 10 }} />
            )}
            {link.key === "behanceLink" && (
              <Image src={behanceIcon} style={{ width: 10, height: 10 }} />
            )}
            {link.key === "blogLink" && (
              <Image src={blogIcon} style={{ width: 10, height: 10 }} />
            )}
            {link.key === "otherworkLink" && (
              <Image src={otherIcon} style={{ width: 10, height: 10 }} />
            )}
            <Link target="_blank" href={link.value} style={styles.link}>
              {link.key.replace("Link", "")}
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Header;
