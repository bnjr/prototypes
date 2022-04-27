/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncSettings = /* GraphQL */ `
  query SyncSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const getServiceSubscription = /* GraphQL */ `
  query GetServiceSubscription($id: ID!) {
    getServiceSubscription(id: $id) {
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
export const listServiceSubscriptions = /* GraphQL */ `
  query ListServiceSubscriptions(
    $filter: ModelServiceSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDate
        Service {
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
        package {
          name
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
        User {
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
  }
`;
export const syncServiceSubscriptions = /* GraphQL */ `
  query SyncServiceSubscriptions(
    $filter: ModelServiceSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        startDate
        Service {
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
        package {
          name
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
        User {
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
  }
`;
export const getOrganisation = /* GraphQL */ `
  query GetOrganisation($id: ID!) {
    getOrganisation(id: $id) {
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
export const listOrganisations = /* GraphQL */ `
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganisations = /* GraphQL */ `
  query SyncOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getServiceDefinition = /* GraphQL */ `
  query GetServiceDefinition($id: ID!) {
    getServiceDefinition(id: $id) {
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
export const listServiceDefinitions = /* GraphQL */ `
  query ListServiceDefinitions(
    $filter: ModelServiceDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncServiceDefinitions = /* GraphQL */ `
  query SyncServiceDefinitions(
    $filter: ModelServiceDefinitionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBatch = /* GraphQL */ `
  query GetBatch($id: ID!) {
    getBatch(id: $id) {
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
export const listBatches = /* GraphQL */ `
  query ListBatches(
    $filter: ModelBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schedule {
          startDate
          endDate
          recurring
        }
        attendance {
          date
          userID
        }
        Service {
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
        Organisation {
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
        Customers {
          nextToken
          startedAt
        }
        Managers {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBatches = /* GraphQL */ `
  query SyncBatches(
    $filter: ModelBatchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        schedule {
          startDate
          endDate
          recurring
        }
        attendance {
          date
          userID
        }
        Service {
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
        Organisation {
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
        Customers {
          nextToken
          startedAt
        }
        Managers {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrganisationCustomers = /* GraphQL */ `
  query GetOrganisationCustomers($id: ID!) {
    getOrganisationCustomers(id: $id) {
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
export const listOrganisationCustomers = /* GraphQL */ `
  query ListOrganisationCustomers(
    $filter: ModelOrganisationCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisationCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
export const syncOrganisationCustomers = /* GraphQL */ `
  query SyncOrganisationCustomers(
    $filter: ModelOrganisationCustomersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisationCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
`;
export const getOrganisationAssociates = /* GraphQL */ `
  query GetOrganisationAssociates($id: ID!) {
    getOrganisationAssociates(id: $id) {
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
export const listOrganisationAssociates = /* GraphQL */ `
  query ListOrganisationAssociates(
    $filter: ModelOrganisationAssociatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisationAssociates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
export const syncOrganisationAssociates = /* GraphQL */ `
  query SyncOrganisationAssociates(
    $filter: ModelOrganisationAssociatesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisationAssociates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
`;
export const getOrganisationOwners = /* GraphQL */ `
  query GetOrganisationOwners($id: ID!) {
    getOrganisationOwners(id: $id) {
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
export const listOrganisationOwners = /* GraphQL */ `
  query ListOrganisationOwners(
    $filter: ModelOrganisationOwnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisationOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
export const syncOrganisationOwners = /* GraphQL */ `
  query SyncOrganisationOwners(
    $filter: ModelOrganisationOwnersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisationOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
`;
