import {Profile} from '../amplify'
import {OrganisationCustomers, OrganisationAssociates} from '../amplify'

//https://medium.com/codex/factory-pattern-type-script-implementation-with-type-map-ea422f38862
const bpMap = {
  [Profile.CUSTOMER]: OrganisationCustomers,
  [Profile.ASSOCIATE]: OrganisationAssociates,
}
type BPMap = typeof bpMap
export type Keys = keyof BPMap
type Tuples<T> = T extends Keys ? [T, BPMap[T]] : never
type TuplesInstance<T> = T extends Keys ? [T, InstanceType<BPMap[T]>] : never
export type SingleKeys<K> = [K] extends (K extends Keys ? [K] : never)
  ? K
  : never
type ClassType<A extends Keys> = Extract<Tuples<Keys>, [A, any]>[1]
type ClassInstance<A extends Keys> = Extract<TuplesInstance<Keys>, [A, any]>[1]

export class BPFactory {
  static getBPType<K extends Keys>(k: SingleKeys<K>): ClassType<K> {
    return bpMap[k]
  }
  static getBPInstance<K extends Keys>(
    k: SingleKeys<K>,
    data: any,
  ): ClassInstance<K> {
    return new bpMap[k](data)
  }
}
