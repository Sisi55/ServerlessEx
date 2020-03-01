abstract class Character {
  public name: string;
  public hp: number;
  protected damage: number; 

  constructor(name: string, hp: number, damage: number) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  abstract hit(target: Character): number;
}

class Player extends Character {
  private power: number = 0.2;
  constructor(name: string, hp: number, damage: number) {
    super(name, hp, damage)
  }

  public powerUp(power: number) {
    this.power = this.power +  power;
  }

  public hit(target: Character): number {
    target.hp = target.hp - (this.damage * this.power)
    return target.hp
  }
}

class Enemy extends Character {
  constructor(name: string, hp: number, damage: number) {
    super(name, hp, damage)
  }

  public hit(target: Character): number {
    target.hp = target.hp - this.damage
    return target.hp
  }
}

let player = new Player('영웅', 100, 5)
let goblin = new Enemy('고블린', 20, 7)

player.hit(goblin)
goblin.hit(player)

console.log(goblin.hp)
console.log(player.hp)
// console.log(player.damage) // 에러 발생생