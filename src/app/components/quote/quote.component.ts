import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(1, 'The journey of a thousand miles begins with one step.', 'Lao Tzu', 'Lyn Mutheu', new Date(2019,9,14)),
    new Quote(2,'That which does not kill us makes us stronger','Friedrich Nietzsche','Lyn Mutheu',new Date(2019,6,9)),
    new Quote(3,'You must be the change you wish to see in the world.','Mahatma Gandhi','Lyn Mutheu',new Date(2019,1,12)),
    new Quote(4,'Sometimes my genious is almost frightening','Samwel Chege','Lyn Mutheu',new Date(2019,11,18)),
    new Quote(5,'','Lyn Mutheu','Lyn Mutheu', new Date(2019,2,14)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
