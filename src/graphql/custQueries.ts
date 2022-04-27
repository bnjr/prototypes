export const getUserFromPhoneEmail = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
    }
  }
`

export const listBaseOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        about
        slug
        media {
          banner
          logo
        }
        services {
          items {
            id
            name
          }
        }
      }
    }
  }
`

export const listSlugsOfOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        slug
      }
    }
  }
`

export const getBaseOrganisationBySlug = /* GraphQL */ `
  query OrgBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orgBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        about
        slug
        media {
          banner
          images {
            filename
            height
            width
          }
          logo
          video
        }
        address {
          city
          state
        }
        owner {
          id
          firstName
          lastName
          avatar
          about
          skills {
            details
            experience
            level
            name
          }
          profile
        }
        associates {
          items {
            organisationID
            userID
          }
        }
        services {
          items {
            name
            description
            packages {
              duration
              name
              noOfSessions
              price {
                amount
                currency
              }
            }
          }
        }
        reviews {
          items {
            by
            createdAt
            date
            review
          }
        }
      }
    }
  }
`

export const getUserFromEmailQ = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        isEmailVerified
        organisationID
        associateOf {
          nextToken
          startedAt
        }
        customerOf {
          nextToken
          startedAt
        }
        chatParticipantOf {
          nextToken
          startedAt
        }
        isActive
        isProfileCompleted
        isSkillCompleted
        dob
        gender
        skills {
          name
          level
          details
          experience
        }
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        isPhoneVerified
        avatar
        about
        profile
        subId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`

export const getUserFromPhoneQ = /* GraphQL */ `
  query UserByPhone(
    $phone: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByPhone(
      phone: $phone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        isEmailVerified
        organisationID
        associateOf {
          nextToken
          startedAt
        }
        customerOf {
          nextToken
          startedAt
        }
        chatParticipantOf {
          nextToken
          startedAt
        }
        isActive
        isProfileCompleted
        isSkillCompleted
        dob
        gender
        skills {
          name
          level
          details
          experience
        }
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        isPhoneVerified
        avatar
        about
        profile
        subId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`

export const getUserFromId = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      organisationID
    }
  }
`

export const listChatParticipants = /* GraphQL */ `
  query ListChatUsers(
    $filter: ModelChatUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        user {
          id
          firstName
          lastName
          profile
        }
        chat {
          id
          type
          channelArn
          name
        }
      }
      nextToken
      startedAt
    }
  }
`
