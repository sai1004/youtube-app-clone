import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin-page',
    templateUrl: './signin-page.component.html',
    styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
    signInForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.signInForm = this.createSignInForm();
    }

    ngOnInit(): void {}

    createSignInForm(): FormGroup {
        return this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        this.signInForm.value;
        console.log(this.signInForm.value);
    }
}
