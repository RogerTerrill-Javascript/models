import defaultsDeep from 'lodash/defaultsDeep';
import _ from 'lodash';

export class Base {
  constructor(attributes = {}) {
    defaultsDeep(
      this,
      _.mapKeys(_.pick(attributes, this.columns), (value, key) => {
        if (typeof value === 'object') {
        }
        return _.lowerFirst(key);
      })
    );
  }

  get columns() {
    return [];
  }
}

export class List {
  constructor(items = []) {
    this.models = items.map((item) => new this.model(item));
  }

  print() {
    console.log(this.models);
  }
}
