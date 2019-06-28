import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'mc-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MultiSelectComponent,
        multi: true,
    }]
})
export class MultiSelectComponent implements ControlValueAccessor {
    @Input() disabled: boolean;
    onChange: (value: any[]) => void;
    onTouched: () => void;
    @Input() options: any[];
    @Input() value: any[] = [];

    constructor() { }

    handleClick(option) {
        const index = this.value.indexOf(option);
        if (index === -1) {
            this.value = this.value.concat(option);
        }
        else {
            this.value.splice(index, 1);
        }

        this.onTouched();
        this.onChange(this.value);
    }

    isChecked(option) {
        return this.value.indexOf(option) !== -1;
    }

    registerOnChange(fn: (value: any[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(obj: any[]): void {
        this.value = obj || [];
    }
}
