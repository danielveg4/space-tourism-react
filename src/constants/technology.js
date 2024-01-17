import { v4 } from "uuid";

const Launch = {
    id: v4(),
    name: "LAUNCH VEHICLE",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "public/assets/technology/image-launch-vehicle-landscape.jpg",
};

const Spaceport = {
    id: v4(),
    name: "SPACEPORT",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "public/assets/technology/image-spaceport-landscape.jpg",
};

const SpaceCapsule = {
    id: v4(),
    name: "SPACE CAPSULE",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "public/assets/technology/image-space-capsule-landscape.jpg",
};

export const TECHNOLOGY = [Launch, Spaceport, SpaceCapsule];