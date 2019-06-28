import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'mc-demo-form',
    templateUrl: './demo-form.component.html',
    styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent {
    constructor() { }

    demoForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl('')
    });

    get firstName() { return this.demoForm.get('firstName'); }
    get lastName() { return this.demoForm.get('lastName'); }

    handleSubmit() {
        const value = this.demoForm.value;
        alert(JSON.stringify(value));
    }
}
