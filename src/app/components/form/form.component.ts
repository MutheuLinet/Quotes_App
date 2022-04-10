import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/class/quote'; 


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quote(0, "","","",new Date(), 0,0,false);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);

//reset new quote

this.newQuote = new Quote(0, " ", " "," ",new Date(),0,0,false);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
