import { gql } from "@apollo/client";

export const MY_RESUMES = gql`
  query MyResumes($userId: ID!, $first: Int, $after: ID) {
  myResumes(userId: $userId, first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        userId
        resumeType
        name
        summary
        phone
        email
        gender
        address {
          country
          state
          district
          city
          pincode
        }
        linkedIn
        gitHub
        portfolio
        education {
          university
          institution
          start
          end
          place
        }
        experience {
          company
          position
          from
          to
          description
        }
        skills {
          professional
          soft
        }
        projects {
          title
          details
          link
        }
        certifications {
          certificateName
          provider
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`

export const DELETE_RESUME = gql`
  mutation DeleteResume( $id:ID!) {
    deleteResume( id: $id ) {
      message
      success
    }
  }
`