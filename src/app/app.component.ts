import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emails = [
      { email: "kiranvarade95@gmail.com" }, 
      { email: "kiru@gmail.com " }, 
      { email: "k@gmail.com" },
      { email: 'k92@gmail.com' }]
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }

}