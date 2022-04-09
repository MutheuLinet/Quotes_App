import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(1, 'The journey of a thousand miles begins with one step.', 'Lao Tzu', 'Lyn Mutheu', new Date(2019,9,14),0 , 0,false),
    new Quote(2,'That which does not kill us makes us stronger.','Friedrich Nietzsche','Lyn Mutheu',new Date(2019,6,9),0 , 0,false),
    new Quote(3,'You must be the change you wish to see in the world.','Mahatma Gandhi','Lyn Mutheu',new Date(2019,1,12),0 , 0,false),
    new Quote(4,'Sometimes my genious is almost frightening.','Samwel Chege','Lyn Mutheu',new Date(2019,11,18),0 , 0,false),
    new Quote(5,'Those who dare to fail miserably can achieve greatly.','Lyn Mutheu','Lyn Mutheu', new Date(2019,2,14),0 , 0,false),
  ];

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  
    upVote(isUpVote:any, index:any){
      
      this.quotes[index].upVote++
      this.inspirationalQuote();
    
  }
  downVote(isDownVote:any, index:any){
    
      this.quotes[index].downVote++
    
  }
  inspirationalQuote(){
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote){
        return quote.upVote;
      })
    );
    let quoteIndex: number = this.quotes.findIndex(
      (quote) =>quote.upVote === maxValue
    );
    this.quotes.forEach((quote) =>{
      quote.isInspirational = false;
    });
    this.quotes[quoteIndex].isInspirational = true;
  }

  deleteQuote(isComplete:boolean, index:number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote:any){
    let quotelength = this.quotes.length;
    quote.id =quotelength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
