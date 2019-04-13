import { Directive, Input } from  '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
	selector: '[confirmPassValidator]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: ConfirmPasswordValidator,
		multi: true
	}]
})


export class ConfirmPasswordValidator implements Validator {
	

	validate( control: AbstractControl) : { [key: string]: any } | null {

		let compareTo = control.parent.get('password');
		
		if( compareTo && ( compareTo.value !== control.value ) ) {
			return {
				'notEqual': true
			}
		}

		return null;
	}
}