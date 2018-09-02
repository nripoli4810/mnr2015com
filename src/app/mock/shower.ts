import { Shower } from '../models/shower';
import { ShowerHost } from '../models/host';
import { PhysicalAddress } from '../models/physicalAddress';

export const MockShowers: Shower[] = [
    {
        id: 1,
        title: 'Canandaigua, NY',
        date: 'TBD',
        time: '1 PM',
        content: "\
        <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p> \
        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to. \
        Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow\'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits. \ ",
        host: {
            firstName: 'Sarah',
            lastName: 'Wormer',
            contact: 'email@email.com',
            address: {
                street1: '227 Parrish Street',
                street2: '',
                city: 'Canandiagua',
                state: 'NY',
                zip: '14424'
            }
        }
    },
    {
        id: 2,
        title: 'Titusville, PA',
        date: 'TBD',
        time: '1 PM',
        content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. \
        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to. \
        Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow\'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits. \ ',
        host: {
            firstName: 'tbd',
            lastName: 'tnd',
            contact: 'test@email.com',
            address: {
                street1: 'tbd',
                street2: '',
                city: 'tbd',
                state: 'tbd',
                zip: 'tbd'
            }
        }
    },
    {
        id: 3,
        title: 'Cleveland, OH',
        date: 'TBD',
        time: '1 PM',
        content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. \
        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to. \
        Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow\'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits. \ ',
        host: {
            firstName: 'tbd',
            lastName: 'tnd',
            contact: '123-123-1234',
            address: {
                street1: 'tbd',
                street2: '',
                city: 'tbd',
                state: 'tbd',
                zip: 'tbd'
            }
        }
    },
];
