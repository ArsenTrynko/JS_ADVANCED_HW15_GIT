import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})

export class Task1Component implements OnInit {
  BadWord: string;
  badWords: Array<string> = [];
  cenzor: string;
  badwordsHTML: string;
  text:string;

  constructor() { }

  ngOnInit(): void {
  }

  ADDWORD(): void {
    if((document.querySelector('#input_world') as HTMLInputElement).validity.valueMissing) {
      alert('Поле пусте!!!')
    }
    else{
         this.badWords.push(this.BadWord);
    this.render();
    this.BadWord = ''; 
    }
  }

  render() : void {
    for (let i = 0; i < this.badWords.length; i++) {
      if (i == 0) {
        this.badwordsHTML = this.badWords[i];
      }
      else {
        this.badwordsHTML += `,${this.badWords[i]}`;
      }
    }
  }

  reset(): void{
    this.badWords = []
    this.badwordsHTML = ''
  }


  startCenzor(): void{
    for (let i = 0; i < this.badWords.length; i++) {
      this.text = this.cenzor;
      this.replaceAll(this.text, this.badWords[i]);
  }
  }


  replaceAll(str, find) {
    let replace = '';
    for (let i = 0; i < find.length; i++) {
        replace += '*';
    }
    str = str.replace(new RegExp(find, 'g'), replace);
    this.cenzor = str;
}

}
