import { Component, OnInit } from '@angular/core';
import { SectionsService } from './sections.service';
import { Section } from './section.model';

@Component({
  selector: 'app-section',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private sectionsService:SectionsService) { 
  }

  ngOnInit() {
  }

  public addedSection(section:Section) {
  	this.sectionsService.addSection(section);
  }

}
