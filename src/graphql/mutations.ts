/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
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
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
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
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
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
export const createServiceSubscription = /* GraphQL */ `
  mutation CreateServiceSubscription(
    $input: CreateServiceSubscriptionInput!
    $condition: ModelServiceSubscriptionConditionInput
  ) {
    createServiceSubscription(input: $input, condition: $condition) {
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
export const updateServiceSubscription = /* GraphQL */ `
  mutation UpdateServiceSubscription(
    $input: UpdateServiceSubscriptionInput!
    $condition: ModelServiceSubscriptionConditionInput
  ) {
    updateServiceSubscription(input: $input, condition: $condition) {
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
export const deleteServiceSubscription = /* GraphQL */ `
  mutation DeleteServiceSubscription(
    $input: DeleteServiceSubscriptionInput!
    $condition: ModelServiceSubscriptionConditionInput
  ) {
    deleteServiceSubscription(input: $input, condition: $condition) {
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
export const createOrganisation = /* GraphQL */ `
  mutation CreateOrganisation(
    $input: CreateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    createOrganisation(input: $input, condition: $condition) {
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
export const updateOrganisation = /* GraphQL */ `
  mutation UpdateOrganisation(
    $input: UpdateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    updateOrganisation(input: $input, condition: $condition) {
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
export const deleteOrganisation = /* GraphQL */ `
  mutation DeleteOrganisation(
    $input: DeleteOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    deleteOrganisation(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createServiceDefinition = /* GraphQL */ `
  mutation CreateServiceDefinition(
    $input: CreateServiceDefinitionInput!
    $condition: ModelServiceDefinitionConditionInput
  ) {
    createServiceDefinition(input: $input, condition: $condition) {
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
export const updateServiceDefinition = /* GraphQL */ `
  mutation UpdateServiceDefinition(
    $input: UpdateServiceDefinitionInput!
    $condition: ModelServiceDefinitionConditionInput
  ) {
    updateServiceDefinition(input: $input, condition: $condition) {
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
export const deleteServiceDefinition = /* GraphQL */ `
  mutation DeleteServiceDefinition(
    $input: DeleteServiceDefinitionInput!
    $condition: ModelServiceDefinitionConditionInput
  ) {
    deleteServiceDefinition(input: $input, condition: $condition) {
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
export const createBatch = /* GraphQL */ `
  mutation CreateBatch(
    $input: CreateBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    createBatch(input: $input, condition: $condition) {
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
export const updateBatch = /* GraphQL */ `
  mutation UpdateBatch(
    $input: UpdateBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    updateBatch(input: $input, condition: $condition) {
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
export const deleteBatch = /* GraphQL */ `
  mutation DeleteBatch(
    $input: DeleteBatchInput!
    $condition: ModelBatchConditionInput
  ) {
    deleteBatch(input: $input, condition: $condition) {
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
export const createOrganisationCustomers = /* GraphQL */ `
  mutation CreateOrganisationCustomers(
    $input: CreateOrganisationCustomersInput!
    $condition: ModelOrganisationCustomersConditionInput
  ) {
    createOrganisationCustomers(input: $input, condition: $condition) {
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
export const updateOrganisationCustomers = /* GraphQL */ `
  mutation UpdateOrganisationCustomers(
    $input: UpdateOrganisationCustomersInput!
    $condition: ModelOrganisationCustomersConditionInput
  ) {
    updateOrganisationCustomers(input: $input, condition: $condition) {
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
export const deleteOrganisationCustomers = /* GraphQL */ `
  mutation DeleteOrganisationCustomers(
    $input: DeleteOrganisationCustomersInput!
    $condition: ModelOrganisationCustomersConditionInput
  ) {
    deleteOrganisationCustomers(input: $input, condition: $condition) {
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
export const createOrganisationAssociates = /* GraphQL */ `
  mutation CreateOrganisationAssociates(
    $input: CreateOrganisationAssociatesInput!
    $condition: ModelOrganisationAssociatesConditionInput
  ) {
    createOrganisationAssociates(input: $input, condition: $condition) {
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
export const updateOrganisationAssociates = /* GraphQL */ `
  mutation UpdateOrganisationAssociates(
    $input: UpdateOrganisationAssociatesInput!
    $condition: ModelOrganisationAssociatesConditionInput
  ) {
    updateOrganisationAssociates(input: $input, condition: $condition) {
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
export const deleteOrganisationAssociates = /* GraphQL */ `
  mutation DeleteOrganisationAssociates(
    $input: DeleteOrganisationAssociatesInput!
    $condition: ModelOrganisationAssociatesConditionInput
  ) {
    deleteOrganisationAssociates(input: $input, condition: $condition) {
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
export const createOrganisationOwners = /* GraphQL */ `
  mutation CreateOrganisationOwners(
    $input: CreateOrganisationOwnersInput!
    $condition: ModelOrganisationOwnersConditionInput
  ) {
    createOrganisationOwners(input: $input, condition: $condition) {
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
export const updateOrganisationOwners = /* GraphQL */ `
  mutation UpdateOrganisationOwners(
    $input: UpdateOrganisationOwnersInput!
    $condition: ModelOrganisationOwnersConditionInput
  ) {
    updateOrganisationOwners(input: $input, condition: $condition) {
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
export const deleteOrganisationOwners = /* GraphQL */ `
  mutation DeleteOrganisationOwners(
    $input: DeleteOrganisationOwnersInput!
    $condition: ModelOrganisationOwnersConditionInput
  ) {
    deleteOrganisationOwners(input: $input, condition: $condition) {
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
