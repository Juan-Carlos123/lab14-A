export class AppComponent{
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Heroes que vuelan';

  constructor() {this.reset();}

  addHero(name: string){
    /*name = name.trim();
    if(!name) {return;}
    let hero = {name, canFly: this.canFly};
    this.heroes = this.heroes.concat(hero);*/
  }

  reset() {this.heroes = [];}
}