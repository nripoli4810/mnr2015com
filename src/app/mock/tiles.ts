import { Tile } from '../tile/tile';

export const MockTiles: Tile[] = [
    {
        id: 1,
        title: 'Home',
        subtitle: 'where the food is',
        avatar: 'home',
        content: 'This is some short content.',
        href: 'home',
        img: '',
        featured: false,
        hidden: false,
    },
    {
        id: 2,
        title: 'The Baby',
        subtitle: 'Subtitle',
        avatar: 'plus_one',
        content: 'This is some short content.',
        href: 'baby',
        img: '../../assets/whiteShoes.jpg',
        featured: true,
        hidden: false,
    },
    {
        id: 3,
        title: 'Galleries',
        subtitle: 'Subtitle',
        avatar: 'photo_album',
        content: 'This is some short content.',
        href: 'galleries',
        img: '../../assets/gallery.jpg',
        featured: true,
        hidden: false,
    },
    {
        id: 4,
        title: 'Blog',
        subtitle: 'where the goods are',
        avatar: 'edit',
        content: 'This is some short content.',
        href: 'blog',
        img: '',
        featured: false,
        hidden: false,
    },
    {
        id: 5,
        title: 'Staging',
        subtitle: 'Subtitle',
        avatar: 'code',
        content: 'This is some short content.',
        href: 'dev',
        img: '',
        featured: false,
        hidden: false,
    },
    {
        id: 6,
        title: 'Expo',
        subtitle: 'Subtitle',
        avatar: '',
        content: 'This is some short content.',
        href: 'dev2',
        img: '',
        featured: false,
        hidden: true,
    },
];