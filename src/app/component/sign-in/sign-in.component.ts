import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, AbstractControlOptions, FormControl, FormControlOptions, FormArray } from '@angular/forms' ;
import {debounceTime, last} from 'rxjs/operators';

function ratingRange( min : number , max : number) : ValidatorFn {
  return (c : AbstractControl) : {[key : string] : boolean} | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max )) {
      return {'range' : true} ;
    }
    return null;
  }
}



function emailMatcher (c : AbstractControl) : {[key : string] : boolean} | null { 
  const emailControl = c.get('email') ;
  const confirmControl = c.get('confirmEmail') ;
  if (emailControl?.pristine || confirmControl?.pristine) {
    return null ;
  }
  console.log(emailControl?.value , confirmControl?.value) ;
  if (emailControl?.value != confirmControl?.value ){
      return {'match' : true} ;
  }
  return null ;
}



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  customerForm! : FormGroup ;
  // customer = new Customer();
  
  public stringsToDisplay : any = {
    firstNameMessage : "" ,
    lastNameMessage : "",
    emailMessages : "" ,
    confirmEmailMessages : "",
    combineEmailGroupMessages : "",
  }

  get addresses() : FormArray {
    return <FormArray> this.customerForm.get('addresses');
  }
  

  private validationMessages : any  = { 
    email : {
      required : 'Please enter your email address.' ,
      email : 'please enter a valid email address.',
    },
    firstName : {
      required : "please enter your first name",
      minlength : "The firstname length must be greater then 3 characters",
    },
    lastName : {
      required : "please enter your last name",
      maxlength : "The last name length cannot exceed more than 50 characters"
    },
    confirmEmail : {
        required : "please enter your email address", 
        email : "please enter a valid email address",
    },
    combineEmailGroup : { 
      match : "Email doesn't Match",
    }
  }

  constructor(private fb: FormBuilder) { }
 
  populateTestData() :void {
      this.customerForm.patchValue({
        firstName : 'sufian',
        lastName : 'shaik',
        sendCatalog : false ,
      })
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
        firstName : ['' , [Validators.required , Validators.minLength(3)]],
        lastName : ['' , [Validators.required , Validators.maxLength(50)]],
        emailGroup : this.fb.group({
          email : ['' , [Validators.required , Validators.email]] ,
          confirmEmail :[ '' , [Validators.required , Validators.email]],
        } , {validator : emailMatcher} as any),
        phone : '',
        notification : 'email', 
        sendCatalog : true ,
        rating : [null , [ratingRange(1 , 5)]],
        addresses : this.fb.array([this.buildAddress()])
    });

    this.customerForm.get('notification')?.valueChanges.subscribe(
      value => this.setNotification(value)
    );

    const combineEmailGroup = this.customerForm.get('emailGroup') ;
    combineEmailGroup?.valueChanges.pipe(
    ).subscribe(value => this.setMessage(combineEmailGroup , "combineEmailGroup" , "combineEmailGroupMessages"));

    const emailControl = this.customerForm.get('emailGroup.email') ;
    emailControl?.valueChanges.pipe(
      debounceTime(1000) 
    ).subscribe( value => this.setMessage(emailControl ,"email","emailMessages" ))

    const confirmEmailControl = this.customerForm.get('emailGroup.confirmEmail') ;
    confirmEmailControl?.valueChanges.pipe(
      debounceTime(1000) 
    ).subscribe( value => this.setMessage(confirmEmailControl ,"confirmEmail","confirmEmailMessages"))

    const firstNameControl = this.customerForm.get('firstName');
    firstNameControl?.valueChanges.subscribe( value => this.setMessage(firstNameControl , "firstName" , "firstNameMessage"));

    const lastNameControl = this.customerForm.get('lastName') ;
    lastNameControl?.valueChanges.subscribe(value => this.setMessage(lastNameControl , "lastName" , "lastNameMessage"));
  } 

  setNotification(notiType : string) : void {
    const phoneControl = this.customerForm.get('phone') ;
    if (notiType == 'text') {
      phoneControl?.setValidators(Validators.required) ;
    }
    else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  } 


  setMessage(c : AbstractControl, validationMessageType : string, messageToDisplay : string ) : void {
    // if (validationMessageType === 'email'){
    //   this.customerForm.controls['confirmEmail'].enable; 
    // }

    // console.error(c.errorss);
    this.stringsToDisplay[messageToDisplay] = '' ;
    if ( (c.touched || c.dirty) && c.errors) {
      console.log(c.errors , validationMessageType);
      this.stringsToDisplay[messageToDisplay] = Object.keys(c.errors).map(
        key => this.validationMessages[validationMessageType][key]).join(' ');
        console.error(validationMessageType , this.stringsToDisplay[messageToDisplay] , messageToDisplay);
    }
  }

  addAddress() : void {
    this.addresses.push(this.buildAddress()) ;
  }

  buildAddress() : FormGroup {
    return this.fb.group({
      addressType : 'home',
      street1 : "",
      street2 : "",
      city : "",
      state : "",
      zip : "",
    });
  }

  save(): void {
    console.log(this.customerForm) ;
  }
}
