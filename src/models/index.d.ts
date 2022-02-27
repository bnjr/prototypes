import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RecurringFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY"
}

export enum Duration {
  ONETIME = "ONETIME",
  MONTHLY = "MONTHLY"
}

export enum ChatType {
  ONE2_ONE = "ONE2ONE",
  GROUP = "GROUP",
  BATCH = "BATCH"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
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

export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERT = "EXPERT"
}

export enum SkillExperience {
  BELOWONE = "BELOWONE",
  ONETOTHREE = "ONETOTHREE",
  THREETOFIVE = "THREETOFIVE",
  MORETHANFIVE = "MORETHANFIVE"
}

export enum Profile {
  CUSTOMER = "CUSTOMER",
  PROVIDER = "PROVIDER",
  ASSOCIATE = "ASSOCIATE"
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

export enum Language {
  EN = "EN",
  HI = "HI",
  BN = "BN"
}

export declare class Attendance {
  readonly date?: string;
  readonly userID?: string;
  constructor(init: ModelInit<Attendance>);
}

export declare class Recurring {
  readonly frequency?: RecurringFrequency | keyof typeof RecurringFrequency;
  readonly endDate?: string;
  readonly occurrence?: number;
  readonly interval?: number;
  constructor(init: ModelInit<Recurring>);
}

export declare class Schedule {
  readonly startDate?: string;
  readonly endDate?: string;
  readonly recurring?: RecurringFrequency | keyof typeof RecurringFrequency;
  readonly location?: Address;
  constructor(init: ModelInit<Schedule>);
}

export declare class Address {
  readonly firstLine?: string;
  readonly secondLine?: string;
  readonly locality?: string;
  readonly city?: string;
  readonly state?: string;
  readonly pin?: string;
  readonly location?: Location;
  constructor(init: ModelInit<Address>);
}

export declare class Location {
  readonly lat?: string;
  readonly long?: string;
  constructor(init: ModelInit<Location>);
}

export declare class Package {
  readonly name: string;
  readonly price: Amount;
  readonly duration: Duration | keyof typeof Duration;
  readonly noOfSessions: number;
  readonly isActive?: boolean;
  constructor(init: ModelInit<Package>);
}

export declare class Amount {
  readonly amount?: string;
  readonly currency?: string;
  constructor(init: ModelInit<Amount>);
}

export declare class Media {
  readonly images: (Image | null)[];
  readonly banner?: string;
  readonly logo?: string;
  readonly video: (string | null)[];
  constructor(init: ModelInit<Media>);
}

export declare class Image {
  readonly filename: string;
  readonly height: string;
  readonly width: string;
  constructor(init: ModelInit<Image>);
}

export declare class Skill {
  readonly name?: SkillNames | keyof typeof SkillNames;
  readonly level?: SkillLevel | keyof typeof SkillLevel;
  readonly details?: string;
  readonly experience?: SkillExperience | keyof typeof SkillExperience;
  constructor(init: ModelInit<Skill>);
}

type BatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DependentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceSubscriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceDefinitionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssociateUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Batch {
  readonly id: string;
  readonly Customers?: (User | null)[];
  readonly Managers?: (User | null)[];
  readonly Service?: Service;
  readonly schedule?: Schedule;
  readonly attendance?: (Attendance | null)[];
  readonly Organisation?: Organisation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly batchServiceId?: string;
  readonly batchOrganisationId?: string;
  constructor(init: ModelInit<Batch, BatchMetaData>);
  static copyOf(source: Batch, mutator: (draft: MutableModel<Batch, BatchMetaData>) => MutableModel<Batch, BatchMetaData> | void): Batch;
}

export declare class User {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly isEmailVerified?: boolean;
  readonly organisationID?: string;
  readonly associateOf?: (AssociateUsers | null)[];
  readonly customerOf?: (CustomerUsers | null)[];
  readonly chatParticipantOf?: (ChatUsers | null)[];
  readonly isActive?: boolean;
  readonly isProfileCompleted?: boolean;
  readonly isSkillCompleted?: boolean;
  readonly dob?: string;
  readonly gender?: Gender | keyof typeof Gender;
  readonly skills?: (Skill | null)[];
  readonly address?: Address;
  readonly isPhoneVerified?: boolean;
  readonly avatar?: string;
  readonly about?: string;
  readonly profile?: (Profile | null)[] | keyof typeof Profile;
  readonly subId?: string;
  readonly dependentsID?: string;
  readonly batchID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Organisation {
  readonly id: string;
  readonly name: string;
  readonly about: string;
  readonly owner: User;
  readonly services?: (Service | null)[];
  readonly associates?: (AssociateUsers | null)[];
  readonly customers?: (CustomerUsers | null)[];
  readonly isActive?: boolean;
  readonly reviews?: (Review | null)[];
  readonly media?: Media;
  readonly phone?: string;
  readonly email?: string;
  readonly address?: Address;
  readonly slug?: string;
  readonly isOrganisationCompleted?: boolean;
  readonly isSetupCompleted?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly organisationOwnerId: string;
  constructor(init: ModelInit<Organisation, OrganisationMetaData>);
  static copyOf(source: Organisation, mutator: (draft: MutableModel<Organisation, OrganisationMetaData>) => MutableModel<Organisation, OrganisationMetaData> | void): Organisation;
}

export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly packages: Package[];
  readonly isActive: boolean;
  readonly organisationID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class Review {
  readonly id: string;
  readonly by?: string;
  readonly review: string;
  readonly date?: string;
  readonly isActive?: boolean;
  readonly organisationID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Review, ReviewMetaData>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}

export declare class Chat {
  readonly id: string;
  readonly channelArn?: string;
  readonly type?: ChatType | keyof typeof ChatType;
  readonly users?: (ChatUsers | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chat, ChatMetaData>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat, ChatMetaData>) => MutableModel<Chat, ChatMetaData> | void): Chat;
}

export declare class Settings {
  readonly id: string;
  readonly deviceID?: string;
  readonly User?: User;
  readonly calendarID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly settingsUserId?: string;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class Dependents {
  readonly id: string;
  readonly Dependee?: User;
  readonly Dependent?: User;
  readonly relation?: Relation | keyof typeof Relation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly dependentsDependeeId?: string;
  readonly dependentsDependentId?: string;
  constructor(init: ModelInit<Dependents, DependentsMetaData>);
  static copyOf(source: Dependents, mutator: (draft: MutableModel<Dependents, DependentsMetaData>) => MutableModel<Dependents, DependentsMetaData> | void): Dependents;
}

export declare class ServiceSubscription {
  readonly id: string;
  readonly startDate?: string;
  readonly Organisation?: Organisation;
  readonly User?: User;
  readonly Service?: Service;
  readonly package?: Package;
  readonly discount?: number;
  readonly duration?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly serviceSubscriptionOrganisationId?: string;
  readonly serviceSubscriptionUserId?: string;
  readonly serviceSubscriptionServiceId?: string;
  constructor(init: ModelInit<ServiceSubscription, ServiceSubscriptionMetaData>);
  static copyOf(source: ServiceSubscription, mutator: (draft: MutableModel<ServiceSubscription, ServiceSubscriptionMetaData>) => MutableModel<ServiceSubscription, ServiceSubscriptionMetaData> | void): ServiceSubscription;
}

export declare class ServiceDefinition {
  readonly id: string;
  readonly serviceName?: string;
  readonly language?: Language | keyof typeof Language;
  readonly iconName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ServiceDefinition, ServiceDefinitionMetaData>);
  static copyOf(source: ServiceDefinition, mutator: (draft: MutableModel<ServiceDefinition, ServiceDefinitionMetaData>) => MutableModel<ServiceDefinition, ServiceDefinitionMetaData> | void): ServiceDefinition;
}

export declare class AssociateUsers {
  readonly id: string;
  readonly user: User;
  readonly organisation: Organisation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AssociateUsers, AssociateUsersMetaData>);
  static copyOf(source: AssociateUsers, mutator: (draft: MutableModel<AssociateUsers, AssociateUsersMetaData>) => MutableModel<AssociateUsers, AssociateUsersMetaData> | void): AssociateUsers;
}

export declare class CustomerUsers {
  readonly id: string;
  readonly user: User;
  readonly organisation: Organisation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CustomerUsers, CustomerUsersMetaData>);
  static copyOf(source: CustomerUsers, mutator: (draft: MutableModel<CustomerUsers, CustomerUsersMetaData>) => MutableModel<CustomerUsers, CustomerUsersMetaData> | void): CustomerUsers;
}

export declare class ChatUsers {
  readonly id: string;
  readonly user: User;
  readonly chat: Chat;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatUsers, ChatUsersMetaData>);
  static copyOf(source: ChatUsers, mutator: (draft: MutableModel<ChatUsers, ChatUsersMetaData>) => MutableModel<ChatUsers, ChatUsersMetaData> | void): ChatUsers;
}