export class Quote {
    
    'showDescription': boolean;

    constructor(public id: number, public quote: string, public quoteAuthor: string, public submittedBy: string, public completeDate: Date,public upVote: number, public downVote: number, public isInspirational: boolean){
      this.showDescription=false;
    }
  
}
