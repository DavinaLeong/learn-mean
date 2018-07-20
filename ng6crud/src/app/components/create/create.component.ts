import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdunitService } from './../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private createAdunitForm: FormGroup;

  constructor(private adunitService: AdunitService,
    private formBuilder: FormBuilder) {
      this.createForm();
  }

  createForm() {
    console.log('createForm called');
    this.createAdunitForm = this.formBuilder.group({
      unit_name: ['', Validators.required],
      unit_price: ['', Validators.required]
    });
  }

  addAdunit(unit_name, unit_price) {
    console.log('addAdunit called');
    this.adunitService.addAdunit(unit_name, unit_price);
  }

  ngOnInit() { }

}// end CreateComponent class
