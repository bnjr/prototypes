import _ from 'lodash'
import {action, observable} from 'mobx'
// import 'react-native-get-random-values' //Needed for https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import {v4 as uuidv4} from 'uuid'

type CustomClass<T> = new (item: any) => T

export class List<T extends {getId: () => string}> {
  readonly items: Array<T>

  static getUniqueId = (): string => {
    return uuidv4()
  }

  constructor(rawData: any, type: CustomClass<T>) {
    this.items = [] as Array<T>

    _.each(rawData || [], (item: any) => {
      const hasId = !!item.id
      this.addItem(new type(hasId ? item : {id: List.getUniqueId(), ...item}))
    })
  }

  get size(): number {
    return this.items.length
  }

  hasItems(): boolean {
    return this.size > 0
  }

  getItemById(id: string): T | undefined {
    return _.find(this.items, (item) => item.getId() === id)
  }

  updateItem(updatedItem: T) {
    if (updatedItem && this.hasItems()) {
      const index = _.findIndex(
        this.items,
        (item) => item.getId() === updatedItem.getId()
      )

      if (index > -1) {
        this.items[index] = updatedItem
      }
    }
  }

  addItem(item: T) {
    if (this.getItemById(item.getId())) {
      this.updateItem(item)
    } else {
      this.items.push(item)
    }
  }

  addItems(items: Array<T>) {
    _.each(items, (item) => this.addItem(item))
  }

  merge(list: List<T>) {
    _.each(list.items, (item) => this.addItem(item))
  }

  removeItem(id: string | number) {
    const deleteIndex = _.findIndex(
      this.items,
      (item) => item.getId() === id.toString()
    )

    if (deleteIndex >= 0) {
      this.items.splice(deleteIndex, 1)
    }
  }

  clear() {
    // @ts-ignore Mobx provides clear method on an observable array
    this.items.clear()
  }

  replace(items: Array<T>) {
    // @ts-ignore Mobx provides replace method on an observable array
    this.items.replace(items)
  }

  /**
   * Returns filtered items
   * @param iterator A function the accepts the item and returns boolean true if required
   */

  filter(iterator: (item: T) => boolean): T[] {
    return _.filter(this.items, iterator)
  }

  /**
   * Returns a filtered list
   * @param iterator A function the accepts the item and returns boolean true if required
   * @param list An empty list which will be returned with filtered items
   */

  getFilteredList(iterator: (item: T) => boolean, list: List<T>): List<T> {
    list.addItems(this.filter(iterator))
    return list
  }

  /**
   * Useful for debugging list items
   * @param message Title
   */
  log(message?: string) {
    console.log(`LOGGER: ${message || ''}`, this.items.slice())
  }

  first(): T | undefined {
    return _.first(this.items)
  }

  last(): T | undefined {
    return _.last(this.items)
  }

  getIds(): string[] {
    return _.map(this.items, (item) => item.getId())
  }
}
