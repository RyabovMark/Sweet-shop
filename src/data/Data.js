import React from "react";

import cooking from '../assets/aboutIcons/cooking.svg'
import deliveryTrack from '../assets/aboutIcons/deliveryTrack.svg'
import cupcake from '../assets/aboutIcons/cupcake.svg'
import checklist from '../assets/aboutIcons/checklist.svg'
import vk from '../assets/contactIcons/vk.svg'
import youTube from '../assets/contactIcons/youtube.svg'
import instagram from '../assets/contactIcons/instagram.svg'
import applePay from '../assets/footerIcons/applepay.svg'
import visa from '../assets/footerIcons/visa.svg'
import mastercard from '../assets/footerIcons/mastercard.svg'
import espressoMartiniCake from '../assets/cake/Espresso martini cake.jpg'
import raspberryLemonadeCupcakes
  from '../assets/cake/Raspberry lemonade cupcakes.jpg'
import blackberryRedVelvetLoafCake
  from '../assets/cake/Blackberry red velvet loaf cake.jpg'
import whiteChocolateRedVelvetCake
  from '../assets/cake/White chocolate red velvet cake.jpg'
import berryBiscuitCake
  from '../assets/cake/Berry biscuit cake.jpg'
import passoverChocolateCake
  from '../assets/cake/Passover chocolate cake.jpg'
import chocolateTruffleCake
  from '../assets/cake/Chocolat truffle cake.jpg'
import strawberryPassionFruitWhiteChocolateCake
  from '../assets/cake/Strawberry, passion fruit & white chocolate cake.jpg'
import raspberryAndCustardPokeCake
  from '../assets/cake/Raspberry and custard poke cake.jpg'
import blueberryCheesecakeLoaf
  from '../assets/cake/Blueberry cheesecake loaf.jpg'
import chocolateCheesecakeWithSaltedCaramelSauce
  from '../assets/cake/Chocolate cheesecake with salted caramel sauce.jpg'
import snickersCheesecake
  from '../assets/cake/Snickers cheesecake.jpg'
import doubleGingerAndWhiteChocolateCheesecake
  from '../assets/cake/Double ginger and white chocolate cheesecake.jpg'
import cupcakeFlowerpotBouquet
  from '../assets/cake/Cupcake flowerpot bouquet.jpg'
import easterBunnyBottomCupcakes
  from '../assets/cake/Easter bunny bottom cupcakes.jpg'
import BluebirdsInANestCupcakes
  from '../assets/cake/Bluebirds-in-a-nest cupcakes.jpg'
import seaSaltAndDarkChocolateCupcakes
  from '../assets/cake/Sea salt and dark chocolate cupcakes.jpg'
import chocolateAndToastedPecanCake
  from '../assets/cake/Butternut, chocolate and toasted pecan cake.jpg'
import easterLemonDrizzleCake
  from '../assets/cake/Easter lemon drizzle cake.jpg'
import whippyCupcakes
  from '../assets/cake/Mr Whippy cupcakes.jpg'
import saltedCaramelJellyDabyCupcakes
  from '../assets/cake/Salted caramel Jelly Baby cupcakes.jpg'
import smoresCupcakes
  from '../assets/cake/S’mores cupcakes.jpg'
import hummingbirdBakeryRedVelvetCupcakes
  from '../assets/cake/Hummingbird Bakery red velvet cupcakes.jpg'
import cremeEggCupcakes
  from '../assets/cake/Creme Egg cupcakes.jpg'
import roseBuns
  from '../assets/cake/Rose buns.jpg'
import strawberryAndCreamCupcakes
  from '../assets/cake/Strawberry and cream cupcakes.jpg'
import figgyStickyToffeeCupcakes
  from '../assets/cake/Figgy sticky toffee cupcakes.jpg'
import chocolateAndHazelnutFaultLineCake
  from '../assets/cake/Chocolate and hazelnut fault-line cake.jpg'
import christmasPenguinCake
  from '../assets/cake/Christmas penguin cake.jpg'
import strawberryAndRedcurrantLoafCake
  from '../assets/cake/Strawberry and redcurrant loaf cake.jpg'
import icySnowGlobeCake
  from '../assets/cake/Icy snow globe cake.jpg'
import stripyRoseCelebrationCake
  from '../assets/cake/Stripy rose celebration cake.jpg'
import brownieCake
  from '../assets/cake/Smores brownie cake.jpg'
import toffeeAppleDateAndWalnutCake
  from '../assets/cake/Toffee apple, date and walnut cake.jpg'
import hauntedHouseCake
  from '../assets/cake/Haunted house cake.jpg'
import halloweenGhostMugCake
  from '../assets/cake/Halloween ghost mug cake.jpg'
import guinnessMugCake
  from '../assets/cake/Guinness mug cake.jpg'
import goodnessGraciousGiantCupcake
  from '../assets/cake/Goodness gracious giant cupcake.jpg'
import pimmCupcakes
  from '../assets/cake/Pimm cupcakes.jpg'
import raspberryAndToastedMeringueCakes
  from '../assets/cake/Raspberry and toasted meringue cakes.jpg'
import milkAndCookiesCake
  from '../assets/cake/Milk and cookies cake.jpg'
import honeyCinnamonAndYogurtCheesecake
  from '../assets/cake/Honey, cinnamon and yogurt cheesecake.jpg'
import strawberriesAndCreamNoBakeCheesecake
  from '../assets/cake/Strawberries and cream no-bake cheesecake.jpg'
import easterEggCheesecakes
  from '../assets/cake/Easter egg cheesecakes.jpg'
import coffeeSwirlCheesecake
  from '../assets/cake/Coffee swirl cheesecake.jpg'
import strawberryCrownShortbreadCake
  from '../assets/cake/Strawberry crown shortbread cake.jpg'

export const menuList = [
  {title: 'Продукция', scroll: 'products', id: 1},
  {title: 'О кондитерской', scroll: 'about', id: 2},
  {title: 'Контакты', scroll: 'contacts', id: 3},
  {title: 'onemorecake', id: 4},
  {title: 'Отзывы', scroll: 'reviews', id: 5},
  {title: 'Доставка и оплата', scroll: 'delivery and pay', id: 6},
]

export const aboutItems = [
  {
    title: 'Натуральные ингредиенты',
    description: 'Всю продукцию мы готовим только из натуральных и свежих' +
      ' ингредиентов',
    image: cooking,
    id: 1
  }, {
    title: 'Бережная доставка',
    description: 'Благодаря специальной упаковки тортик будет у вас в' +
      ' целостности и сохраности',
    image: deliveryTrack,
    id: 2
  }, {
    title: 'Большой выбор',
    description: 'Мы предлагаем большое многообразие тортиков, также' +
      ' работаем по вашим эскизам',
    image: cupcake,
    id: 3
  }, {
    title: 'Гарантии качества',
    description: 'У нас работает штат профессиональных кондитеров с' +
      ' образованием и разрядами',
    image: checklist,
    id: 4
  },
]

export const deliveryTerms = [
  {
    title: 'Самовывоз',
    description: <span>Вы можете забрать заказ самостоятельно прямо из
      пекарни - <b>Бесплатно</b>. <br/>Адрес для самовывоза - ТЦ "Рассвет", 3
      этаж <br/>Строгинский б-р, Дом 1, г. Москва, 876543.</span>,
    id: 1
  }, {
    title: 'В пределах МКАД',
    description:
      <span>При заказе до 5 000₽ доставка в приделах МКАД - <b>400₽</b>.
      <br/>При заказе от 5 000₽ доставка в пределах МКАД -
      <b>бесплатно.</b></span>,
    id: 2
  }, {
    title: 'За МКАД',
    description:
      <span>До 4км. за МКАД - <b>600₽</b>.<br/>От 4 до 10км. - <b>1 000₽</b>.
        <br/>Более 10км. за МКАД - <b>насчитывается по тарифам курьерской службы.</b></span>,
    id: 3
  },
]

export const paymentTerms = [
  {
    title: 'Наличными',
    description: 'Курьеру или в кондитерской при получении заказа.',
    id: 1
  }, {
    title: 'Банковской картой',
    description: 'Онлайн при оформлении заказа, в кондитерской или курьеру' +
      ' при получении заказа через терминал.',
    id: 2
  },
]

export const contactsIcons = [
  {logo: vk, to: 'https://vk.com/', id: 1},
  {logo: youTube, to: 'https://www.youtube.com/', id: 2},
  {logo: instagram, to: 'https://www.instagram.com/', id: 3},
]

export const footerIcon = [
  {logo: mastercard, id: 1},
  {logo: visa, id: 2},
  {logo: applePay, id: 3},
]

export const filterItems = [
  {title: 'Все', field: '', id: 1},
  {title: 'Торты', field: 'cake', id: 2},
  {title: 'Капкейки', field: 'cup', id: 3},
  {title: 'Чизкейки', field: 'cheese', id: 4}
]

export const cake = [
  {
    name: 'Espresso martini cake',
    type: 'cake',
    weight: 1.9,
    price: 2000,
    nutritional: {
      calories: 507,
      fat: 31,
      saturates: 19,
      carbs: 43,
      sugars: 32,
      fibre: 1,
      protein: 5,
      salt: 0.3
    },
    description: 'Chocolate sponges are drizzled with boozy coffee syrup then' +
      ' layered up with an indulgent espresso mascarpone icing. This showstopper is luscious and rich – it makes a fabulous celebration cake',
    image: espressoMartiniCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/8209-Espresso-Martini-cake.jpg?v=1-0',
    id: 1,
  }, {
    name: 'Raspberry lemonade cupcakes',
    type: 'cupcake',
    weight: 0.3,
    price: 300,
    nutritional: {
      calories: 505,
      fat: 27,
      saturates: 17,
      carbs: 60,
      sugars: 49,
      fibre: 1,
      protein: 4,
      salt: 0.8
    },
    description: 'Nothing says summer like a cooling glass of zingy raspberry lemonade. So here’s a tribute to my favourite drink in cupcake form – it’s the ultimate treat you’d never guess was gluten free!’ says Becky',
    image: raspberryLemonadeCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/13511-better-for-you-bake-cupcakes.jpg?v=1-0',
    id: 2,
  }, {
    name: 'Blackberry red velvet loaf cake',
    type: 'cake',
    weight: 1,
    price: 1500,
    nutritional: {
      calories: 360,
      fat: 19,
      saturates: 11,
      carbs: 42,
      sugars: 31,
      fibre: 2,
      protein: 5,
      salt: 0.7
    },
    description: 'Beetroot adds a sweet fudgy texture to this cake, and pairs brilliantly with seasonal blackberries',
    image: blackberryRedVelvetLoafCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/13509-beetroot-and-blackberry-loaf-cake-2.jpg?v=1-0',
    id: 3,
  }, {
    name: 'White chocolate red velvet cake',
    type: 'cake',
    weight: 2.5,
    price: 2100,
    nutritional: {
      calories: 684,
      fat: 38,
      saturates: 16,
      carbs: 75,
      sugars: 51,
      fibre: 2,
      protein: 9,
      salt: 1.3
    },
    description: "A deliciously light and moist sponge with the best white chocolate icing makes this the perfect cake for a party spread",
    image: whiteChocolateRedVelvetCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/13179-Red-velvet-cake.jpg?v=1-0',
    id: 4,
  }, {
    name: 'Berry biscuit cake',
    type: 'cake',
    weight: 1.5,
    price: 1600,
    nutritional: {
      calories: 658,
      fat: 42,
      saturates: 27,
      carbs: 61,
      sugars: 38,
      fibre: 4,
      protein: 7,
      salt: 0.9
    },
    description: 'This dessert is super pretty but also really easy to make. It can be a fabulous summer birthday cake, covered in edible flowers, or simply a showstopper dessert',
    image: berryBiscuitCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/00/11880-Layered_Biscuit_2.jpg?v=1-0',
    id: 5,
  }, {
    name: 'Passover chocolate cake',
    type: 'cake',
    weight: 1.1,
    price: 1600,
    nutritional: {
      calories: 344,
      fat: 22,
      saturates: 13,
      carbs: 30,
      sugars: 25,
      fibre: 1,
      protein: 5,
      salt: 0.3
    },
    description: 'This chocolate cake is a recipe I’ve adapted from my mum – it’s simple to make, and because it’s flourless, it’s perfect for Passover, says chef Daniel',
    image: passoverChocolateCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/13054-passover-chocolate-cake.jpg?v=1-0',
    id: 6,
  }, {
    name: 'Chocolate truffle cake',
    type: 'cake',
    weight: 2.3,
    price: 2300,
    nutritional: {
      calories: 594,
      fat: 33,
      saturates: 19,
      carbs: 63,
      sugars: 48,
      fibre: 3,
      protein: 9,
      salt: 0.2
    },
    description: 'Voted by readers as our best chocolate cake, our 2005 Easter cover star is drenched in truffle icing and topped with chocolate-covered almonds',
    image: chocolateTruffleCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/00/7150-Chocolate-truffle-cake.jpg?v=1-0',
    id: 7,
  }, {
    name: 'Strawberry, passion fruit & white chocolate cake',
    type: 'cake',
    weight: 2,
    price: 2500,
    nutritional: {
      calories: 594,
      fat: 33,
      saturates: 19,
      carbs: 63,
      sugars: 48,
      fibre: 3,
      protein: 9,
      salt: 0.2
    },
    description: 'Winner of our best celebration cake, this summery recipe from September 2014 features light Genoise sponge brushed with passion fruit syrup and layered with cream and strawberries. It’s finished with a spectacular white chocolate collar',
    image: strawberryPassionFruitWhiteChocolateCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/02/7192-Strawberry-passion-fruit-cake.jpg?v=1-0',
    id: 8,
  }, {
    name: 'Raspberry and custard poke cake',
    type: 'cake',
    weight: 2,
    price: 1800,
    nutritional: {
      calories: 504,
      fat: 33,
      saturates: 20,
      carbs: 44,
      sugars: 28,
      fibre: 3,
      protein: 6,
      salt: 0.8
    },
    description: 'It’s called a poke cake as you poke in holes to allow the coulis to soak in. This tastes just like a trifle, in cake form!',
    image: raspberryAndCustardPokeCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/7519-Rasberry-%26-Custard.jpg?v=1-0',
    id: 9,
  }, {
    name: 'White chocolate and blueberry loaf cake with cheesecake frosting',
    type: 'cake',
    weight: 1.2,
    price: 1500,
    nutritional: {
      calories: 500,
      fat: 25,
      saturates: 15,
      carbs: 60,
      sugars: 41,
      fibre: 2,
      protein: 8,
      salt: 0.5
    },
    description: 'Winner of best loaf cake for our 25th Birthday issue, countless readers have sent in photos of their own take on managing food editor Tamsin Burnett-Hall’s pretty loaf cake with cheesecake frosting, which was on our March 2017 cover',
    image: blueberryCheesecakeLoaf,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/7193-Blueberry-cheesecake-loaf.jpg?v=1-0',
    id: 10,
  }, {
    name: 'Chocolate cheesecake with salted caramel sauce',
    type: 'cheesecake',
    weight: 1.1,
    price: 1200,
    nutritional: {
      calories: 376,
      fat: 24,
      saturates: 12,
      carbs: 36,
      sugars: 24,
      fibre: 1,
      protein: 4,
      salt: 0.4
    },
    description: 'This divine cheesecake isn\'t too sweet thanks to the salty pretzels. Make it ahead and serve at your next dinner party',
    image: chocolateCheesecakeWithSaltedCaramelSauce,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/3914-Salted_caramel_choc_Cheesecake_1120x1460.jpg?v=1-0',
    id: 11
  }, {
    name: 'Snickers cheesecake',
    type: 'cheesecake',
    weight: 1.2,
    price: 1400,
    nutritional: {
      calories: 855,
      fat: 52,
      saturates: 33,
      carbs: 66,
      sugars: 55,
      fibre: 0,
      protein: 12,
      salt: 0.7
    },
    description: 'Наивкуснейший чизкейк с орехами, миндалём и ароматной начинкой на основе клубники',
    image: snickersCheesecake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/4016-SnickersCheesecake-1120.jpg?v=1-0',
    id: 12
  }, {
    name: 'Double ginger and white chocolate cheesecake',
    type: 'cheesecake',
    weight: 1.2,
    price: 1400,
    nutritional: {
      calories: 397,
      fat: 23,
      saturates: 14,
      carbs: 42,
      sugars: 37,
      fibre: 0,
      protein: 0,
      salt: 0.5
    },
    description: 'Вегетарианский чизкейк на основе имбиря и белого шоколада, покрыт сочным гранатом',
    image: doubleGingerAndWhiteChocolateCheesecake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/07/4207-Double-ginger-and-chocolate-cheesecake.jpg?v=1-0',
    id: 13
  }, {
    name: 'Cupcake flowerpot bouquet',
    type: 'cupcake',
    weight: 0.35,
    price: 400,
    nutritional: {
      calories: 445,
      fat: 25,
      saturates: 14,
      carbs: 51,
      sugars: 42,
      fibre: 0,
      protein: 4,
      salt: 0.5
    },
    description: 'Вкусный подарок для возлюбленной',
    image: cupcakeFlowerpotBouquet,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/5381-cupcake-bouquet-1120.jpg?v=1-0',
    id: 14
  }, {
    name: 'Easter bunny bottom cupcakes',
    type: 'cupcake',
    weight: 0.3,
    price: 350,
    nutritional: {
      calories: 271,
      fat: 9,
      saturates: 4,
      carbs: 44,
      sugars: 36,
      fibre: 1,
      protein: 2,
      salt: 0.2
    },
    description: 'You can use shop-bought fairy cakes to make these fun Easter bunny bottom cupcakes - or bake your own for a bigger spring project',
    image: easterBunnyBottomCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/11444-Easter_Bunny_CupCakes.jpg?v=1-0',
    id: 15
  }, {
    name: 'Bluebirds-in-a-nest cupcakes',
    type: 'cupcake',
    weight: 0.33,
    price: 380,
    nutritional: {
      calories: 567,
      fat: 29,
      saturates: 71,
      carbs: 0,
      sugars: 55,
      fibre: 2,
      protein: 5,
      salt: 0.6
    },
    description: 'Decorate these coconut cupcakes with cute bluebirds made from ready-to-roll icing',
    image: BluebirdsInANestCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/10405-Bluebird-cupcakes.jpg?v=1-0',
    id: 16
  }, {
    name: 'Sea salt and dark chocolate cupcakes',
    type: 'cupcake',
    weight: 0.3,
    price: 300,
    nutritional: {
      calories: 503,
      fat: 31,
      saturates: 19,
      carbs: 48,
      sugars: 35,
      fibre: 2,
      protein: 6,
      salt: 0.9
    },
    description: 'Смесь черного шоколада и соли придают этому капкейку необычный вкус',
    image: seaSaltAndDarkChocolateCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4375-dark-choc-seasalt-cupcakes.jpg?v=1-0',
    id: 17
  }, {
    name: 'Butternut, chocolate and toasted pecan cake',
    type: 'cake',
    weight: 2.1,
    price: 1900,
    nutritional: {
      calories: 631,
      fat: 40,
      saturates: 14,
      carbs: 61,
      sugars: 43,
      fibre: 3,
      protein: 8,
      salt: 0.2
    },
    description: '',
    image: chocolateAndToastedPecanCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/3721-BUTTERNUT%20CHOCOLATE%20PECAN%20CAKE_1120_1460.jpg?v=1-0',
    id: 18
  }, {
    name: 'Easter lemon drizzle cake',
    type: 'cake',
    weight: 1.9,
    price: 2000,
    nutritional: {
      calories: 477,
      fat: 20,
      saturates: 12,
      carbs: 73,
      sugars: 48,
      fibre: 1,
      protein: 6,
      salt: 0.7
    },
    image: easterLemonDrizzleCake,
    description: 'Лучший подарок на праздник Пасхи',
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/3931-Easter_Lemon_Drizzle_1120.jpg?v=1-0',
    id: 19
  }, {
    name: "'Mr Whippy' cupcakes",
    type: 'cupcake',
    weight: 0.4,
    price: 450,
    nutritional: {
      calories: 485,
      fat: 28,
      saturates: 17,
      carbs: 53,
      sugars: 44,
      fibre: 1,
      protein: 4,
      salt: 0.2
    },
    description: 'Everyone loves a Mr Whippy and we\'ve taken the iconic seaside treat and turned it into this fun cupcake idea - perfect for summer',
    image: whippyCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/5613-Mr-Whippy-cupcakes560_2d16eb70bcc18e9b437e7e83aae0c224.jpg?v=1-0',
    id: 20
  }, {
    name: 'Salted caramel Jelly Baby cupcakes',
    type: 'cupcake',
    weight: 0.42,
    price: 430,
    nutritional: {
      calories: 418,
      fat: 28,
      saturates: 17,
      carbs: 35,
      sugars: 22,
      fibre: 1,
      protein: 6,
      salt: 0.4
    },
    description: 'Our adorable salted caramel \'beach babe\' cupcakes are perfect for a family picnic at the seaside',
    image: saltedCaramelJellyDabyCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/6063-salted-caramel.jpg?v=1-0',
    id: 21
  }, {
    name: "S’mores cupcakes",
    type: 'cupcake',
    weight: 0.32,
    price: 330,
    nutritional: {
      calories: 456,
      fat: 24,
      saturates: 14,
      carbs: 54,
      sugars: 36,
      fibre: 2,
      protein: 5,
      salt: 0.6
    },
    description: 'Необычные капкейки из белой глазури, благодаря малому количеству сахара прекрасно подойдут тем кто следит за своей фигурой',
    image: smoresCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/4806-SmoresCupcakes112.jpg?v=1-0',
    id: 22
  }, {
    name: 'Hummingbird Bakery red velvet cupcakes',
    type: 'cupcake',
    weight: 0.38,
    price: 350,
    nutritional: {
      calories: 455,
      fat: 16,
      saturates: 10,
      carbs: 72,
      sugars: 57,
      fibre: 1,
      protein: 5,
      salt: 0.3
    },
    description: 'People can’t resist Hummingbird Bakery’s cupcakes. Here, founder Tarek Malouf shares his step-by-step guide to making the famous bake. Mix all the ingredients well so the sponge has an even colour and texture. To make a red velvet layer cake instead, double the quantities below, divide between three 20cm cake tins and bake for 25 minutes at the same temperature',
    image: hummingbirdBakeryRedVelvetCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/9414-Red-velvet-cupcakea.jpg?v=1-0',
    id: 23
  }, {
    name: 'Creme Egg cupcakes',
    type: 'cupcake',
    weight: 0.35,
    price: 380,
    nutritional: {
      calories: 877,
      fat: 50,
      saturates: 31,
      carbs: 98,
      sugars: 82,
      fibre: 2,
      protein: 8,
      salt: 1
    },
    description: 'Freezing the Creme Eggs is a clever trick that allows the cakes to cook without melting the hidden egg inside. If you don’t want to put a whole egg in all of them, you can bake half without, so it’s pot luck who gets the prize...',
    image: cremeEggCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/07/6947-Creme-egg-cupcakes.jpg?v=1-0',
    id: 24
  }, {
    name: 'Rose buns',
    type: 'cupcake',
    weight: 0.2,
    price: 250,
    nutritional: {
      calories: 139,
      fat: 6,
      saturates: 4,
      carbs: 18,
      sugars: 13,
      fibre: 1,
      protein: 3,
      salt: 0.2
    },
    description: 'Exotic and fudgy, soaked with maple syrup and scented with roses, there is something of a rum baba about these. They\'re made healthier due to the use of two high-fibre flours, neither of which dampen the indulgence of these little buns',
    image: roseBuns,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/7493-Rose-buns.jpg?v=1-0',
    id: 25
  }, {
    name: 'Strawberry and cream cupcakes',
    type: 'cupcake',
    weight: 0.27,
    price: 330,
    nutritional: {
      calories: 284,
      fat: 12,
      saturates: 2,
      carbs: 41,
      sugars: 30,
      fibre: 2,
      protein: 3,
      salt: 0.5
    },
    description: '',
    image: strawberryAndCreamCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/3906-Strawbs_cream_cupcakes_1120x1460.jpg?v=1-0',
    id: 26
  }, {
    name: 'Figgy sticky toffee cupcakes',
    type: 'cupcake',
    weight: 0.32,
    price: 350,
    nutritional: {
      calories: 538,
      fat: 24,
      saturates: 13,
      carbs: 75,
      sugars: 61,
      fibre: 2,
      protein: 6,
      salt: 1
    },
    description: 'Like portable sticky toffee puddings, these cupcakes are made with dried figs instead of dates and have a rich flavour that matches the mood of the season perfectly',
    image: figgyStickyToffeeCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/12269-sticky-toffee-cupcakes.jpg?v=1-0',
    id: 27
  }, {
    name: 'Chocolate and hazelnut fault-line cake',
    type: 'cake',
    weight: 2.4,
    price: 2700,
    nutritional: {
      calories: 538,
      fat: 24,
      saturates: 13,
      carbs: 75,
      sugars: 61,
      fibre: 2,
      protein: 6,
      salt: 1
    },
    description: 'Make our epic chocolate fault-line cake for a showstopping Easter bake',
    image: chocolateAndHazelnutFaultLineCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/07/11497-Fault-line-cake.jpg?v=1-0',
    id: 28
  }, {
    name: 'Christmas penguin cake',
    type: 'cake',
    weight: 1.9,
    price: 2200,
    nutritional: {
      calories: 852,
      fat: 22,
      saturates: 13,
      carbs: 160,
      sugars: 150,
      fibre: 0,
      protein: 4,
      salt: 0.5
    },
    description: 'This little guy is so kawaii with his red bow tie. It’s an easy design to do, and can be on display throughout the festive season',
    image: christmasPenguinCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/6343-Penguin-cake.jpg?v=1-0',
    id: 29
  }, {
    name: 'Strawberry and redcurrant loaf cake',
    type: 'cake',
    weight: 2,
    price: 1800,
    nutritional: {
      calories: 358,
      fat: 14,
      saturates: 8,
      carbs: 51,
      sugars: 33,
      fibre: 2,
      protein: 5,
      salt: 0.4
    },
    description: '',
    image: strawberryAndRedcurrantLoafCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/4559-StrawberryRedcurrantCrushCake_560.jpg?v=1-0',
    id: 30
  }, {
    name: 'Strawberry crown shortbread cake',
    type: 'cake',
    weight: 3.5,
    price: 2900,
    nutritional: {
      calories: 274,
      fat: 15,
      saturates: 9,
      carbs: 32,
      sugars: 24,
      fibre: 0,
      protein: 3,
      salt: 0.3
    },
    description: 'Is there a more perfect way to celebrate the Queen’s platinum jubilee than with our spectacular crown cake? Layers of lemony shortbread are filled with an indulgent Champagne buttercream and the season’s tastiest strawberries, then decorated with mini biscuit sandwiches and white chocolate truffles emblazoned with gold leaf',
    image: strawberryCrownShortbreadCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/13163-Crown-Biscuit-Layer.jpg?v=1-0',
    id: 31
  }, {
    name: 'Icy snow globe cake',
    type: 'cake',
    weight: 2,
    price: 2100,
    nutritional: {
      calories: 658,
      fat: 43,
      saturates: 12,
      carbs: 32,
      sugars: 45,
      fibre: 2,
      protein: 5,
      salt: 0.4
    },
    description: 'This festive icy snow globe cake is how we like to picture a winter wonderland. Use this decoration technique on top of a 20cm round fruit cake',
    image: icySnowGlobeCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/6586-Icy-snow-globe-cake.jpg?v=1-0',
    id: 32
  }, {
    name: 'Stripy rose celebration cake',
    type: 'cake',
    weight: 1.9,
    price: 2200,
    nutritional: {
      calories: 825,
      fat: 37,
      saturates: 22,
      carbs: 117,
      sugars: 99,
      fibre: 1,
      protein: 6,
      salt: 0.7
    },
    description: 'Smart stripes and candy pink are more fashionable than ever. This show-stopping cake from baker Peggy Porschen is perfect for a celebration. If you want to make it for a children’s party, try the stripes in vivid rainbow colours instead',
    image: stripyRoseCelebrationCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/9415-Stripy-rose-cake.jpg?v=1-0',
    id: 33
  }, {
    name: "S'mores brownie cake",
    type: 'cake',
    weight: 1.7,
    price: 2300,
    nutritional: {
      calories: 734,
      fat: 39,
      saturates: 21,
      carbs: 90,
      sugars: 71,
      fibre: 2,
      protein: 10,
      salt: 0.3
    },
    description: '',
    image: brownieCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/08/4018-SmoresCake-1120.jpg?v=1-0',
    id: 34
  }, {
    name: 'Toffee apple, date and walnut cake',
    type: 'cake',
    weight: 2,
    price: 2500,
    nutritional: {
      calories: 818,
      fat: 51,
      saturates: 29,
      carbs: 84,
      sugars: 67,
      fibre: 2,
      protein: 8,
      salt: 0.4
    },
    description: '',
    image: toffeeAppleDateAndWalnutCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/4139-ToffeeAppleCake2584---1120.jpg?v=1-0',
    id: 35
  }, {
    name: 'Haunted house cake',
    type: 'cake',
    weight: 2,
    price: 2800,
    nutritional: {
      calories: 638,
      fat: 28,
      saturates: 17,
      carbs: 87,
      sugars: 62,
      fibre: 2,
      protein: 8,
      salt: 1
    },
    description: 'Like a gingerbread house, but much simpler – all you need for this impressive bake is a square cake tin. The delicate orange flavour will be a hit with children and adults alike',
    image: hauntedHouseCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/02/8292-Chocolate-haunted-house.jpg?v=1-0',
    id: 36
  }, {
    name: 'Halloween ghost mug cake',
    type: 'cake',
    weight: 1.6,
    price: 2800,
    nutritional: {
      calories: 528,
      fat: 31,
      saturates: 18,
      carbs: 59,
      sugars: 58,
      fibre: 1,
      protein: 5,
      salt: 0.3
    },
    description: '',
    image: halloweenGhostMugCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/4171-Halloweenghostmugcake214404---1120.jpg?v=1-0',
    id: 37
  }, {
    name: 'Guinness mug cake',
    type: 'cake',
    weight: 1,
    price: 1400,
    nutritional: {
      calories: 267,
      fat: 12,
      saturates: 4,
      carbs: 37,
      sugars: 25,
      fibre: 1.5,
      protein: 3,
      salt: 0.2
    },
    description: 'Прекрасный подарок для безалкогольной вечеринки',
    image: guinnessMugCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4185-Guiness-mug-cake-1120.jpg?v=1-0',
    id: 38
  }, {
    name: 'Goodness gracious giant cupcake',
    type: 'cupcake',
    weight: 1,
    price: 1500,
    nutritional: {
      calories: 787,
      fat: 36,
      saturates: 22,
      carbs: 107,
      sugars: 91,
      fibre: 2,
      protein: 7,
      salt: 0.3
    },
    description: "Королеве бала - королевский капкейк, это самый большой капкейк который вы когда либо видели",
    image: goodnessGraciousGiantCupcake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/4933-GiantCupcakeCrown1120.jpg?v=1-0',
    id: 39
  }, {
    name: 'Pimms cupcakes',
    type: 'cupcake',
    weight: 0.29,
    price: 330,
    nutritional: {
      calories: 557,
      fat: 33,
      saturates: 19,
      carbs: 60,
      sugars: 50,
      fibre: 1,
      protein: 3.5,
      salt: 0.2
    },
    description: '',
    image: pimmCupcakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/4933-GiantCupcakeCrown1120.jpg?v=1-0',
    id: 40
  }, {
    name: 'Raspberry and toasted meringue cakes',
    type: 'cupcake',
    weight: 0.29,
    price: 350,
    nutritional: {
      calories: 284,
      fat: 16,
      saturates: 7,
      carbs: 29,
      sugars: 19,
      fibre: 2,
      protein: 5,
      salt: 0.4
    },
    description: 'Cupcake meets queen of puddings... these little raspberry-filled sponges are as light as a feather',
    image: raspberryAndToastedMeringueCakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/08/13178-Raspberry-meringue-cakes.jpg?v=1-0',
    id: 41
  }, {
    name: 'Milk and cookies cake',
    type: 'cake',
    weight: 1.5,
    price: 1300,
    nutritional: {
      calories: 970,
      fat: 51,
      saturates: 31,
      carbs: 116,
      sugars: 91,
      fibre: 2,
      protein: 10,
      salt: 0.7
    },
    description: 'Blondies Kitchen have taken the classic combo of milk and cookies and popped it into a fabulously sweet cake. Decorate it with your favourite biscuits',
    image: milkAndCookiesCake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/6466-Milk-and-cookies-cake.jpg?v=1-0',
    id: 42
  }, {
    name: 'Honey, cinnamon and yogurt cheesecake',
    type: 'cheesecake',
    weight: 0.9,
    price: 1000,
    nutritional: {
      calories: 422,
      fat: 30,
      saturates: 18,
      carbs: 37,
      sugars: 25,
      fibre: 0,
      protein: 7,
      salt: 0.7
    },
    description: 'Blondies Kitchen have taken the classic combo of milk and cookies and popped it into a fabulously sweet cake. Decorate it with your favourite biscuits',
    image: honeyCinnamonAndYogurtCheesecake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/08/4408-TotalYoghurt_Cheesecake.jpg?v=1-0',
    id: 43
  }, {
    name: 'Strawberries and cream no-bake cheesecake',
    type: 'cheesecake',
    weight: 1,
    price: 1100,
    nutritional: {
      calories: 391,
      fat: 33,
      saturates: 19,
      carbs: 21,
      sugars: 16,
      fibre: 1,
      protein: 3,
      salt: 0.4
    },
    description: "These cheesecake are made with dried figs instead of dates and have a rich flavour that matches the mood of the season perfectly",
    image: strawberriesAndCreamNoBakeCheesecake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/3981-strawberry-no-bake-cheesecake-1120.jpg?v=1-0',
    id: 44
  }, {
    name: 'Coffee swirl cheesecake',
    type: 'cheesecake',
    weight: 0.9,
    price: 1200,
    nutritional: {
      calories: 438,
      fat: 32,
      saturates: 19,
      carbs: 30,
      sugars: 21,
      fibre: 1,
      protein: 8,
      salt: 0.2
    },
    description: 'This divine cheesecake isn\'t too sweet thanks to the salty pretzels. Make it ahead and serve at your next dinner party',
    image: coffeeSwirlCheesecake,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/5329-Coffee-Cheesecake-1120.jpg?v=1-0',
    id: 45
  }, {
    name: 'Easter egg cheesecakes',
    type: 'cheesecake',
    weight: 0.8,
    price: 1300,
    nutritional: {
      calories: 487,
      fat: 37,
      saturates: 23,
      carbs: 32,
      sugars: 26,
      fibre: 1,
      protein: 6,
      salt: 0.7
    },
    description: 'The perfect pud to round off your Easter lunch in style; hollow chocolate eggs are filled with a deliciously creamy cheesecake mix, made with a touch of soured cream to balance the sweetness',
    image: easterEggCheesecakes,
    imageUrl: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/01/13041-easter-egg-cheesecake.jpg?v=1-0',
    id: 46
  }
]

export const reviews = [
  {
    reviewer: 'Aнастасия',
    review: `Ipsum dolor sit amet, consectetur adipisicing elit.
      Accusamus ad architecto esse hic in incidunt laudantium sit ullam! Aperiam
      aspernatur harum incidunt libero molestiae officiis porro, provident
      reiciendis sit suscipit`,
    date: '21.02.2021',
    id: 1
  }, {
    reviewer: 'Евгений',
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusamus ad architecto esse hic in incidunt laudantium sit ullam! Aperiam
      aspernatur harum incidunt libero molestiae officiis porro, provident
      reiciendis sit suscipit`,
    date: '21.09.2021',
    id: 2
  }, {
    reviewer: 'Светлана',
    review: `Corporis doloremque esse exercitationem ipsam neque nisi similique
      voluptatum. Asperiores aspernatur, cupiditate earum eius est exercitationem
      expedita in minus molestias nostrum odio quaerat quod rem repellat tempora
      unde, veritatis vitae!`,
    date: '01.04.2021',
    id: 3
  },
]

export const weightCake = [
  {
    title: '1кг.', value: 1, id: 1
  }, {
    title: '2кг.', value: 2, id: 2
  }, {
    title: '3кг.', value: 3, id: 3
  }, {
    title: '3.5кг.', value: 3.5, id: 5
  }, {
    title: '4кг.', value: 4, id: 6
  },
];

export const quantityCupcake = [
  {
    title: '4 шт.', value: 4, id: 1
  }, {
    title: '5 шт.', value: 5, id: 2
  }, {
    title: '6 шт.', value: 6, id: 3
  }, {
    title: '7 шт.', value: 7, id: 4
  }, {
    title: '8 шт.', value: 8, id: 5
  },
];

export const taste = [
  {
    title: 'Ореховый', id: 1
  }, {
    title: 'Шоколадный', id: 2
  }, {
    title: 'Красный бархат', id: 3
  }, {
    title: 'Миндальный', id: 4
  }
];

export const filling = [
  {
    title: 'Клубника', id: 1
  }, {
    title: 'Вишня', id: 2
  }, {
    title: 'Ягодный микс', id: 3
  }, {
    title: 'Персики', id: 4
  }, {
    title: 'Карамель', id: 5
  }
];

export const personalData = [
  {
    title: 'Фамилия', value: 'lastName', id: 1
  }, {
    title: 'Имя', value: 'name', id: 2
  }, {
    title: 'Телефон', value: 'phoneNumber', id: 3
  }, {
    title: 'Электронная почта', value: 'mail', id: 4
  }
];

export const location = [
  {
    title: 'Город', value: 'city', id: 1
  }, {
    title: 'Дом', value: 'house', id: 2
  }, {
    title: 'Подъезд', value: 'porch', id: 3
  }, {
    title: 'Квартира', value: 'street', id: 4
  }, {
    title: 'Улица', value: 'flat', id: 5
  }, {
    title: 'Домофон', value: 'flatPhone', id: 6
  }
];

export const timeDelivery = [
  {
    title: 'Дата доставки', value: 'date', id: 1
  }, {
    title: 'Время', value: 'time', id: 2
  }, {
    title: 'Способ оплаты', value: 'payVariants', id: 3
  }, {
    title: 'Комментарии к доставке', value: 'comments', id: 4
  }
];



