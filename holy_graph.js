/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: holy_graph
@author: M & M Game studio mstracke and maweiss
@tags: [#awesome, #42, #bestgameintheworld]
@addedOn: 2025-03-30
*/
const player = "p"
const student = "s"
const track = "t"
const bg = "b"
const lvl = "l"
const blank = "w"
const letterA = "A"
const letterB = "B"
const letterC = "C"
const letterD = "D"
const letterE = "E"
const letterF = "F"
const letterG = "G"
const letterH = "H"
const letterI = "I"
const letterJ = "J"
const letterK = "K"
const letterL = "L"
const letterM = "M"
const letterN = "N"
const letterO = "O"
const letterP = "P"
const letterQ = "Q"
const letterR = "R"
const letterS = "S"
const letterT = "T"
const letterU = "U"
const letterV = "V"
const letterW = "W"
const letterX = "X"
const letterY = "Y"
const letterZ = "Z"
const blue_square = "p"


setLegend(
    [ player, bitmap`
3333333333333333
3333333333333333
9999999999999999
9999999999999999
6666666666666666
6666666666666666
4444444444444444
4444444444444444
7777777777777777
7777777777777777
5555555555555555
5555555555555555
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
................
................` ],
  [ student, bitmap`
3333333333333333
3333333333333333
9999999999999999
9999999999999999
6666666666666666
6666666666666666
4444444444444444
4444444444444444
7777777777777777
7777777777777777
5555555555555555
5555555555555555
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
................
................` ],
  [ blank, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222` ],
  [ bg, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
    [ lvl, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
    [ track, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
[letterA, bitmap`
0000000000000000
0000033333300000
0000033333300000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333333330000
0000333333330000
0000330000330000
0000330000330000
0000330000330000
0000000000000000`],
  [letterB, bitmap`
0000000000000000
0000333333000000
0000333333300000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333333300000
0000333333300000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333333300000
0000333333000000
0000000000000000`],
  [letterC, bitmap`
0000000000000000
0000033333330000
0000333333333000
0003330000033000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003330000033000
0000333333333000
0000033333330000
0000000000000000`],
  [letterD, bitmap`
0000000000000000
0000333330000000
0000333333300000
0000330003330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330003330000
0000333333300000
0000333330000000
0000000000000000`],
  [letterE, bitmap`
0000000000000000
0000333333330000
0000333333330000
0000330000000000
0000330000000000
0000330000000000
0000333333300000
0000333333300000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000333333330000
0000333333330000
0000000000000000`],
  [letterF, bitmap`
0000000000000000
0000333333330000
0000333333330000
0000330000000000
0000330000000000
0000330000000000
0000333333300000
0000333333300000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000000000000000`],
  [letterG, bitmap`
0000000000000000
0000033333330000
0000333333333000
0003330000033000
0003300000033000
0003300000000000
0003300000000000
0003300000000000
0003300003333000
0003300003333000
0003300000033000
0003330000033000
0003333000333000
0000333333333000
0000033333330000
0000000000000000`],
  [letterH, bitmap`
0000000000000000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333333330000
0000333333330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000000000000000`],
  [letterI, bitmap`
0000000000000000
0000033333300000
0000033333300000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000033333300000
0000033333300000
0000000000000000`],
  [letterJ, bitmap`
0000000000000000
0000033333300000
0000033333300000
0000000033000000
0000000033000000
0000000033000000
0000000033000000
0000000033000000
0000000033000000
0000033033000000
0000033033000000
0000033033000000
0000033333000000
0000033333000000
0000003330000000
0000000000000000`],
  [letterK, bitmap`
0000000000000000
0003300000033000
0003300000333000
0003300003330000
0003300033300000
0003300333000000
0003303330000000
0003333300000000
0003333300000000
0003303330000000
0003300333000000
0003300033300000
0003300003330000
0003300000333000
0003300000033000
0000000000000000`],
  [letterL, bitmap`
0000000000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000333333330000
0000333333330000
0000000000000000`],
  [letterM, bitmap`
0000000000000000
0003330000333000
0003333003333000
0003333333333000
0003303333033000
0003300330033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000000000000000`],
  [letterN, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003330000033000
0003333000033000
0003333300033000
0003303330033000
0003300333033000
0003300033333000
0003300003333000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000000000000000`],
  [letterO, bitmap`
0000000000000000
0000033333300000
0000333333330000
0003330000333000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003330000333000
0000333333330000
0000033333300000
0000000000000000`],
  [letterP, bitmap`
0000000000000000
0000333333300000
0000333333330000
0000330003330000
0000330000330000
0000330000330000
0000330003330000
0000333333330000
0000333333300000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000330000000000
0000000000000000`],
  [letterQ, bitmap`
0000000000000000
0000033333300000
0000333333330000
0000333003330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333003330000
0000333333330000
0000033333300000
0000000003330000
0000000000330000
0000000000000000`],
  [letterR, bitmap`
0000000000000000
0000333333300000
0000333333330000
0000330000330000
0000330000330000
0000330000330000
0000330000330000
0000333333330000
0000333333300000
0000333300000000
0000333330000000
0000330333000000
0000330033300000
0000330003330000
0000330000330000
0000000000000000`],
  [letterS, bitmap`
0000000000000000
0000333333330000
0003333333333000
0003300000033000
0003300000033000
0003300000000000
0003300000000000
0003333333330000
0000333333333000
0000000000033000
0000000000033000
0003300000033000
0003300000033000
0003333333333000
0000333333330000
0000000000000000`],
  [letterT, bitmap`
0000000000000000
0000333333330000
0000333333330000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000000000000`],
  [letterU, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003330000333000
0000333333330000
0000333333330000
0000000000000000`],
  [letterV, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003330000333000
0000333003330000
0000033333300000
0000003333000000
0000000000000000`],
  [letterW, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300330033000
0003300330033000
0003300330033000
0003300330033000
0003300330033000
0003333333333000
0000333333330000
0000033003300000
0000000000000000`],
  [letterX, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003330000333000
0000333003330000
0000033333300000
0000003333000000
0000033333300000
0000333003330000
0003330000333000
0003300000033000
0003300000033000
0003300000033000
0000000000000000`],
  [letterY, bitmap`
0000000000000000
0003300000033000
0003300000033000
0003330000333000
0000333003330000
0000033333300000
0000003333000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000330000000
0000000000000000`],
  [letterZ, bitmap`
0000000000000000
0003333333333000
0003333333333000
0000000000033000
0000000000333000
0000000003330000
0000000033300000
0000000333000000
0000003330000000
0000033300000000
0000333000000000
0003330000000000
0003300000000000
0003333333333000
0003333333333000
0000000000000000`],
  [blue_square, bitmap`
77777777777777777
77777777777777777
77777777777777777
77777777777777777
77777777777777777
77777222222277777
77777222222277777
77777222722277777
77777227772277777
77777222722277777
77777222222277777
77777222222277777
77777777777777777
77777777777777777
77777777777777777
77777777777777777`],
);

setSolids([])

/*
Level 0 = Welcome & help screen
Level 2 = Game screen
Level 3 = Game
Level 4 = Blackhole
*/

let level = 0
const levels = [
  map`
bbbbbbbbbbbbbbbbbbbbbbbb`, 
    map`
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbttttttttbbbbbbbbbbbbbbbb
bbbbbbbbbbbtltttbbbbbbtttltbbbbbbbbbbbb
bbbbbbbbbtttbbbbbttttbbbbbtttbbbbbbbbbb
bbbbbbbtttbbbttttlbbtttttbbbtttbbbbbbbb
bbbbbbttbbbtttbbbbbbbbbbtttbbbttbbbbbbb
bbbbbbtbbttlbbbtlttttttbbbtttbbtbbbbbbb
bbbbbttbttbbbtttbbbbbbtttbbbltbttbbbbbb
bbbbbtbbtbbtttbbbttttbbbtttbbtbbtbbbbbb
bbbbttbttbttbbbttlbbtttbbbttbttbttbbbbb
bbbbtbbtbbtbbtttbbbbbbtttbblbbtbbtbbbbb
bbbttbttbttbbtbbbbttbbbbtbbttbttbttbbbb
bbbtbblbbtbbttbbttttttbbttbbtbbtbbtbbbb
bbbtbttbttbbtbbblbbbbtbbbtbbttbttbtbbbb
bbttbtbbtbbttbbttbbbbttbbttbbtbbtbttbbb
bbltbtbttbbtbbbtbbttbblbbbtbbttbtbtlbbb
bbttbtbttbbtbbbtbbltbbtbbbtbbttbtbttbbb
bbttbtbbtbbttbbttbbbbttbbttbbtbbtbttbbb
bbbtbttbttbbtlbbtbbbbtbbblbbttbttbtbbbb
bbbtbbtbbtbbttbbttttttbbttbbtbbtbbtbbbb
bbbttbttbttbbtbbbbtlbbbbtbbttbtlbttbbbb
bbbbtbbtbblbbtttbbbbbbtttbbtbbtbbtbbbbb
bbbbttbttbttbbbtttbbtttbbbttbttbttbbbbb
bbbbbtbbtbbtttbbbttttbbbttlbbtbbtbbbbbb
bbbbbttbttbbbtttbbbbbbtttbbbttbttbbbbbb
bbbbbbtbblttbbbttttttttbbbtttbbtbbbbbbb
bbbbbbttbbbtttbbbbbbbbbbttlbbbttbbbbbbb
bbbbbbbtttbbbtttttbbtttttbbbtttbbbbbbbb
bbbbbbbbbtttbbbbbttttbbbbbtttbbbbbbbbbb
bbbbbbbbbbbtttttbbbbbbtttttbbbbbbbbbbbb
bbbbbbbbbbbbbbbttttltttbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`, 
  map`
bbbbbbbbbbbbbbbb
bbYOUbVEbBEENbbb
bbbbbbbbbbbbbbbb
bbABSORBEDbBYbbb
bbbbbbbbbbbbbbbb
bTHEbBLACKbHOLEb
bbbbbbbbbbbbbbbb`, 
]

let isMuted = false; // Variable to track if any melody is muted

onInput("k", () => {
  if (isMuted === false) {
    isMuted = true; // Set the isMuted flag to true
  }
})
addText(              "Welcome to the Holy", { y: 3, color: color`7` });
addText(              "Graph! Try your best", { y: 5, color: color`7` });
addText(              "to finish the core!", { y: 7, color: color`7` });
addText(              "Press \"l\" to start", { y: 11, color: color`7` });
addText(              "Press \"i\" for help", { y: 13, color: color`7` });

onInput("i", () => {
    clearText();
    addText(              "Collect all the ", { y: 1, color: color`7` });
    addText(              "projects from the", { y: 3, color: color`7` });
    addText(              "current circle", { y: 5, color: color`7` });
    addText(              "before", { y: 7, color: color`7` });
    addText(              "you get blackholed!", { y: 9, color: color`7` });
    addText(              "Press \"k\" to mute", { y: 12, color: color`7` });
    // addText(              "mute music \\ ", { y: 13, color: color`7` });
    addText(              "Press \"l\" to start", { y: 14, color: color`7` });
})

let start_game = false;

onInput("l", () => {
  if (start_game === false) {
    start_game = true;
    level = 1
    clearText();
    setMap(levels[level])
    addSprite(19, 15, student);
  }
})

setBackground("t")
setSolids([ student, bg ]);
setPushables({
  [student]: [lvl]
});

onInput("w", () => {
  getFirst(student).y -= 1;
});

onInput("a", () => {
  getFirst(student).x -= 1;
});

onInput("s", () => {
  getFirst(student).y += 1; 
});

onInput("d", () => {
  getFirst(student).x += 1;
});

let all_collected = 0
let position_x = 0
let position_y = 0
let daysLeft = 100; 
const timerInterval = setInterval(() => {
  if (level === 1 && all_collected < 23) {
    daysLeft -= 1;
    clearText();
    addText(`Days Left: ${daysLeft+1}`, { x: 3, y: 1, color: color`3` })
  }
  if (daysLeft < 0 && level < 2) {
    level = 2;
    setMap(levels[level]);
  }
}, 1000);

setMap(levels[level])
setPushables({[ student ]: []})

afterInput(() => {

  if (start_game === true) {
  const playerSprite = getFirst(student)
  const playerX = playerSprite.x
  const playerY = playerSprite.y
  const touchedproject = getTile(playerX, playerY).some(sprite => sprite.type === lvl)
  if (touchedproject) {
    all_collected += 1;
    position_x = getFirst(student).x;
    position_y = getFirst(student).y;
    clearTile(position_x, position_y);
    addSprite(position_x, position_y, "s");
    addSprite(position_x, position_y, "p");
    if (all_collected === 1) {
        // getFirst(student).x -= 3;
      setMap(levels[level])
      addSprite(15, 15, student);
      }
    if (all_collected === 4) {
      setMap(levels[level])
      addSprite(11, 15, student);
      }
    if (all_collected === 7) {
      setMap(levels[level])
      addSprite(8, 15, student);
      }
    if (all_collected === 11) {
      setMap(levels[level])
      addSprite(5, 15, student);
      }
    if (all_collected === 18) {
      setMap(levels[level])
      addSprite(3, 15, student);
      }
    // console.log("Player Position - X:", getFirst(student).x, "Y:", getFirst(student).y);
      if (all_collected === 23) {
        level = 0;
        setMap(levels[level])
        addText(`Brilliant, \nwhat a fun,\nyou passed\nthe core\nyou're an expert!`, { x: 1, y: 6, color: color`4` }) 
      }
      else {
        addText(`projects done: ${all_collected}`, { x: 3, y: 14, color: color`2` })
      }
    }
  }
})
