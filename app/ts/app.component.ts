import {Component} from '@angular/core';
import {ChildOneComponent} from './child-One.component';
import {PairComponent} from './pair.component';
import {Pair}from './Pair';

@Component({
    selector: 'my-app',
    template: ` <div>This is the Root App Component</div>
                <child-one data = "data sent to public property"></child-one>
                <hr>
                
                <pair 
                    *ngFor="let mypair of pairs" 
                        [nameValue]="mypair">
                </pair>
              `,
    directives: [ChildOneComponent,PairComponent]
})
export class AppComponent { 

pairs: Pair[];
    constructor() {
        this.pairs = [
            new Pair("cotton", 6),
            new Pair("food", 9)
        ]
    }
}