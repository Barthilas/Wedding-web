import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs: programItem[];

  constructor() {
    this.programs = this.initPrograms();
  }

  ngOnInit(): void {

  }

  initPrograms(): programItem[]
  {
    let temp = [
      {
        time: "13:00",
        text: "Obřad",
      },
      {
        time: "13:45",
        text: "Společné focení",
      },
      {
        time: "14:30",
        text: "Oběd",
      },
      {
        time: "15:30",
        text: "Krájení dortu",
      },
      {
        time: "16:00",
        text: "Focení novomanželů",
      },
      {
        time: "-",
        text: "Prostor pro ubytování svatebčanů a jejich rozvoz/svoz",
      },
      {
        time: "18:00",
        text: "Raut",
      },
      {
        time: "19:00",
        text: "První tanec",
      },
      {
        time: "21:30",
        text: "Kino",
      },
      {
        time: "-",
        text: "Tady někde bude překvápko",
      },
      {
        time: "1:30",
        text: "The End Times",
      },
    ]
    return temp;
  }
}

interface programItem
{
  time: string,
  text: string
  position?: number
}
