import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-main-feeding',
  templateUrl: './main-feeding.component.html',
  styleUrls: ['./main-feeding.component.sass'],
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
      })),
      state('open', style({
        width: '89px',
        height:'23px' ,
        transform: 'translateY(80px)',
      })),
      transition('open => closed', [
        animate('5s')
      ]),
    ]),
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }],
})
export class MainFeedingComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder) {
  }
  
  imagePreview: string;
  selecetdFile : File;

  onFileSelected(event) {
    this.selecetdFile = event.target.files[0];
    console.log(this.selecetdFile);
    
    const reader = new FileReader();
    
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.selecetdFile);

    
  }

  isOpen = false;
  share() {
    this.isOpen = !this.isOpen;
  }

  
  ngOnInit(): void {
    
    
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      // thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      // fourthCtrl: ['', Validators.required]      

    });
    this.fifthFormGroup = this._formBuilder.group({
      // fifthCtrl: ['', Validators.required]
    });
  }

}
