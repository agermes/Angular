import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() text?: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onChangeText(text: string): void {
    this.textChange.emit(this.text);
    console.log("event");
  }
}
