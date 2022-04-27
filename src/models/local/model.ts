import _ from 'lodash'
// import 'react-native-get-random-values' //Needed for https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import {v4 as uuidv4} from 'uuid'
export class Model {
  private readonly id: string

  constructor(data: any) {
    this.id = _.get(data, 'id') ?? uuidv4()
  }

  getId(): string {
    return this.id ?? ''
  }

  asAnotherType<T>(withoutId?: boolean): T {
    let data: any
    if (withoutId) data = _.omit(this, 'id')
    else data = _.cloneDeep(this)
    return data as T
  }
}
