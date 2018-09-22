import { Shower } from '../models/shower';
import { ShowerHost } from '../models/host';
import { PhysicalAddress } from '../models/physicalAddress';

export const MockShowers: Shower[] = [
    {
        id: 1,
        title: 'Canandaigua, NY',
        date: 'Saturday October 20',
        time: '2:00 PM',
        content: ' Join us Saturday October 20th for food, games, and prizes in celebration of Baby Ripoli!! \ ',
        host: {
            firstName: 'Sarah',
            lastName: 'Wormer',
            contact: '',
            address: {
                street1: '227 Parrish St.',
                street2: '',
                city: 'Canandaigua',
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
        content: 'Information will be updated as it becomes available! \ ',
        host: {
            firstName: 'Kelly',
            lastName: 'Ripoli',
            contact: '',
            address: {
                street1: 'tbd',
                street2: '',
                city: 'tbd',
                state: 'PA',
                zip: 'tbd'
            }
        }
    },
    {
        id: 3,
        title: 'Cleveland, OH',
        date: 'Saturday December 1',
        time: '12:00 PM',
        content: 'Information will be updated as it becomes available! \ ',
        host: {
            firstName: 'Becca',
            lastName: 'Fyffe',
            contact: '',
            address: {
                street1: 'tbd',
                street2: '',
                city: 'tbd',
                state: 'OH',
                zip: 'tbd'
            }
        }
    },
];
