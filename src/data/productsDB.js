const products = [
  {
    id: 1,
    product: "MacBook Pro Retina de 13 pulgadas",
    detail:
      "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
    price: "$350.000",
    stock: 5,
    category: "PCs",
    url: "https://justcreative.com/wp-content/uploads/2020/12/16-inch-MacBook-Pro-600x350.jpg",
  },
  {
    id: 2,
    product: "Asus Chromebook Flip",
    detail:
      "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
    price: "$180.000",
    stock: 9,
    category: "PCs",
    url: "https://justcreative.com/wp-content/uploads/2019/06/asus-flip-1.jpg",
  },
  {
    id: 3,
    product: "Microsoft Surface Pro 6",
    detail:
      "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
    price: "$240.000",
    stock: 3,
    category: "PCs",
    url: "https://justcreative.com/wp-content/uploads/2019/06/Surface-Pro-6-1.jpg",
  },
  {
    id: 4,
    product: "Google Pixelbook",
    detail:
      "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    price: "$150.000",
    stock: 14,
    category: "PCs",
    url: "https://justcreative.com/wp-content/uploads/2019/06/pixelbook.jpg",
  },
  {
    id: 5,
    product: "Dell Inspiron 14 5482",
    detail:
      "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
    price: "$230.000",
    stock: 18,
    category: "PCs",
    url: "https://justcreative.com/wp-content/uploads/2019/06/inspiron-14-5482.jpg",
  },
  {
    id: 6,
    product: "HP EliteDisplay E273m",
    detail:
      "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
    price: "$85.000",
    stock: 20,
    category: "Perifericos",
    url: "https://i.blogs.es/df2482/hp-elitedisplay-e273m/1366_2000.jpg",
  },
  {
    id: 7,
    product: "HP 24f",
    detail: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
    price: "$31354.53",
    stock: 13,
    category: "Perifericos",
    url: "https://i.blogs.es/be005b/hppp/1366_2000.jpg",
  },
  {
    id: 8,
    product: "Sony WH-1000XM4",
    detail: "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam",
    price: "$45.000",
    stock: 13,
    category: "Perifericos",
    url: "https://m.media-amazon.com/images/I/61TaJLNZDKL._AC_SX679_.jpg",
  },
  {
    id: 9,
    product: "Logitech G",
    detail:
      "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    price: "$35.000",
    stock: 10,
    category: "Perifericos",
    url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/gpro_auric1-f13382b81efbec50e815997555077112-640-0.jpg",
  },
  {
    id: 10,
    product: "Razer Overwatch",
    detail:
      "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
    price: "$15.000",
    stock: 20,
    category: "Perifericos",
    url: "https://http2.mlstatic.com/D_NQ_NP_957511-MLA28051628647_082018-O.webp",
  },
  {
    id: 11,
    product: "JBL LIVE 400 BT BLUE",
    detail:
      "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    price: "$10.000",
    stock: 14,
    category: "Perifericos",
    url: "https://www.atajo.com.ar/images/JBLLIVE400BTBLUAM45554JBLLIVE400BTBLUAM.jpg",
  },
  {
    id: 12,
    product: "Elevador De Notebook Aluminio",
    detail: "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
    price: "$10.000",
    stock: 17,
    category: "Perifericos",
    url: "http://http2.mlstatic.com/D_756905-MLC46587957112_072021-O.jpg",
  },
  {
    id: 13,
    product: "Elevador Notebook Madera",
    detail:
      "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque",
    price: "$4.000",
    stock: 12,
    category: "Perifericos",
    url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/102/583/products/soporte-notebook-madera-eucaliptus-computadora-tienda-pepino-311-f391c6150660f62d7615626174523472-1024-1024.jpg",
  },
  {
    id: 14,
    product: "Pop keys Logitech Mecanico Inalambrico",
    detail: "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
    price: "$15.000",
    stock: 14,
    category: "Perifericos",
    url: "https://logitechar.vteximg.com.br/arquivos/ids/158514-450-450/920-010713.png?v=637800262357370000",
  },
  {
    id: 15,
    product: "Logitech multidispositivo K380",
    detail:
      "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
    price: "$8.000",
    stock: 17,
    category: "Perifericos",
    url: "https://logitechar.vteximg.com.br/arquivos/ids/157165-450-450/920-007563-3.png?v=637064269799300000",
  },
  {
    id: 16,
    product: "Logitech Inalambrico M280",
    detail:
      "viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",
    price: "$2.000",
    stock: 12,
    category: "Perifericos",
    url: "https://logitechar.vteximg.com.br/arquivos/ids/156502-450-450/910-004284_1.png?v=636973474471400000",
  },
  {
    id: 17,
    product: "Logitech bluetooth M535",
    detail:
      "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
    price: "$3.500",
    stock: 14,
    category: "Perifericos",
    url: "https://logitechar.vteximg.com.br/arquivos/ids/156511-450-450/910-004529_1.png?v=636973474654600000",
  },
  {
    id: 18,
    product: "Sate A-GC 8710 Negro Rgb",
    detail:
      "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
    price: "$50.000",
    stock: 10,
    category: "Mobiliario",
    url: "https://mexx-img-2019.s3.amazonaws.com/40915_1.jpeg",
  },
  {
    id: 19,
    product: "Trust GXT 708",
    detail:
      "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
    price: "$60.000",
    stock: 18,
    category: "Mobiliario",
    url: "https://www.atajo.com.ar/thumb/0000000000GXT70808903GXT708-Silla-Gamer-Trust-GXT-Negro-01_800x800.jpg",
  },
  {
    id: 20,
    product: "Mesa MGD RGB",
    detail:
      "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo",
    price: "$120.000",
    stock: 10,
    category: "Mobiliario",
    url: "https://es.marsgaming.eu/uploads/_thumnails/mgdrgb-detail_960x480.png",
  },
];

export default products;
