import React from 'react'
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 50,
        fontSize: 10,
        fontFamily: 'Helvetica',
        color: '#111',
        lineHeight: 1.5
    },
    header: {
        textAlign: "center",
        marginBottom: 5
    },
    name: {
        fontFamily: 'Times-Roman',
        fontSize: 28,
        fontWeight: "normal",
        marginBottom: 25
    },
    contact: {
        fontSize: 10,
        marginBottom: 6
    },
    links: {
        fontSize: 11,
        marginBottom: 8
    },
    sectionTitle: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "bold",
    },
    miniTitle: {
        fontSize: 10,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    paragraph: {
        textAlign: "justify",
        marginBottom: 4,
        fontWeight: 'normal'
    },
    listItem: {
        marginBottom: 2,
        flexDirection: "row"
    },
    bullet: {
        width: 5,
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
                            <Text style={styles.miniTitle}>{exp.position}</Text>
                            <Text style={styles.miniTitle}>{exp.company} | {exp.place} | {exp.from} - {exp.to}</Text>
                            {exp.description.map((desc) =>
                                <View style={styles.listItem}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={{ marginLeft: 5 }}>{desc}</Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>

                <View>
                    <Text style={styles.sectionTitle}>PROFESSIONAL SKILLS</Text>
                    <Text style={styles.listItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={{ marginLeft: 10 }}>  {skills.professional.join(', ')}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>SOFT SKILLS</Text>
                    <Text style={styles.listItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={{ marginLeft: 10 }}>  {skills.soft.join(', ')}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>EDUCATION</Text>
                    <Text style={styles.miniTitle}>{education.course}</Text>
                    <Text >{education.university} | {education.institution} | {education.start} - {education.end}</Text>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>PROJECTS</Text>
                    {projects.map((project, index) =>
                        <View style={styles.listItem} key={index}>
                            <Text style={styles.bullet}>&bull;</Text>
                            <Text style={{ marginLeft: 5, fontWeight: 'bold', textAlign: 'justify' }}>{project.title}:
                                <Text style={{ fontWeight: 'normal' }}>
                                    &nbsp;{project.details} {project.link && <Link src={`${project.link}`}>[Project link]</Link>}
                                </Text>
                            </Text>
                        </View>
                    )}
                </View>

                <View>
                    <Text style={styles.sectionTitle}>CERTIFICATIONS AND WORKSHOPS</Text>
                    {certifications.map((cert, index) =>
                        <View key={index} style={styles.listItem}>
                            <Text style={styles.bullet}>&bull;</Text>
                            <Text style={{ marginLeft: 5 }}>{cert.certificateName} &mdash; {cert.provider}</Text>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    )
}

export default React.memo(ResumePDF)