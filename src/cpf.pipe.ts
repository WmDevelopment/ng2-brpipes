import { isString, formatCpf } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
// 019.642.561-19
export class CpfPipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        }

        if(value && value.length === 11) {
            return formatCpf(value);
        }

        return value;
    }
}