export class Quote {
    
    'showDetails': boolean;

    constructor(public id: number, public quote: string, public quoteAuthor: string, public submittedBy: string, public completeDate: Date){
      this.showDetails=false;
    }
  
}
