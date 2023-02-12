import images from './images';

const products = [
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    image: images.product01,
    image02: images.product01a,
  },
  {
    brand: "Hisense",
    title: 'Hisense 58" Class 4K UHD LED LCD Roku Smart TV HDR R6 ',
    price: '$298',
    image: images.product02,
    image02: images.product02a,
    
  },
  {
    brand: "Samsung",
    title: 'Samsung DW80R2031US 55 dBA Stainless Built-in Dishwasher',
    price: '$758',
    image: images.product03,
    image02: images.product03a,
  },
  {
    brand: "Beats",
    title: 'Beats Studio Buds – True Wireless Noise Cancelling Bluetooth Earbuds',
    price: '$99.95',
    image: images.product04,
    image02: images.product04a,
  },
];

const SpecialProduct = [
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
  {
    brand: "Apple",
    title: 'Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD',
    price: '$600',
    discountPrice: '$510',
    image: images.product01,
    discountDays: '5',
    productCount: '5'
  },
];

const bannerCard = [
  {
    label: "Big Screen",
    subtitle: "Smart Watch Series 7",
    title: "From $399 of $16.62/mo. for 24 mo. *",
    image: images.famous01,
  },
  {
    label: "Studio Display",
    subtitle: "600 nits of brightness.",
    title: "27-inch 5k Retina display",
    image: images.famous02,
  },
  {
    label: "Smartphones",
    subtitle: "IPhone 13 Pro",
    title: "Now in Green, From $999.00 or $41.62/mo. for 24 mo.",
    image: images.famous03,
  },
  {
    label: "Home Speakers",
    subtitle: "Room-filling sound",
    title: "From $699 or $21.99/mo. for 12 mo.",
    image: images.famous04,
  },
]

const blogs = [
  {
    title: "Shop Valentine's Day!",
    date: 'Sep 26, 2021',
    image: images.blog
  },
  {
    title: 'Why The Watt is Important in Electric Appliances?',
    date: 'Sep 26, 2021',
    image: images.blog
  },
  {
    title: 'How to Choose The Right Sound System',
    date: 'Sep 26, 2021',
    image: images.blog
  },
  {
    title: 'Amazing Technologies from World Cup 2022',
    date: 'Sep 14, 2021',
    image: images.blog
  },
];


export default { products, SpecialProduct, bannerCard, blogs };