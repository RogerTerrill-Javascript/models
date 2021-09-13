import { Model } from './base';

export class Employee extends Model {
  get defaults() {
    return {
      firstName: '',
      lastName: '',
      position: 'Programmer',
      hiredAt: '',
    };
  }
}
