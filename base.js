import defaultsDeep from 'lodash/defaultsDeep';
import _ from 'lodash';

export class Model {
  constructor(attributes = {}) {
    defaultsDeep(
      this,
      _.mapKeys(
        _.omit(attributes, ['status', 'errorCount', 'rowIndex']),
        (value, key) => _.lowerFirst(key)
      ),
      this.defaults
    );
  }
}

export class List {
  constructor(items = []) {
    this.models = items.map((item) => new this.model(item));
  }
}
