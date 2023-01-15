import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id:11,name:"Burgamo" , power: 99 , url:'https://media.discordapp.net/attachments/1008571225309728878/1063884192850640967/chasedenomme_artistic_portrait_of_jedi_obi-wan_kenobi_80s_retro_ef32e8ef-1db9-4b68-9c19-54d7681a0f24.png?width=605&height=605'},
      { id: 12, name: 'Dr. Nice', power: 87 ,url:'https://cdn.midjourney.com/5a1235be-105e-4b41-9e1a-d7688ae58570/grid_0.png'},
      { id: 13, name: 'Bombasto', power: 76 , url:'https://cdn.midjourney.com/8d9a5ea7-9073-40d4-9a2a-768c0165873e/grid_0.png' },
      { id: 14, name: 'Celeritas', power: 56 ,url:'https://cdn.midjourney.com/c130e018-050c-45ae-b911-98ef989b8144/grid_0.png' },
      { id: 15, name: 'Magneta', power: 81, url:'https://cdn.midjourney.com/1e59829c-2a91-4bc4-b56a-74e3b250d703/grid_0.png' },
      { id: 16, name: 'RubberWo', power: 90, url:'https://cdn.midjourney.com/af471e77-064a-4d5a-a976-8aff72fbf36b/grid_0.png' },
      { id: 17, name: 'Dynama', power: 72, url:'https://cdn.midjourney.com/1425ab87-f1e6-401c-9973-b15d0f40d657/grid_0.png' },
      { id: 18, name: 'Dr. IQ', power: 88 , url:'https://cdn.midjourney.com/dd7358ea-f904-40f0-bd60-070d342bd290/grid_0.png'},
      { id: 19, name: 'Magma', power: 65 , url:'https://cdn.midjourney.com/93bfd450-3668-4e78-ab49-7ece7342c035/grid_0.png'},
      { id: 20, name: 'Tornado', power: 69 , url:'https://media.discordapp.net/attachments/1008571225309728878/1063883396973084712/Zurtokers_An_illithid_clad_in_a_robe_of_dragonskin_with_black_s_7751011f-0535-499b-9dab-166d4989b726.png?width=605&height=605' }];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}