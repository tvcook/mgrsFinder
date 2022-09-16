import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  input: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  handleSearch(input:string) {
    console.log("search!", input);
  }

}
