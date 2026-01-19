// Agata Brete Jõpiselg IT-23 17.01/2026

// Positiivne, negatiivne või null
let number = -5;

switch (true) {
  case (number > 0):
    console.log("Number on positiivne.");
    break;
  case (number < 0):
    console.log("Number on negatiivne.");
    break;
  default:
    console.log("Number on null.");
    break;
}


// Restoran – laudade broneering
let broneering = 5;

switch (broneering) {
  case 1:
  case 2:
    console.log("Valige laud kahele inimesele.");
    break;
  case 3:
  case 4:
    console.log("Valige laud neljale inimesele.");
    break;
  case 5:
  case 6:
    console.log("Valige laud kuuele inimesele.");
    break;
  default:
    console.log("Valige suur laud.");
    break;
}