import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RecurringFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY"
}

export enum Relation {
  SON = "SON",
  DAUGHTER = "DAUGHTER",
  MOTHER = "MOTHER",
  FATHER = "FATHER",
  WIFE = "WIFE",
  HUSBAND = "HUSBAND",
  NEPHEW = "NEPHEW",
  NIECE = "NIECE"
}

export enum ChatType {
  ONE2_ONE = "ONE2ONE",
  GROUP = "GROUP",
  BATCH = "BATCH"
}

export enum Profile {
  CUSTOMER = "CUSTOMER",
  OWNER = "OWNER",
  ASSOCIATE = "ASSOCIATE",
  ADMIN = "ADMIN"
}

export enum Language {
  EN = "EN",
  HI = "HI",
  BN = "BN"
}

export enum SkillNames {
  SKATING = "SKATING",
  DANCING = "DANCING",
  SINGING = "SINGING",
  DRAWING = "DRAWING",
  RECITATION = "RECITATION",
  SWIMMING = "SWIMMING",
  TENNIS = "TENNIS",
  MUSIC = "MUSIC",
  CHESS = "CHESS"
}

export enum Duration {
  ONETIME = "ONETIME",
  MONTHLY = "MONTHLY"
}

export enum SkillExperience {
  BELOWONE = "BELOWONE",
  ONETOTHREE = "ONETOTHREE",
  THREETOFIVE = "THREETOFIVE",
  MORETHANFIVE = "MORETHANFIVE"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERT = "EXPERT"
}

export declare class Attendance {
  readonly date?: string | null;
  readonly userID?: string | null;
  constructor(init: ModelInit<Attendance>);
}

export declare class Recurring {
  readonly frequency?: RecurringFrequency | keyof typeof RecurringFrequency | null;
  readonly endDate?: string | null;
  readonly occurrence?: number | null;
  readonly interval?: number | null;
  constructor(init: ModelInit<Recurring>);
}

export declare class Schedule {
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly recurring?: RecurringFrequency | keyof typeof RecurringFrequency | null;
  readonly location?: Address | null;
  constructor(init: ModelInit<Schedule>);
}

export declare class Address {
  readonly firstLine?: string | null;
  readonly secondLine?: string | null;
  readonly locality?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly pin?: string | null;
  readonly location?: Location | null;
  constructor(init: ModelInit<Address>);
}

export declare class Location {
  readonly lat?: string | null;
  readonly long?: string | null;
  constructor(init: ModelInit<Location>);
}

export declare class Skill {
  readonly name?: SkillNames | keyof typeof SkillNames | null;
  readonly level?: SkillLevel | keyof typeof SkillLevel | null;
  readonly details?: string | null;
  readonly experience?: SkillExperience | keyof typeof SkillExperience | null;
  constructor(init: ModelInit<Skill>);
}

export declare class Image {
  readonly filename: string;
  readonly height: string;
  readonly width: string;
  constructor(init: ModelInit<Image>);
}

export declare class Media {
  readonly images: (Image | null)[];
  readonly banner?: string | null;
  readonly logo?: string | null;
  readonly video: (string | null)[];
  constructor(init: ModelInit<Media>);
}

export declare class Package {
  readonly name: string;
  readonly price: Amount;
  readonly duration: Duration | keyof typeof Duration;
  readonly noOfSessions: number;
  readonly isActive?: boolean | null;
  constructor(init: ModelInit<Package>);
}

export declare class Amount {
  readonly amount?: string | null;
  readonly currency?: string | null;
  constructor(init: ModelInit<Amount>);
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceSubscriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceDefinitionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisationCustomersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisationAssociatesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisationOwnersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly subId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly dob?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly skills?: (Skill | null)[] | null;
  readonly address?: Address | null;
  readonly avatar?: string | null;
  readonly about?: string | null;
  readonly profile?: (Profile | null)[] | keyof typeof Profile | null;
  readonly settings?: (Settings | null)[] | null;
  readonly serviceSubscription?: (ServiceSubscription | null)[] | null;
  readonly isPhoneVerified?: boolean | null;
  readonly isEmailVerified?: boolean | null;
  readonly isProfileComplete?: boolean | null;
  readonly isSkillComplete?: boolean | null;
  readonly isActive?: boolean | null;
  readonly CustomerOf?: (OrganisationCustomers | null)[] | null;
  readonly AssociateOf?: (OrganisationAssociates | null)[] | null;
  readonly OwnerOf?: (OrganisationOwners | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly batchCustomersId?: string | null;
  readonly batchManagersId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Settings {
  readonly id: string;
  readonly deviceID?: string | null;
  readonly calendarID?: string | null;
  readonly users?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class ServiceSubscription {
  readonly id: string;
  readonly startDate?: string | null;
  readonly Service?: Service | null;
  readonly package?: Package | null;
  readonly duration?: number | null;
  readonly discount?: number | null;
  readonly Organisation?: Organisation | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceSubscriptionServiceId?: string | null;
  constructor(init: ModelInit<ServiceSubscription, ServiceSubscriptionMetaData>);
  static copyOf(source: ServiceSubscription, mutator: (draft: MutableModel<ServiceSubscription, ServiceSubscriptionMetaData>) => MutableModel<ServiceSubscription, ServiceSubscriptionMetaData> | void): ServiceSubscription;
}

export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly packages: Package[];
  readonly organisation?: Organisation | null;
  readonly isActive: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class Organisation {
  readonly id: string;
  readonly name: string;
  readonly about: string;
  readonly media?: Media | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly slug?: string | null;
  readonly services?: (Service | null)[] | null;
  readonly serviceSubscription?: (ServiceSubscription | null)[] | null;
  readonly batches?: (Batch | null)[] | null;
  readonly isOrganisationComplete?: boolean | null;
  readonly isActive?: boolean | null;
  readonly Customers?: (OrganisationCustomers | null)[] | null;
  readonly Associates?: (OrganisationAssociates | null)[] | null;
  readonly Owners?: (OrganisationOwners | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Organisation, OrganisationMetaData>);
  static copyOf(source: Organisation, mutator: (draft: MutableModel<Organisation, OrganisationMetaData>) => MutableModel<Organisation, OrganisationMetaData> | void): Organisation;
}

export declare class Batch {
  readonly id: string;
  readonly schedule?: Schedule | null;
  readonly attendance?: (Attendance | null)[] | null;
  readonly Service?: Service | null;
  readonly Organisation?: Organisation | null;
  readonly Customers?: (User | null)[] | null;
  readonly Managers?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly batchServiceId?: string | null;
  constructor(init: ModelInit<Batch, BatchMetaData>);
  static copyOf(source: Batch, mutator: (draft: MutableModel<Batch, BatchMetaData>) => MutableModel<Batch, BatchMetaData> | void): Batch;
}

export declare class ServiceDefinition {
  readonly id: string;
  readonly serviceName?: string | null;
  readonly language?: Language | keyof typeof Language | null;
  readonly iconName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ServiceDefinition, ServiceDefinitionMetaData>);
  static copyOf(source: ServiceDefinition, mutator: (draft: MutableModel<ServiceDefinition, ServiceDefinitionMetaData>) => MutableModel<ServiceDefinition, ServiceDefinitionMetaData> | void): ServiceDefinition;
}

export declare class OrganisationCustomers {
  readonly id: string;
  readonly user: User;
  readonly organisation: Organisation;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrganisationCustomers, OrganisationCustomersMetaData>);
  static copyOf(source: OrganisationCustomers, mutator: (draft: MutableModel<OrganisationCustomers, OrganisationCustomersMetaData>) => MutableModel<OrganisationCustomers, OrganisationCustomersMetaData> | void): OrganisationCustomers;
}

export declare class OrganisationAssociates {
  readonly id: string;
  readonly user: User;
  readonly organisation: Organisation;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrganisationAssociates, OrganisationAssociatesMetaData>);
  static copyOf(source: OrganisationAssociates, mutator: (draft: MutableModel<OrganisationAssociates, OrganisationAssociatesMetaData>) => MutableModel<OrganisationAssociates, OrganisationAssociatesMetaData> | void): OrganisationAssociates;
}

export declare class OrganisationOwners {
  readonly id: string;
  readonly user: User;
  readonly organisation: Organisation;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrganisationOwners, OrganisationOwnersMetaData>);
  static copyOf(source: OrganisationOwners, mutator: (draft: MutableModel<OrganisationOwners, OrganisationOwnersMetaData>) => MutableModel<OrganisationOwners, OrganisationOwnersMetaData> | void): OrganisationOwners;
}