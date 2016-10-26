import { Component } from '@angular/core';
import {Accordion, AccordionGroup} from './accordion';
import { SSolarService } from './ssystem.services';
import { Planet } from './planet';

@Component({
  selector: 'my-app',
  template: `
              <accordion>
                  <accordion-group [heading]="group.Name" *ngFor="let group of groups">
                    {{group.DistanceFromSun}}
                  </accordion-group>
              </accordion>
            `
})
export class AppComponent { 
    
    
    isGroupOpen = false;
    groups : Planet[]; 

    constructor(
       private ssystemService: SSolarService) {
        
     }
    
     getPlanets(): void {
      this.ssystemService.getPlanets()
       .subscribe(planets => this.groups = planets);
       
     }


     ngOnInit(): void {
        this.getPlanets();
     }
    
}
