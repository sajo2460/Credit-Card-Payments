import { FormControl } from '@angular/forms';

// Use this class to extend FormControl
export class DateFormControl extends FormControl {
    // set input value of type string OR null  
    setValue(value: string | null, options: any) {
      if (!value) {
        super.setValue('', { ...options, emitModelToViewChange: true });
        return;
      }
        
            // The user can enter only numbers and '/'
      if (value.match(/[^0-9|\/]/gi)) {
        super.setValue(this.value, { ...options, emitModelToViewChange: true });
        return;
      }
      
            // The user can't enter more than 5 characters
      if (value.length > 5) {
        super.setValue(this.value, { ...options, emitModelToViewChange: true });
        return;
      }

      // The user can delete '/'
      if (value.length === 2 && this.value.length === 3) {
        super.setValue(value, { ...options, emitModelToViewChange: true });
        return;
      }
  
        // Add '/' automatically after typing the first 2 numbers and continue
      if (value.length === 2) {
        super.setValue(value + '/', { ...options, emitModelToViewChange: true });
        return;
      }
      super.setValue(value, { ...options, emitModelToViewChange: true });
    }
  }
  