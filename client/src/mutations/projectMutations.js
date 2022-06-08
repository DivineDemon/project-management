import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $desc: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(name: $name, desc: $desc, status: $status, clientId: $clientId) {
      id
      name
      desc
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
