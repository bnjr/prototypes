// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RecurringFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};

const Relation = {
  "SON": "SON",
  "DAUGHTER": "DAUGHTER",
  "MOTHER": "MOTHER",
  "FATHER": "FATHER",
  "WIFE": "WIFE",
  "HUSBAND": "HUSBAND",
  "NEPHEW": "NEPHEW",
  "NIECE": "NIECE"
};

const ChatType = {
  "ONE2_ONE": "ONE2ONE",
  "GROUP": "GROUP",
  "BATCH": "BATCH"
};

const Profile = {
  "CUSTOMER": "CUSTOMER",
  "OWNER": "OWNER",
  "ASSOCIATE": "ASSOCIATE",
  "ADMIN": "ADMIN"
};

const Language = {
  "EN": "EN",
  "HI": "HI",
  "BN": "BN"
};

const SkillNames = {
  "SKATING": "SKATING",
  "DANCING": "DANCING",
  "SINGING": "SINGING",
  "DRAWING": "DRAWING",
  "RECITATION": "RECITATION",
  "SWIMMING": "SWIMMING",
  "TENNIS": "TENNIS",
  "MUSIC": "MUSIC",
  "CHESS": "CHESS"
};

const Duration = {
  "ONETIME": "ONETIME",
  "MONTHLY": "MONTHLY"
};

const SkillExperience = {
  "BELOWONE": "BELOWONE",
  "ONETOTHREE": "ONETOTHREE",
  "THREETOFIVE": "THREETOFIVE",
  "MORETHANFIVE": "MORETHANFIVE"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "EXPERT": "EXPERT"
};

const { User, Settings, ServiceSubscription, Service, Batch, Organisation, ServiceDefinition, OrganisationCustomers, OrganisationAssociates, OrganisationOwners, Attendance, Recurring, Schedule, Address, Location, Skill, Image, Media, Package, Amount } = initSchema(schema);

export {
  User,
  Settings,
  ServiceSubscription,
  Service,
  Batch,
  Organisation,
  ServiceDefinition,
  OrganisationCustomers,
  OrganisationAssociates,
  OrganisationOwners,
  RecurringFrequency,
  Relation,
  ChatType,
  Profile,
  Language,
  SkillNames,
  Duration,
  SkillExperience,
  Gender,
  SkillLevel,
  Attendance,
  Recurring,
  Schedule,
  Address,
  Location,
  Skill,
  Image,
  Media,
  Package,
  Amount
};