import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent implements OnInit {

  constructor() { }

  @Input() time: string
  @Input() event: string
  @Input() position: string


  ngOnInit(): void {
  }

}
