// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RecurringFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};

const Duration = {
  "ONETIME": "ONETIME",
  "MONTHLY": "MONTHLY"
};

const ChatType = {
  "ONE2_ONE": "ONE2ONE",
  "GROUP": "GROUP",
  "BATCH": "BATCH"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
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

const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "EXPERT": "EXPERT"
};

const SkillExperience = {
  "BELOWONE": "BELOWONE",
  "ONETOTHREE": "ONETOTHREE",
  "THREETOFIVE": "THREETOFIVE",
  "MORETHANFIVE": "MORETHANFIVE"
};

const Profile = {
  "CUSTOMER": "CUSTOMER",
  "PROVIDER": "PROVIDER",
  "ASSOCIATE": "ASSOCIATE"
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

const Language = {
  "EN": "EN",
  "HI": "HI",
  "BN": "BN"
};

const { Batch, User, Organisation, Service, Review, Chat, Settings, Dependents, ServiceSubscription, ServiceDefinition, AssociateUsers, CustomerUsers, ChatUsers, Attendance, Recurring, Schedule, Address, Location, Package, Amount, Media, Image, Skill } = initSchema(schema);

export {
  Batch,
  User,
  Organisation,
  Service,
  Review,
  Chat,
  Settings,
  Dependents,
  ServiceSubscription,
  ServiceDefinition,
  AssociateUsers,
  CustomerUsers,
  ChatUsers,
  RecurringFrequency,
  Duration,
  ChatType,
  Gender,
  SkillNames,
  SkillLevel,
  SkillExperience,
  Profile,
  Relation,
  Language,
  Attendance,
  Recurring,
  Schedule,
  Address,
  Location,
  Package,
  Amount,
  Media,
  Image,
  Skill
};