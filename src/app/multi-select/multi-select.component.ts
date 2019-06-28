import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mc-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent {
    @Input() options: any[];
    @Input() value: any[] = [];
    @Output() valueChanged = new EventEmitter<any[]>();

    constructor() { }

    handleClick(option) {
        const index = this.value.indexOf(option);
        if (index === -1) {
            this.value = this.value.concat(option);
        }
        else {
            this.value.splice(index, 1);
        }

        this.valueChanged.emit(this.value);
    }

    isChecked(option) {
        return this.value.indexOf(option) !== -1;
    }
}
