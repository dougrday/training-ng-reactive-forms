import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

/**
 * Gets a list of all form errors contained within a form group,
 * grouped by the validation key.
 */
function getFormErrors(group: FormGroup) {
    return Object
        .keys(group.controls)
        .filter(controlKey => !!group.controls[controlKey].errors)
        .map(controlKey => Object.keys(group.controls[controlKey].errors).map(validationKey => ({ [validationKey]: controlKey })))
        .reduce(
            (result, arr) => {
                for (const error of arr) {
                    for (const validationKey of Object.keys(error)) {
                        result[validationKey] = (result[validationKey] || []).concat(error[validationKey]);
                    }
                }
                return result;
            },
            {}
        );
}

@Component({
    selector: 'mc-demo-form',
    templateUrl: './demo-form.component.html',
    styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent {
    constructor() { }

    demoForm = new FormGroup({
        firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }),
        lastName: new FormControl('', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }),
        interests: new FormControl({ value: [], disabled: true }, [Validators.required, Validators.minLength(3)]),
        tellUsMore: new FormControl(false),
    });

    interestOptions = ['Basketball', 'Piano', 'Guitar', 'Hiking', 'Gaming', 'D&D'];

    get firstName() { return this.demoForm.get('firstName'); }
    get lastName() { return this.demoForm.get('lastName'); }
    get interests() { return this.demoForm.get('interests'); }

    handleTellUsMoreChange() {
        // Enable/disable the interests area
        const shouldCheckInterests = this.demoForm.get('tellUsMore').value;
        const interests = this.demoForm.get('interests');
        interests[shouldCheckInterests ? 'enable' : 'disable']();
        interests.markAsUntouched();
    }

    handleSubmit() {
        this.demoForm.markAllAsTouched();

        if (this.demoForm.valid) {
            const value = this.demoForm.value;
            alert(JSON.stringify(value));
        }
        else {
            alert("One or more errors occurred:\n" + JSON.stringify(getFormErrors(this.demoForm)));
        }
    }
}
