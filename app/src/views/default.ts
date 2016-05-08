import { Component } from '@angular/core';

@Component({
  template: `
  <div>
    {{ message }}
  </div>
`
})

export class Default {
  message: String;
  constructor() {
    this.message = 'Hello Angular 2 RC1!';
  }
}
