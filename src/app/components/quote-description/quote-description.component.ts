import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})

export class QuoteDescriptionComponent implements OnInit {

  @Input() 'quote': Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Output() isUpVote = new EventEmitter<boolean>();
  @Output() isDownVote = new EventEmitter<boolean>();

  upVote(like:boolean){
    this.isUpVote.emit(like);
  }
  downVote(dislike:boolean){
    this.isDownVote.emit(dislike);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
