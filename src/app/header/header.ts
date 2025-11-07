import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practice-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit{

  title: string = '';

  constructor() {}

  ngOnInit(): void {
    
  }

}
