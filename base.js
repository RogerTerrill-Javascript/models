import defaultsDeep from 'lodash/defaultsDeep';
import _ from 'lodash';

export class Base {
  constructor(attributes = {}) {
    this.model = {};
    defaultsDeep(
      this.model,
      _.mapKeys(_.pick(attributes, this.columns), (value, key) =>
        _.lowerFirst(key)
      )
    );
  }

  get columns() {
    return [];
  }

  lowercaseFirstChar(str) {
    return str.charAt(0).toLowerCase() + str.substr(1);
  }

  generateNestedProperties() {
    for (const [key, value] of Object.entries(this.model)) {
      const keys = key.split('_');
      if (keys.length > 1) {
        const result = keys
          .reverse()
          .reduce(
            (result, key) => ({ [this.lowercaseFirstChar(key)]: result }),
            value
          );
        delete this.model[key];
        this.setAttributes(result);
      }
    }
    return this;
  }

  setArrayAttributes(props) {
    props.forEach((prop) => {
      this.model[prop] = this.model[prop].split(',').map((el) => el.trim());
    });

    return this;
  }

  setAttributes(source) {
    defaultsDeep(this.model, source);
    return this;
  }

  getProperty(prop) {
    return this.model[prop];
  }

  addToArrayProp(prop, values) {
    this.model[prop].push(...values);
    return this;
  }

  renameProp(key, newKey) {
    if (key !== newKey) {
      Object.defineProperty(
        this.model,
        newKey,
        Object.getOwnPropertyDescriptor(this.model, key)
      );
      delete this.model[key];
    }
    return this;
  }

  build() {
    this.generateNestedProperties();
    return this;
  }

  getModel() {
    return this.model;
  }

  show() {
    console.log('Show Model', this.model);
  }
}

export class List {
  constructor(items = []) {
    this.models = items.map((item) => new this.model(item).build());
  }

  modelFilter(filterProp, filterValue) {
    return this.models.filter((model) => {
      return model.getProperty(filterProp) === filterValue;
    });
  }

  getModels() {
    return this.models;
  }

  show() {
    return this.models.forEach((model) => console.log('Model in List', model));
  }
}
