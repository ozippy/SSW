import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-companyedit',
  templateUrl: './companyedit.component.html',
  styleUrls: ['./companyedit.component.scss']
})
export class CompanyeditComponent implements OnInit {

  company = <Company>{};
  companyId: any;
  isNewCompany: boolean;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.buildForm();

    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  buildForm(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['']
    })
  }


  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.saveCompany(this.companyForm.value)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    } else {
      const newCompany = Object.assign({}, { id: this.companyId }, this.companyForm.value);
      this.companyService.updateCompany(newCompany)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    }
  }

  getCompany() {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => {
        this.companyForm.patchValue(company);
      });
  }
}
