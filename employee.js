import { Base } from './base';

export class Employee extends Base {
  get defaults() {
    return {
      firstName: '',
      lastName: '',
      position: 'Programmer',
      hiredAt: '',
    };
  }
}
