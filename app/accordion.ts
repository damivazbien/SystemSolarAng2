import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'accordion',
  template:`
            <ng-content></ng-content>
          `,
  host: {
    'class': 'panel-group'
  }
})
export class Accordion {
  groups: Array<AccordionGroup> = [];
  
  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }
  
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
}

@Component({
  selector: 'accordion-group',
  template:`
                <div [ngClass]="{'panel-open': isOpen}">
                  <div class="panel-heading" (click)="toggleOpen($event)">
                    <h4>
                      <span>{{heading}}</span>
                    </h4>
                  </div>
                  <div [hidden]="!isOpen">
                    <div class="panel-body">
                        <ng-content></ng-content>
                    </div>
                  </div>
                </div>
          `
})
export class AccordionGroup {
  private _isOpen:boolean = false;
  
  @Input() heading: string;
  
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
  }
  
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}