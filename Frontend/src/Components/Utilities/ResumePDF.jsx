import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 36,
        fontSize: 11,
        fontFamily: 'Helvetica',
        color: '#111'
    },
    header: {
        textAlign: "center",
        marginBottom: 5
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contact: {
        fontSize: 10,
        marginBottom: 6
    },
    links: {
        marginBottom: 8
    },
    section: {
        marginBottom: 10
    },
    sectionTitle: {
        fontSize: 12,
        marginTop: 8,
        marginBottom: 4,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderColor: "#e0e0e0",
        paddingBottom: 4
    },
    paragraph: {
        textAlign: "justify",
        marginBottom: 4
    },
    listItem: {
        marginBottom: 2,
        flexDirection: "row"
    },
    bullet: {
        width: 10
    },
    bulletText: {
        flex: 1
    },
    bold: {
        fontWeight: "bold"
    },
    small: {
        fontSize: 10
    }
})

function ResumePDF({ resumeData }) {
    if (!resumeData) return null
    const { name, summary, phone, email, address,
        linkedIn, gitHub, portfolio, education,
        experience, skills, projects, certifications } = resumeData

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}> {name} </Text>
                    <Text style={styles.contact}>
                        {address?.city}, {address?.district}, {address?.pincode} |&nbsp;
                        <Link src={`tel:${phone}`}>{phone}</Link>
                        &nbsp;|&nbsp;
                        <Link src={`mailto:${email}`}>{email}</Link>
                    </Text>
                    <Text style={styles.links}>
                        [ {linkedIn && <Link src={`${linkedIn}`}>LinkedIn</Link>} ] &nbsp;
                        [ {gitHub && <Link src={`${gitHub}`}>GitHub</Link>} ] &nbsp;
                        [ {portfolio && <Link src={`${portfolio}`}>Portfolio</Link>} ]
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.paragraph}>{summary}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>EXPERIENCE</Text>
                    {experience.map((exp, index) =>
                        <View key={index}>
                            <Text>{exp.position}</Text>
                            <Text>{exp.company} | {exp.place} | {exp.from} - {exp.to}</Text>
                            {exp.description.map((desc) =>
                                <View>
                                    <Text style={{ width: 10, marginRight: 10 }}>•</Text>
                                    <Text style={{ flex: 1 }}>
                                        <Text style={{ marginLeft: 10 }}>{desc} </Text>
                                    </Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    )
}

export default ResumePDF