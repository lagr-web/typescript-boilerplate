import { exploding } from './interfaces/effects';


interface Enemy {
    name: string;
    strength: number;
    levelAsign: number;
}

export class Enemies {

    static example = "My Red Ninja Skills" //using static

    constructor() {


        console.log(Enemies.example);

        const Alien: Enemy = {

            name: 'Ninja Killer',
            strength: 100,
            levelAsign: 5
        }


        const Dog: Enemy = {

            name: 'Ben Wow',
            strength: 90,
            levelAsign: 5

        }


        const Car: exploding = {
            heat: 5,
            fuel: "gasolin"
        }

        console.log(Car.fuel);


        const myArray = [Alien.name, Dog.name, Enemies.example];

        console.log(myArray);


    }



}