/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      subId
      firstName
      lastName
      phone
      email
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
        location {
          lat
          long
        }
      }
      avatar
      about
      profile
      settings {
        items {
          id
          deviceID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSettingsId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      isPhoneVerified
      isEmailVerified
      isProfileComplete
      isSkillComplete
      isActive
      CustomerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      AssociateOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OwnerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      batchCustomersId
      batchManagersId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      subId
      firstName
      lastName
      phone
      email
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
        location {
          lat
          long
        }
      }
      avatar
      about
      profile
      settings {
        items {
          id
          deviceID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSettingsId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      isPhoneVerified
      isEmailVerified
      isProfileComplete
      isSkillComplete
      isActive
      CustomerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      AssociateOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OwnerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      batchCustomersId
      batchManagersId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      subId
      firstName
      lastName
      phone
      email
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
        location {
          lat
          long
        }
      }
      avatar
      about
      profile
      settings {
        items {
          id
          deviceID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSettingsId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      isPhoneVerified
      isEmailVerified
      isProfileComplete
      isSkillComplete
      isActive
      CustomerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      AssociateOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OwnerOf {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      batchCustomersId
      batchManagersId
    }
  }
`;
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings {
    onCreateSettings {
      id
      deviceID
      calendarID
      users {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
    }
  }
`;
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings {
    onUpdateSettings {
      id
      deviceID
      calendarID
      users {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
    }
  }
`;
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings {
    onDeleteSettings {
      id
      deviceID
      calendarID
      users {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
    }
  }
`;
export const onCreateServiceSubscription = /* GraphQL */ `
  subscription OnCreateServiceSubscription {
    onCreateServiceSubscription {
      id
      startDate
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      package {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      duration
      discount
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userServiceSubscriptionId
      organisationServiceSubscriptionId
      serviceSubscriptionServiceId
    }
  }
`;
export const onUpdateServiceSubscription = /* GraphQL */ `
  subscription OnUpdateServiceSubscription {
    onUpdateServiceSubscription {
      id
      startDate
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      package {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      duration
      discount
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userServiceSubscriptionId
      organisationServiceSubscriptionId
      serviceSubscriptionServiceId
    }
  }
`;
export const onDeleteServiceSubscription = /* GraphQL */ `
  subscription OnDeleteServiceSubscription {
    onDeleteServiceSubscription {
      id
      startDate
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      package {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      duration
      discount
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userServiceSubscriptionId
      organisationServiceSubscriptionId
      serviceSubscriptionServiceId
    }
  }
`;
export const onCreateOrganisation = /* GraphQL */ `
  subscription OnCreateOrganisation {
    onCreateOrganisation {
      id
      name
      about
      media {
        images {
          filename
          height
          width
        }
        banner
        logo
        video
      }
      phone
      email
      address {
        firstLine
        secondLine
        locality
        city
        state
        pin
        location {
          lat
          long
        }
      }
      slug
      services {
        items {
          id
          name
          description
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationServicesId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      batches {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationBatchesId
          batchServiceId
        }
        nextToken
        startedAt
      }
      isOrganisationComplete
      isActive
      Customers {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Associates {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Owners {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganisation = /* GraphQL */ `
  subscription OnUpdateOrganisation {
    onUpdateOrganisation {
      id
      name
      about
      media {
        images {
          filename
          height
          width
        }
        banner
        logo
        video
      }
      phone
      email
      address {
        firstLine
        secondLine
        locality
        city
        state
        pin
        location {
          lat
          long
        }
      }
      slug
      services {
        items {
          id
          name
          description
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationServicesId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      batches {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationBatchesId
          batchServiceId
        }
        nextToken
        startedAt
      }
      isOrganisationComplete
      isActive
      Customers {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Associates {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Owners {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganisation = /* GraphQL */ `
  subscription OnDeleteOrganisation {
    onDeleteOrganisation {
      id
      name
      about
      media {
        images {
          filename
          height
          width
        }
        banner
        logo
        video
      }
      phone
      email
      address {
        firstLine
        secondLine
        locality
        city
        state
        pin
        location {
          lat
          long
        }
      }
      slug
      services {
        items {
          id
          name
          description
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationServicesId
        }
        nextToken
        startedAt
      }
      serviceSubscription {
        items {
          id
          startDate
          duration
          discount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userServiceSubscriptionId
          organisationServiceSubscriptionId
          serviceSubscriptionServiceId
        }
        nextToken
        startedAt
      }
      batches {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organisationBatchesId
          batchServiceId
        }
        nextToken
        startedAt
      }
      isOrganisationComplete
      isActive
      Customers {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Associates {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Owners {
        items {
          id
          userID
          organisationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
      id
      name
      description
      packages {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationServicesId
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
      id
      name
      description
      packages {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationServicesId
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
      id
      name
      description
      packages {
        name
        price {
          amount
          currency
        }
        duration
        noOfSessions
        isActive
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationServicesId
    }
  }
`;
export const onCreateServiceDefinition = /* GraphQL */ `
  subscription OnCreateServiceDefinition {
    onCreateServiceDefinition {
      id
      serviceName
      language
      iconName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateServiceDefinition = /* GraphQL */ `
  subscription OnUpdateServiceDefinition {
    onUpdateServiceDefinition {
      id
      serviceName
      language
      iconName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteServiceDefinition = /* GraphQL */ `
  subscription OnDeleteServiceDefinition {
    onDeleteServiceDefinition {
      id
      serviceName
      language
      iconName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBatch = /* GraphQL */ `
  subscription OnCreateBatch {
    onCreateBatch {
      id
      schedule {
        startDate
        endDate
        recurring
        location {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
      }
      attendance {
        date
        userID
      }
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Customers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      Managers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationBatchesId
      batchServiceId
    }
  }
`;
export const onUpdateBatch = /* GraphQL */ `
  subscription OnUpdateBatch {
    onUpdateBatch {
      id
      schedule {
        startDate
        endDate
        recurring
        location {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
      }
      attendance {
        date
        userID
      }
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Customers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      Managers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationBatchesId
      batchServiceId
    }
  }
`;
export const onDeleteBatch = /* GraphQL */ `
  subscription OnDeleteBatch {
    onDeleteBatch {
      id
      schedule {
        startDate
        endDate
        recurring
        location {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
      }
      attendance {
        date
        userID
      }
      Service {
        id
        name
        description
        packages {
          name
          duration
          noOfSessions
          isActive
        }
        organisation {
          id
          name
          about
          phone
          email
          slug
          isOrganisationComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organisationServicesId
      }
      Organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Customers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      Managers {
        items {
          id
          subId
          firstName
          lastName
          phone
          email
          dob
          gender
          avatar
          about
          profile
          isPhoneVerified
          isEmailVerified
          isProfileComplete
          isSkillComplete
          isActive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          batchCustomersId
          batchManagersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organisationBatchesId
      batchServiceId
    }
  }
`;
export const onCreateOrganisationCustomers = /* GraphQL */ `
  subscription OnCreateOrganisationCustomers {
    onCreateOrganisationCustomers {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganisationCustomers = /* GraphQL */ `
  subscription OnUpdateOrganisationCustomers {
    onUpdateOrganisationCustomers {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganisationCustomers = /* GraphQL */ `
  subscription OnDeleteOrganisationCustomers {
    onDeleteOrganisationCustomers {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrganisationAssociates = /* GraphQL */ `
  subscription OnCreateOrganisationAssociates {
    onCreateOrganisationAssociates {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganisationAssociates = /* GraphQL */ `
  subscription OnUpdateOrganisationAssociates {
    onUpdateOrganisationAssociates {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganisationAssociates = /* GraphQL */ `
  subscription OnDeleteOrganisationAssociates {
    onDeleteOrganisationAssociates {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrganisationOwners = /* GraphQL */ `
  subscription OnCreateOrganisationOwners {
    onCreateOrganisationOwners {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganisationOwners = /* GraphQL */ `
  subscription OnUpdateOrganisationOwners {
    onUpdateOrganisationOwners {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganisationOwners = /* GraphQL */ `
  subscription OnDeleteOrganisationOwners {
    onDeleteOrganisationOwners {
      id
      userID
      organisationID
      user {
        id
        subId
        firstName
        lastName
        phone
        email
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
        avatar
        about
        profile
        settings {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        isPhoneVerified
        isEmailVerified
        isProfileComplete
        isSkillComplete
        isActive
        CustomerOf {
          nextToken
          startedAt
        }
        AssociateOf {
          nextToken
          startedAt
        }
        OwnerOf {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        batchCustomersId
        batchManagersId
      }
      organisation {
        id
        name
        about
        media {
          banner
          logo
          video
        }
        phone
        email
        address {
          firstLine
          secondLine
          locality
          city
          state
          pin
        }
        slug
        services {
          nextToken
          startedAt
        }
        serviceSubscription {
          nextToken
          startedAt
        }
        batches {
          nextToken
          startedAt
        }
        isOrganisationComplete
        isActive
        Customers {
          nextToken
          startedAt
        }
        Associates {
          nextToken
          startedAt
        }
        Owners {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
