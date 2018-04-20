import { Injectable } from '@angular/core';
import { Section } from './section.model';

@Injectable()
export class SectionsService {
	public sections: Section[] = [{
		firstPosition : 0,
		lastPosition : 7,
		name : 'specials',
		description : 'Golden special stickers'
		}, {
		firstPosition : 8,
		lastPosition : 19,
		name : 'stadiums',
		description : 'Stadium stickers'
		}, {
		firstPosition : 20,
		lastPosition : 39,
		name : 'Russia',
		description : 'Russian stickers'
		}];
	constructor() {

	}

	public getSections(){
		return this.sections;
	}

	public addSection(newSection:Section){
		this.sections.push(newSection);
	}

	public removeSection(section:Section){
		this.sections = this.sections.filter(s => s !== section);
	}
}