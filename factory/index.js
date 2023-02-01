const gadgetFactory = require( "./gadgetFactory" );

const macbookPro = gadgetFactory.createGadget( "Laptop", {
  ram: 8,
  ssd: 256,
  name: "Bab's MacBook Pro"
} );

const iPad = gadgetFactory.createGadget( "Tablet", {
  ram: 4,
  hdd: 128,
  network: "4G",
  name: "Bab's iPad"
} );

// add console.log here
console.log( macbookPro );
console.log( iPad );