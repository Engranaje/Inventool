"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let inputs = document.querySelectorAll('input[data-input-type="number"]');

    numberControl = inputs => {
        Array.from(inputs).forEach(input => {
            input.addEventListener('input', function(e) {
                allowed = [
                    '0',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    'Backspace',
                    'F5',
                    '.',
                ];
                if(!allowed.includes(e.data)){
                    this.value = this.value.replace(e.data, '');
                }
            });
        });
        Array.from(inputs).forEach(input => {
            input.addEventListener('keypress', function(e) {
                switch (e.key) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case 'Backspace':
                    case 'F5':
                        return e.key;
                    case '.':
                        if (this.value.trim() == ''
                            || this.value.length <= 0
                            || this.value.indexOf('.') >= 0){
                                e.preventDefault();
                                return false;
                            }
                            break;
                    default:
                        e.preventDefault();
                        return false;
                }
            });
        });
        Array.from(inputs).forEach(input => {
            input.addEventListener('blur', function() {
                this.value = Number(this.value.replace(/,/g, '')).toLocaleString('en-CA');
            });
        });
        Array.from(inputs).forEach(input => {
            input.addEventListener('focus', function() {
                this.value = this.value.replace(/[,]/g, '');
            });
        });
    };

    numberControl(inputs);
});