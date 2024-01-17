import { v4 } from "uuid";

const Moon = {
    id: v4(),
    name: "Moon",
    description: "See our planet as youve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While youre there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: "public/assets/destination/image-moon.png",
    distance: "384,400 km",
    travetime: "3 days"
};

const Mars = {
    id: v4(),
    name: "Mars",
    description: "Dont forget to pack your hiking boots. Youll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. Its two and a half times the size of Everest!",
    image: "public/assets/destination/image-mars.png",
    distance: "225 mill km",
    travetime: "9 months"
};

const Europa = {
    id: v4(),
    name: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lovers dream. With an icy surface, its perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: "public/assets/destination/image-europa.png",
    distance: "628 mill km",
    travetime: "3 years"
};

const Titan = {
    id: v4(),
    name: "Titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: "public/assets/destination/image-titan.png",
    distance: "1.6 bill km",
    travetime: "7 years"
};

export const PLANETSDESTINATION = [Moon, Mars, Europa, Titan];