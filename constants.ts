import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'cofetarie',
    title: 'Cofetărie Fină',
    description: 'Prăjituri elegante, torturi aniversare și delicii dulci create cu pasiune.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop', 
  },
  {
    id: 'patiserie',
    title: 'Patiserie',
    description: 'Foietaje crocante, plăcinte calde și gustări sărate perfecte pentru orice moment.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'brutarie',
    title: 'Brutărie Artizanală',
    description: 'Pâine cu maia, baghete rustice și specialități coapte pe vatră.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1000&auto=format&fit=crop',
  },
];

export const PRODUCTS: Product[] = [
  // --- COFETARIE ---
  {
    id: 'c-001',
    name: 'Amandină Regală',
    description: 'Un cub perfect de ciocolată fină belgiană, cu blat însiropat și cremă ganache intensă.',
    price: 18.50,
    weight: '160g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    isBestSeller: true,
  },
{
    id: 'c-002',
    name: 'Cheesecake',
    description: 'O felie din savurosul nostru cheesecake homemade cu topping de caramel si biscuite Lotus.',
    price: 15.50,
    weight: '220g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?q=80&w=800&auto=format&fit=crop',
    isBestSeller: true,
  },
  {
    id: 'c-003',
    name: 'Duo Chocolat',
    description: 'Brioșă franțuzescă umplută cu cremă de vanilie și glazură de ciocolată.',
    price: 15.50,
    weight: '140g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c-004',
    name: 'Tort Mousse Fructe',
    description: 'Felie de tort aerat cu mousse de zmeură și inserție de fistic.',
    price: 25.00,
    weight: '200g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'c-005',
    name: 'Macarons Asortate',
    description: 'Cutie cu 6 macarons fine: fistic, zmeură, ciocolată, lămâie.',
    price: 45.00,
    weight: '120g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c-006',
    name: 'Tiramisu Clasic',
    description: 'Pișcoturi savoiardi, mascarpone proaspăt și cafea espresso.',
    price: 22.00,
    weight: '200g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c-007',
    name: 'Lemon Tart',
    description: 'Un desert delicios cu umplutură cremoasă de lamâie si bezea pufoasa si usor rumenita pe deasaupra.',
    price: 22.00,
    weight: '250g',
    category: 'cofetarie',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
  },


  // --- PATISERIE ---
  
  {
    id: 'p-001',
    name: 'Biscuiți cu fulgi de ciocolată',
    description: 'Biscuiți fragezi cu fulgi de ciocolata.',
    price: 12.00,
    weight: '150g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop', // Updated: Cheese Pie
    isBestSeller: true,
  },
  {
    id: 'p-002',
    name: 'Rulou cu Scorțișoară',
    description: 'Cinnamon roll glazurat, moale și aromat.',
    price: 10.50,
    weight: '120g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop',
  },
  
  {
    id: 'p-003',
    name: 'Pain au Chocolat',
    description: 'Foietaj cu unt și batoane de ciocolată neagră.',
    price: 9.00,
    weight: '100g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-004',
    name: 'Croissant cu Unt',
    description: 'Clasicul croissant franțuzesc, stratificat perfect.',
    price: 8.00,
    weight: '90g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop', // Updated: Classic Croissant
  },
    {
    id: 'p-005',
    name: 'Croissant cu fistic',
    description: 'Croissant franțuzesc, umplut cu crema densă de fistic.',
    price: 16.00,
    weight: '150g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1761896650898-b9958da48a28?q=80&w=800&auto=format&fit=crop', // Updated: Classic Croissant
  },
 {
    id: 'p-006',
    name: 'Croissant cu ciocolată si capșuni',
    description: 'Croissant crocant, ce imbină intr-o savoare de gusturi ciocolată belgiană topită și căpșuni proaspete',
    price: 16.00,
    weight: '150g',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1721324390033-661a350668d6?q=80&w=800&auto=format&fit=crop', // Updated: Classic Croissant
  },
  // --- BRUTARIE ---
  {
    id: 'b-001',
    name: 'Pâine cu Maia',
    description: 'Pâine rustică fermentată natural 48h, coajă crocantă.',
    price: 14.00,
    weight: '600g',
    category: 'brutarie',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop', // Updated: Rustic Bread
    isBestSeller: true,
  },
  {
    id: 'b-002',
    name: 'Baghetă Tradițională',
    description: 'Baghetă franțuzească crocantă, miez aerat.',
    price: 9.00,
    weight: '300g',
    category: 'brutarie',
    image: 'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?q=80&w=800&auto=format&fit=crop', // Updated: Baguette
  },

  {
    id: 'b-003',
    name: 'Chifle cu Semințe',
    description: 'Chifle pufoase pentru burgeri sau sandwich-uri.',
    price: 5.50,
    weight: '80g',
    category: 'brutarie',
    image: 'https://images.unsplash.com/photo-1632552544552-3ca612a328ac?q=80&w=800&auto=format&fit=crop', // Updated: Sesame Bun
  },
  {
    id: 'b-004',
    name: 'Pâine de Secară',
    description: 'Pâine densă, bogată în fibre, 100% secară.',
    price: 15.00,
    weight: '500g',
    category: 'brutarie',
    image: 'https://images.unsplash.com/photo-1551888761-382cd30b5da6?q=80&w=800&auto=format&fit=crop',
  },
];