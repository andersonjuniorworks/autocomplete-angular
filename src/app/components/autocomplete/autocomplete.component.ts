import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() list;
  @Input() inputName: string = '';
  @Input() listName: string = '';
  @Input() labelName: string = '';

  @Output() changeObject = new EventEmitter();

  selected = "";
  selectedObject = {};

  constructor() { }

  ngOnInit() {
  }

  onChange = () => {
    this.selectedObject = this.list.find((obj)=> obj.nome == this.selected);
    this.changeObject.emit({ newSelectedObject: this.selectedObject });
  }

}
