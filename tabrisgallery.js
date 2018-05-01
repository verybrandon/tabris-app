const {Composite, ScrollView, ImageView, ui, TextView} = require('tabris');

// Display images with different scale modes

let scrollView = new ScrollView({
  left: 0, right: 0, top: '1%', bottom: '1%',
  direction: 'vertical',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(scrollView);

 new ImageView({
    left: 20, width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4290244/dribbblespace_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
  new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4297478/dribbbletwitchyrabbit_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
   new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4305776/dribbblewildlife_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
   new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4316591/dribbbleaustinrun_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
     new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4324315/dribbblepaint_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
       new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4340764/dribbblesweets_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
   new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4340788/dribbblejjpizza_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
  new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4350397/dribbblepups_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
    new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4357889/dribbblefast_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
      new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4365534/dribbbleanimalhospital_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
      new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4375472/dribbblesprinkles_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
     new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4384228/dribbbledeadbeat_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
       new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4389720/dribbblewenatchee_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
         new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4400328/dribbblefootball_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);
           new ImageView({
    left: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4409227/dribbblefilm_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite1);


let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#f3f3f3'
}).appendTo(scrollView);



new ImageView({
    right: 20, width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4294154/dribbblegrind_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
  new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4300606/dribbbleping_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
    new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4311222/dribbble1800rosebud_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
    new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4321081/dribbblesparked_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
    new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4328143/dribbbleanchor_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
      new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4340780/dribbbleswordshield_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
   new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4346594/dribbblebookworm_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
   new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4355165/dribbblesharp_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
   new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4360443/dribbblesakura_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
     new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4370269/dribbblefreelance_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
       new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4379296/dribbblepersonal_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
         new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4386887/dribbbleavocado_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
           new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4394596/dribbblemywine_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
             new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4403837/dribbblefashionista_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);
               new ImageView({
    right: 20, top: 'prev() 10', width: 160, height: 120,
    image: 'https://cdn.dribbble.com/users/2148295/screenshots/4412981/dribbblealibaba_1x.jpg',
    background: '#aaaaaa',
  }).appendTo(composite2);