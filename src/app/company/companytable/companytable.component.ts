import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'app/company/company';


@Component({
  selector: 'app-companytable',
  templateUrl: './companytable.component.html',
  styleUrls: ['./companytable.component.scss']
})
export class CompanytableComponent implements OnInit {

  @Input() companies: Company[];
  @Output() deleteCompany = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
