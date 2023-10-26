import {Person} from "./valueobjects/person";

export class Manager {
  id: number;
  person: Person
  constructor() {
    this.id = 0;
    this.person = {
      firstName: '',
      lastName: '',
      dni: '',
      age: 0,
      phone: ''
    }
  }
}
