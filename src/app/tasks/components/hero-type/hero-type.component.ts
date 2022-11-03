import { Component, Input, OnInit } from '@angular/core';
import { heroTypeNames } from '../../../constants/hero.constants';

@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {
  @Input() typeId: number | undefined;

  heroTypeNames = heroTypeNames;

  constructor() { }

  ngOnInit(): void {
  }

}
