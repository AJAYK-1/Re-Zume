import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  mutation AdminLogin ($name: String!, $password: String!) {
    adminLogin (name: $name, password: $password) {
      success
      token
      message
    }
  }
`

export const USER_SIGNUP = gql`
mutation CreateUser($name: String!, $email: String!, $password: String!) {
      userSignUp(name: $name, email: $email, password: $password) {
        success
        message
      }
}
`

export const USER_SIGNIN = gql`
mutation UsersSignIn($email: String!, $password: String!) {
    userSignIn(email: $email, password: $password) {
        success
        message
        token
    }
}
`

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
          technical {
            frontend
            backend
            languages
            databases
            toolsAndDevOps
            others
          }
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