export const typeDefinitions = `#graphql
    type Query {
        users: [User]
        resumes: [Resume]
        myResumes(userId: ID!): [Resume]
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Address {
        country: String!
        state: String!
        district: String!
        city: String!
        pincode: Int!
    }
    type Education {
        university: String!
        institution: String!
        start: String
        end: String
        place: String!
    }
    type Experience {
        company: String!
        position: String!
        from: String!
        to: String
        description: String!
    }
    type Projects {
        title: String!
        details: String!
        link: String
    }
    type Skills {
        professional: [String!]!
        soft: [String!]!
    }
    type Certifications {
        certificateName: String!
        provider: String!
    }
    type Resume {
        id: ID!
        userId: ID!
        name: String!
        summary: String!
        phone: String!
        email: String!
        gender: String!
        address: Address!
        linkedIn: String
        gitHub: String
        portfolio: String
        education: Education!
        experience: [Experience!]!
        skills: Skills!
        projects: [Projects!]!
        certifications: [Certifications!]!
        resumefile: String
    }
    type Response {
        success: Boolean!
        message: String!
        user: User
        resume: Resume
        token: String
    }

    type Mutation {
        userSignUp(name: String!, email: String!, password: String!): Response
        userSignIn(email: String!, password: String!): Response
        createResume(resume: ResumeInput!): Response
    }

    input AddressInput {
        country: String!
        state: String!
        district: String!
        city: String!
        pincode: String!
    }
    input EducationInput {
        university: String!
        institution: String!
        start: String
        end: String
        place: String!
    }
    input ExperienceInput {
        company: String!
        position: String!
        from: String!
        to: String
        description: String!
    }
    input ProjectsInput {
        title: String!
        details: String!
        link: String
    }
    input SkillsInput {
        professional: [String!]!
        soft: [String!]!
    }
    input CertificationsInput {
        certificateName: String!
        provider: String!
    }
    input ResumeInput {
        userId: ID!
        name: String!
        summary: String!
        phone: String!
        email: String!
        gender: String!
        address: AddressInput!
        linkedIn: String
        gitHub: String
        portfolio: String
        education: EducationInput!
        experience: [ExperienceInput!]!
        skills: SkillsInput!
        projects: [ProjectsInput!]!
        certifications: [CertificationsInput!]!
        resumefile: String
    }
`