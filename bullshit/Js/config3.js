function enterLvl3() {

    var backgroundimg = new Image();
    backgroundimg.src = "./img/kordinat.png";



    //Setting the inventory of the player to 0
    var playerGameInventoryDiamondCount = 0;
    var playerGameInventoryCarrotCount = 0;


    // Displaying the stats in upper part of the screen
    var gameStats = document.createElement("div");
    gameStats.id = "gameStats";
    gameStats.style.height = "10%";
    gameStats.style.backgroundColor = "orange";
    gameStats.style.display = "flex";
    gameStats.style.flexDirection = "row";
    gameStats.style.flexWrap = "wrap";
    gameStats.style.justifyContent = "space-around";
    var DiamondCount = document.createElement("p");
    DiamondCount.className = "stats";
    var carrotCount = document.createElement("p");
    carrotCount.className = "stats";
    var message = document.createElement("p");
    message.className = "stats";


    //Appending all the stats
    gameStats.appendChild(DiamondCount);
    gameStats.appendChild(message);
    gameStats.appendChild(carrotCount);
    contentEl.appendChild(gameStats);



    //Setings for the player
    var playerName;
    var playerXPosition = 120;
    var playerYPosition = 90;
    var playerWidth = 40;
    var playerHeight = 79;
    var playerYspd = 80;
    var playerGravity = 10;
    var playerWeight = 0.05;
    var playerHp = 3;
    var playerDamage = 5;

    //<

    //Making the player
    var player = new entity("img/mainplayertest.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Block information
    var BlockSet = [
        { antallBlokker: 2, xPos: 100, yPos: 170, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        { antallBlokker: 0, xPos: 400, yPos: 520, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        { antallBlokker: 0, xPos: 2700, yPos: 520, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        { antallBlokker: 0, xPos: 0, yPos: 520, damage: 0, jump: 8.5, speed: 0, name: "jump" },

        { antallBlokker: 1, xPos: 180, yPos: 500, damage: 0, jump: 8.5, speed: 0, name: "jump" },
        { antallBlokker: 1, xPos: 550, yPos: 450, damage: 1, jump: 0, speed: 0, name: "skade" },

        { antallBlokker: 0, xPos: 1100, yPos: 320, damage: 0, jump: 0, speed: 0, name: "i luften" },
        { antallBlokker: 0, xPos: 1300, yPos: 200, damage: 0, jump: 0, speed: 0, name: "i luften" },
        { antallBlokker: 0, xPos: 2900, yPos: 320, damage: 0, jump: 0, speed: 0, name: "i luften" },

        { antallBlokker: 0, xPos: 3700, yPos: 446, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        { antallBlokker: 0, xPos: 3800, yPos: 372, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        { antallBlokker: 0, xPos: 3900, yPos: 298, damage: 0, jump: 0, speed: 0, name: "vanlig" },
        {}

        //{ antallBlokker: 2, xPos:yPos: 150, damage: 1, jump: 0, speed: 0 }
    ]
    /*

class blocks {
    constructor(img, xPosition, yPosition, width, height) {
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.damage = 0;
        this.speed = 0;
        this.jump = 0;
    }
    */


    //The vlock array which hold all the values of the blocks in game and which fetch information from the BlockSet
    var block = new Array();

    //Creating the ground using the block array and the BlockSet array/objects
    for (var i = 0; i < BlockSet.length; i++) {
        block[i] = new Array();
        for (var j = 0; j < BlockSet[i].antallBlokker; j++) {

            if (BlockSet[i].damage != 0) {
                block[i][j] = new blocks("img/DamageBlock.png", BlockSet[i].xPos + (j * 170), BlockSet[i].yPos, 170, 101);
                block[i][j].damage = BlockSet[i].damage;
            } else if (BlockSet[i].speed != 0) {
                block[i][j] = new blocks("img/vinterblock.png", BlockSet[i].xPos + (j * 170), BlockSet[i].yPos, 170, 43);
                block[i][j].speed = BlockSet[i].speed;
            } else if (BlockSet[i].jump != 0) {
                block[i][j] = new blocks("img/jumpblock.png", BlockSet[i].xPos + (j * 170), BlockSet[i].yPos, 170, 130);
                block[i][j].jump = BlockSet[i].jump;
            }
            else if (BlockSet[i].name === "i luften") {
                block[i][j] = new blocks("img/platformtre.png", BlockSet[i].xPos + (j * 80), BlockSet[i].yPos, 100, 24);
                block[i][j].speed = BlockSet[i].speed;
            }
            else {
                block[i][j] = new blocks("img/vinterblock.png", BlockSet[i].xPos + (j * 170), BlockSet[i].yPos, 170, 43);

            }
        }
    }


    //Doing the same with the Diamonds as the ground
    var DiamondSet = [
        { antallDiamonds: 2, xPos: 520, yPos: 160 },
        { antallDiamonds: 1, xPos: 600, yPos: 350 },
        { antallDiamonds: 2, xPos: 3500, yPos: 200 }
    ]


    var playerDiamonds = new Array();


    for (var i = 0; i < DiamondSet.length; i++) {
        playerDiamonds[i] = new Array();

        for (var j = 0; j < DiamondSet[i].antallDiamonds; j++) {
            playerDiamonds[i][j] = new collectable("img/diamant.png", DiamondSet[i].xPos + (j * 400), DiamondSet[i].yPos, 30, 26);
        }
    }

    //
    //And the carrots
    var CarrotSet = [
        { xPos: 1500, yPos: 145 },
        { xPos: 3300, yPos: 145 },
        { xPos: 4300, yPos: 145 },
        { xPos: 5500, yPos: 120 },

        //{ xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();


    for (var i = 0; i < CarrotSet.length; i++) {
        carrots[i] = new collectable("img/treasure.png", CarrotSet[i].xPos, CarrotSet[i].yPos, 50, 80)
    }
    //

    var playerXPosition = canvasEl.width / 5;
    var playerYPosition = canvasEl.height / 2 + 20
    //And the enemies, with a more complex system
    var EnemySet = [
        // 3900, yPos: 298,
        { antallEnemies: 0, xPos: 3400, yPos: 510, yspd: 0.5, xspd: 4, width: 50, height: 74, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "zombie" },
        { antallEnemies: 0, xPos: 2800, yPos: 510, yspd: 0.5, xspd: 2, width: 50, height: 74, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "zombie" },

        { antallEnemies: 0, xPos: 2150, yPos: 510, yspd: 0.5, xspd: 1, width: 50, height: 74, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "zombie" },

        { antallEnemies: 0, xPos: 5500, yPos: 90, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5400, yPos: 190, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5300, yPos: 280, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5200, yPos: 370, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5100, yPos: 480, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },


        { antallEnemies: 1, xPos: 100, yPos: 4, yspd: 0.5, xspd: 2, width: 40, height: 52, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 400, name: "sinuscurve fe" },
        { antallEnemies: 0, xPos: 500, yPos: 300, yspd: 0.5, xspd: 2, width: 40, height: 52, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "rigedsinuscurve fe" },
        { antallEnemies: 0, xPos: 100, yPos: 100, yspd: 1.5, xspd: 2, width: 40, height: 52, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 300, name: "sinuscurve Yretning fe" },

        { antallEnemies: 0, xPos: 5600, yPos: 90, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5700, yPos: 190, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5800, yPos: 280, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 5900, yPos: 370, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 6000, yPos: 480, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },


        { antallEnemies: 0, xPos: 1350, yPos: 230, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },

        { antallEnemies: 0, xPos: 3300, yPos: 230, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },
        { antallEnemies: 0, xPos: 3300, yPos: 80, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },

        { antallEnemies: 0, xPos: 3200, yPos: 200, yspd: 3, xspd: 0.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 60, name: "feY" },
        { antallEnemies: 0, xPos: 3400, yPos: 200, yspd: 3, xspd: 0.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 60, name: "feY" },

        { antallEnemies: 0, xPos: 4000, yPos: 310, yspd: 3, xspd: 0.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 60, name: "feY" },
        { antallEnemies: 0, xPos: 4300, yPos: 160, yspd: 0.5, xspd: 2, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100, name: "feX" },


        { antallEnemies: 0, xPos: 30, yPos: 100, yspd: 2.5, xspd: 0.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 60, name: "feY" },
        { antallEnemies: 0, xPos: 1750, yPos: 100, yspd: 3, xspd: 0.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 60, name: "feY" },

        { antallEnemies: 0, xPos: 700, yPos: 510, yspd: 0.5, xspd: 1.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 150, name: "normal" },
        { antallEnemies: 0, xPos: 1000, yPos: 510, yspd: 0.5, xspd: 1.5, width: 40, height: 59, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 150, name: "normal" },
    ]

    var differanse = new Array();
    //Enemy arrays
    var enemies = new Array();
    //Enemies start position array
    var enemyStartXValue = new Array();
    //If they are going left or right
    var startSpeed = new Array();

    //Creating the enemies and their startxPosition and their startSpeed
    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();
        differanse[i] = new Array();
       

        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            if (EnemySet[i].name === "normal") {
                enemies[i][j] = new entity("img/zombikanin.png", EnemySet[i].xPos + (j * 100), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            } else if (EnemySet[i].name === "sinuscurve Yretning fe") {

                enemies[i][j] = new entity("img/surrefe.png", EnemySet[i].xPos + (j * 130), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            } else if (EnemySet[i].name === "rigedsinuscurve fe") {

                enemies[i][j] = new entity("img/surrefe.png", EnemySet[i].xPos + (j * 130), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);
            }

            else if (EnemySet[i].name === "simplepolynomcurve fe") {

                enemies[i][j] = new entity("img/surrefe.png", EnemySet[i].xPos + (j * 130), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);
            }
            else if (EnemySet[i].name === "sinuscurve fe") {

                enemies[i][j] = new entity("img/surrefe.png", EnemySet[i].xPos + (j * 130), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);
            }
            else if (EnemySet[i].name === "feY") {
                enemies[i][j] = new entity("img/Feen 3.png", EnemySet[i].xPos + (j * 130), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);
            }
            else if (EnemySet[i].name === "feX") {
                enemies[i][j] = new entity("img/Feen 1.png", EnemySet[i].xPos + (j * 150), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            } else {
                enemies[i][j] = new entity("img/reggie.png", EnemySet[i].xPos + (j * 70), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            }

            console.log("test1 -enemy sin fart er :" + EnemySet[i].xSpd)
            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition;

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range;

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;
            enemies[i][j].YscopeDown = enemies[i][j].yPosition + EnemySet[i].range;

            //And a value of the max limit to the left
         //   console.log("enemystartvalueX[i]:" + enemyStartXValue[i][j], "EnemySet[i].range:" + EnemySet[i].range, "enemies[i][j].scopeleft:" + enemyStartXValue[i][j] - EnemySet[i].range);
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            enemies[i][j].YscopeUp = enemies[i][j].yPosition - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j];

            //For zombie classen
            enemies[i][j].zomRight = enemies[i][j].xPosition + EnemySet[i].range;

            enemies[i][j].zomLeft = enemies[i][j].xPosition - EnemySet[i].range;


        }

    }



    // Adding movement functions to fairlyesi mj eje


    ////funksjoner:
    //94.98sin(0.06 (0.2)x - 2.12) + 79.83

    function sinuscurve(x, yPositionFactor) {
        var finnY = 94.98 * Math.sin(0.06 * (0.2) * x - 2.12) + (yPositionFactor * 79.83);

        return finnY
    };

    function simplepolynomcurve(x) {
        // var finnY = 4.989417989418*(10^(-12))*x^6 - 8.834126984127*(10^(-9))*x^5 + 0.000005791005291005*x^4 - 0.001705119047619*x^3 + 0.2122100529101*x^2 - 7.127301587302*x;
        var finnY = 0.000002323121555078 * x ^ 2 - 0.005638104001389 * x ^ 2 + 3.542895803013 * x - 154.129417675;
        return finnY;
    }

    function rigedsinuscurve(x) {
        var finnY = 125 * Math.sin(0.01 * x - 1.57) ^ 3 + 125;
        return finnY;
    };

    function sinuscurveY(x) {
        var finnX = 86.21948171396 * Math.sin(0.01579140290039 * x - 1.586435013348) + 100.4229204204;
        return finnX;
    };




    // Placing the objective
    var finnishLine = new collectable("img/målflagg.png", 6800, 417.5, 100, 115);



    //If continue game is true, the loop should continue
    var ContiniueGame = true;

    //Creating the bullet logic for the player
    var bulletList = new Array();
    var bulletInventory = 0;
    var bulletFired = false;
    var coolDown = false;


    function iscoolingDown() {
        coolDown = false;
    }

    //

    //Cooldown for loosing life
    var isHurting = false;
    var damageCooldown = false;

    function LifeLossCoolDown() {
        damageCooldown = false;
    }
    //


    mainLoop();
    function mainLoop() {
        if (player.CurrentHp == "2") {
            contentEl.style.backgroundColor = "hsla(0, 100%, 50%, 0.025)";
        } else if (player.CurrentHp == "1") {
            contentEl.style.backgroundColor = "hsla(0, 100%, 50%, 0.05)";
        }



        var gravity = 0.09;
        // Stats update

        DiamondCount.innerHTML = playerGameInventoryDiamondCount + "<br> Diamonds ";
        carrotCount.innerHTML = playerGameInventoryCarrotCount + "<br> Carrots";
        message.innerHTML = "You have " + bulletInventory + " bullets";


        //

        //Player logic and saying that the finnish line should be relative to the players xPosition
        player.yPosition += player.ySpd;
        finnishLine.xPosition += -player.xSpd;

        //Player moving logic
        if (left) {
            player.xSpd = -9;
        }
        if (right) {
            player.xSpd = 9;
        }

        if (!left && !right) {
            player.xSpd = 0;
        }

        //Player jumping logic
        if (jump) {
            player.ySpd = -5;
            jump = false;
        }

        if (hasRealised && !onGround) {
            player.ySpd += gravity;
        }

        if (player.ySpd < player.gravity) {
            player.ySpd += player.weight;
        }


        // Health Logic if player is not on the canvas
        if (player.yPosition > canvasEl.height) {
            player.CurrentHp = 0;
        }


        // Wapon logic and inventory bullet count
        var gun = new entity("img/gun (2).png", player.xPosition + 12.5, player.yPosition + 32.5, 0, 0, "left", 45, 25);

        if (playerGameInventoryDiamondCount == 1) {
            bulletInventory = 100;
            playerGameInventoryDiamondCount = 0;
        }

        //REMEMBER TO IMPLEMENT BULLET COUNT LOGIC
        //where the bullets are created and determed which way it should travel
        //And also setting the cooldown
        if (isShooting && !coolDown && bulletInventory > 0) {

            bulletFired = true;
            coolDown = true;
            bulletInventory--;
            if (left) {
                //   gun.xPosition - 20 xPosition + 20
                bulletList.push(new bullets("img/bulletleft.png", player.xPosition - 12.5, player.yPosition + 32.5, 10, 5, "Left", 7, 7))
            } else {
                bulletList.push(new bullets("img/bulletright.png", player.xPosition + 12.5, player.yPosition + 32.5, 10, 5, "Right", 7, 7))
            }

            if (coolDown) {
                setTimeout(iscoolingDown, 1000);
            }
        }

        // bullet: constructor(img,xPosition, yPosition, xSpd, damage, direction, width, height) {

        //Clearing the screen

        //Keeping track of the bullets

        for (var i = 0; i < bulletList.length; i++) {

            if (bulletList[i].direction == "Left") {

                bulletList[i].xPosition += -player.xSpd - bulletList[i].xSpd;

            } else if (bulletList[i].direction == "Right") {


                bulletList[i].xPosition += -player.xSpd + bulletList[i].xSpd;

            }

        }














        //Keeping track of the ground
        for (var i = 0; i < block.length; i++) {


            for (var j = 0; j < block[i].length; j++) {
                block[i][j].xPosition += -player.xSpd;
                //for toppen
                if (player.collitionObject(block[i][j]) && player.yPosition + player.height < block[i][j].yPosition + player.ySpd) {
                    if (block[i][j].damage != 0) {

                        if (!damageCooldown) {
                            new Audio('audio/ping.mp3').play();
                            //player.CurrentHp--;
                            damageCooldown = true;


                            if (damageCooldown) {
                                setTimeout(LifeLossCoolDown, 1000);
                            }
                        }

                        player.ySpd = 0;
                        onGround = true;
                        hasRealised = false;
                        player.yPosition = block[i][j].yPosition - player.height;


                    }
                    else if (block[i][j].jump != 0) {

                        player.ySpd = -block[i][j].jump;
                        onGround = false;
                        hasRealised = true;




                    } else {
                        player.ySpd = 0;
                        onGround = true;
                        hasRealised = false;
                        player.yPosition = block[i][j].yPosition - player.height;

                    }

                }

            }

        }



        //Keeping track of the carrots
        for (var i = 0; i < carrots.length; i++) {

            carrots[i].xPosition += -player.xSpd;

            if (player.collitionObject(carrots[i])) {
                var thisCarrot = carrots.indexOf(carrots[i]);
                carrots.splice(thisCarrot, 1);

                playerGameInventoryCarrotCount++;

            }

        }



        //Keeping track of the Diamonds
        for (var i = 0; i < playerDiamonds.length; i++) {

            for (var j = 0; j < playerDiamonds[i].length; j++) {
                playerDiamonds[i][j].xPosition += -player.xSpd;

                if (player.collitionObject(playerDiamonds[i][j])) {
                    var ThisDiamond = playerDiamonds[i].indexOf(playerDiamonds[i][j]);
                    playerDiamonds[i].splice(ThisDiamond, 1);

                    playerGameInventoryDiamondCount++;

                }
            }
        }



        //Keepin track of the enemies
        for (var i = 0; i < enemies.length; i++) {

            for (j = 0; j < enemies[i].length; j++) {


                if (EnemySet[i].name == "normal") {

                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += -player.xSpd + EnemySet[i].xspd;
                        enemies[i][j].yPosition += EnemySet[i].yspd;
                        enemies[i][j].startXposition += -EnemySet[i].xspd;
                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += -player.xSpd - EnemySet[i].xspd;

                        enemies[i][j].startXposition += EnemySet[i].xspd;
                    }

                    if (enemies[i][j].startXposition === enemies[i][j].scopeRight) {
                        startSpeed[i][j] = false;
                    } else if (enemies[i][j].startXposition === enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = true;
                    }


                } else if (EnemySet[i].name === "sinuscurve Yretning fe") {




                    if (startSpeed[i][j] == false) {//NED

                        enemies[i][j].yPosition += EnemySet[i].yspd - player.xSpd;
                        enemies[i][j].xPosition = sinuscurveY(enemies[i][j].yPosition);
                        enemies[i][j].startXposition += -EnemySet[i].xspd;
                    }

                    if (startSpeed[i][j] == true) {//OPP
                        enemies[i][j].yPosition += -EnemySet[i].yspd - player.xSpd;
                        enemies[i][j].xPosition = sinuscurveY(enemies[i][j].yPosition);
                        enemies[i][j].startXposition += EnemySet[i].xspd;
                    }

                    if (enemies[i][j].startXposition >= enemies[i][j].YscopeDown) {
                        startSpeed[i][j] = true;
                    } else if (enemies[i][j].startXposition <= enemies[i][j].YscopeUp) {
                        startSpeed[i][j] = false;
                    }


                } else if (EnemySet[i].name === "simplepolynomcurve fe") {

                    /* if (enemies[i][j].xPosition < enemies[i][j].scopeRight) {
                     enemies[i][j].xPosition += -player.xSpd + EnemySet[i].xspd;
                     enemies[i][j].yPosition = wierdsin(enemies[i][j].xPosition);
                     } else {
                         enemies[i][j].xPosition += -player.xSpd - EnemySet[i].xspd;
                         enemies[i][j].yPosition = wierdsin(enemies[i][j].xPosition);
                     }
                     */



                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = simplepolynomcurve(enemies[i][j].xPosition);
                        enemies[i][j].startXposition += player.xSpd;
                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += - EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = simplepolynomcurve(enemies[i][j].xPosition);
                        enemies[i][j].startXposition += player.xSpd;
                    }

                    if (enemies[i][j].xPosition >= enemies[i][j].scopeRight) {
                        startSpeed[i][j] = true;
                    } else if (enemies[i][j].xPosition <= enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = false;
                    }


                } else if (EnemySet[i].name === "rigedsinuscurve fe") {





                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = rigedsinuscurve(enemies[i][j].xPosition);
                        enemies[i][j].startXposition += EnemySet[i].xspd;

                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += - EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = rigedsinuscurve(enemies[i][j].xPosition);
                        enemies[i][j].startXposition += EnemySet[i].xspd;
                    }

                    if (enemies[i][j].startXposition >= enemies[i][j].scopeRight) {
                        startSpeed[i][j] = true;
                    } else if (enemies[i][j].startXposition <= enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = false;
                    }


                } else if (EnemySet[i].name === "sinuscurve fe") {
                  
                    if (left || right) {
                        EnemySet[i].xspd - 1;
                    
                    }
                    console.log(enemies[i][j].xPosition, enemies[i][j].yPosition);



                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = sinuscurve(enemies[i][j].xPosition, EnemySet[i].yPos);
                        enemies[i][j].startXposition += -EnemySet[i].xspd;

                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += - EnemySet[i].xspd - player.xSpd;
                        enemies[i][j].yPosition = sinuscurve(enemies[i][j].xPosition, EnemySet[i].yPos);
                        enemies[i][j].startXposition += EnemySet[i].xspd;
                    }

                    if (enemies[i][j].xPosition >= enemies[i][j].scopeRight) {
                        startSpeed[i][j] = true;
                    } else if (enemies[i][j].xPosition <= enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = false;
                    }
                    console.log("test 2- enemy sin fart er:" + EnemySet[i].xspd);

                } else if (EnemySet[i].name == "feX") {


                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += -player.xSpd + EnemySet[i].xspd;

                        enemies[i][j].startXposition += -EnemySet[i].xspd;
                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += -player.xSpd - EnemySet[i].xspd;

                        enemies[i][j].startXposition += EnemySet[i].xspd;
                    }

                    if (enemies[i][j].startXposition === enemies[i][j].scopeRight) {
                        startSpeed[i][j] = false;
                    } else if (enemies[i][j].startXposition === enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = true;
                    }


                } else if (EnemySet[i].name == "feY") {

                    if (startSpeed[i][j] == false) {
                        enemies[i][j].xPosition += -player.xSpd;
                        enemies[i][j].yPosition += EnemySet[i].yspd;
                        enemies[i][j].startXposition += -EnemySet[i].yspd;
                    }

                    if (startSpeed[i][j] == true) {
                        enemies[i][j].xPosition += -player.xSpd;
                        enemies[i][j].yPosition += -EnemySet[i].yspd;
                        enemies[i][j].startXposition += EnemySet[i].yspd;
                    }

                    if (enemies[i][j].startXposition === enemies[i][j].scopeRight) {
                        startSpeed[i][j] = false;
                    } else if (enemies[i][j].startXposition === enemies[i][j].scopeLeft) {
                        startSpeed[i][j] = true;
                    }

                } else if (EnemySet[i].name == "zombie") {
                    differanse[i][j] = player.xPosition - enemies[i][j].xPosition;

                    if (differanse[i][j] > 10 || differanse[i][j] <= -10) {
                        // console.log("følger ikke eter");

                        if (startSpeed[i][j] == false) {
                            enemies[i][j].zomRight += EnemySet[i].xspd
                            enemies[i][j].zomLeft += -EnemySet[i].xspd;

                            enemies[i][j].xPosition += -player.xSpd + EnemySet[i].xspd;
                            enemies[i][j].yPosition += EnemySet[i].yspd;
                            enemies[i][j].startXposition += -EnemySet[i].xspd;
                        }

                        if (startSpeed[i][j] == true) {
                            enemies[i][j].zomRight += -EnemySet[i].xspd
                            enemies[i][j].zomLeft += EnemySet[i].xspd;
                            enemies[i][j].xPosition += -player.xSpd - EnemySet[i].xspd;
                            enemies[i][j].yPosition += EnemySet[i].yspd;
                            enemies[i][j].startXposition += EnemySet[i].xspd;
                        }

                        if (enemies[i][j].startXposition === enemies[i][j].scopeRight) {
                            startSpeed[i][j] = false;
                        } else if (enemies[i][j].startXposition === enemies[i][j].scopeLeft) {
                            startSpeed[i][j] = true;
                        }
                    } else if (differanse[i][j] < 300 || differanse[i][j] > -300) {
                        //console.log("følger etter");

                        if (differanse[i][j] > 0) {
                            enemies[i][j].xPosition += -player.xSpd; + EnemySet[i].xspd;
                            EnemySet[i].xspd = -6.5;
                            enemies[i][j].yPosition += EnemySet[i].yspd;
                        } else if (differanse[i][j] < 0) {
                            enemies[i][j].xPosition += -player.xSpd; - EnemySet[i].xspd;
                            EnemySet[i].xspd = 6.5;
                            enemies[i][j].yPosition += EnemySet[i].yspd;
                        }




                    }

                }





                for (var k = 0; k < block.length; k++) {
                    for (var l = 0; l < block[k].length; l++) {
                        if (enemies[i][j].collitionObject(block[k][l]) && enemies[i][j].yPosition + enemies[i][j].height > block[k][l].yPosition /*+ enemies[i][j].ySpd*/) {
                            enemies[i][j].yPosition = block[k][l].yPosition - enemies[i][j].height;

                        }

                    }
                }



                if (player.collitionObject(enemies[i][j])) {

                    if (!damageCooldown) {
                        //player.CurrentHp--;
                        new Audio('audio/ping.mp3').play();
                        damageCooldown = true;

                        if (damageCooldown) {

                            setTimeout(LifeLossCoolDown, 1000);

                        }
                    }


                }

                for (var d = 0; d < bulletList.length; d++) {
                    if (enemies[i][j].collitionObject(bulletList[d])) {
                        var remmovebullet = bulletList.indexOf(bulletList[d]);
                        if (remmovebullet > -1) {
                            bulletList.splice(remmovebullet, 1);

                        }

                        var removeenemy = enemies[i].indexOf(enemies[i][j]);
                        if (removeenemy > -1) {
                            enemies[i].splice(removeenemy, 1);

                        }





                        //console.log("er du stolt, morder?");

                    }
                }

            }
        }


        /*
        RENDERING SECTION OF THE GAME 
         bulletList[i].width, bulletList[i].height
        */

        //Clearing the screen
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        //backgroundimage
        ctx.drawImage(backgroundimg, 0, 0, canvasEl.width, canvasEl.height);

        //rendering the bullets
        for (var i = 0; i < bulletList.length; i++) {
            ctx.fillRect(bulletList[i].xPosition, bulletList[i].yPosition, bulletList[i].width, bulletList[i].height);

        }


        //Rendering the Diamonds
        for (var i = 0; i < playerDiamonds.length; i++) {
            for (var j = 0; j < playerDiamonds[i].length; j++) {
                ctx.drawImage(playerDiamonds[i][j].sprite, playerDiamonds[i][j].xPosition, playerDiamonds[i][j].yPosition);

            }
        }

        //Rendering the enemies
        for (var i = 0; i < enemies.length; i++) {
            for (var j = 0; j < enemies[i].length; j++) {
                ctx.drawImage(enemies[i][j].sprite, enemies[i][j].xPosition, enemies[i][j].yPosition)
            }
        }
        //Rendering the ground
        for (var i = 0; i < block.length; i++) {
            for (var j = 0; j < block[i].length; j++) {
                ctx.drawImage(block[i][j].sprite, block[i][j].xPosition, block[i][j].yPosition)
            }
        }

        //Rendering the Carrots
        for (var i = 0; i < carrots.length; i++) {
            ctx.drawImage(carrots[i].sprite, carrots[i].xPosition, carrots[i].yPosition);
        }


        // DRAW GUN

        ctx.drawImage(gun.sprite, gun.xPosition, gun.yPosition);

        //Lastly rendering the player and the finnish line
        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);
        ctx.drawImage(finnishLine.sprite, finnishLine.xPosition, finnishLine.yPosition);


        //If the player collides with the finnishLine
        if (player.collitionObject(finnishLine)) {
            if (carrots.length != 0) {
                message.innerHTML = "You haven't collected all the carrots";
            } else {
                ContiniueGame = false;
                var obj = document.getElementById("gameStats");
                obj.parentNode.removeChild(obj);
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
                playerTotalCarrotCount += playerGameInventoryCarrotCount;
                var victoryButton = document.createElement("div");
                victoryButton.id = "nextWorld";
                victoryButton.style.width = "100%";
                victoryButton.style.height = "100%";
                victoryButton.style.backgroundImage = "url('img/GameComplete.png')";
                victoryButton.style.margin = "0 auto";
                victoryButton.addEventListener("click", nextWorld);
                contentEl.appendChild(victoryButton);


                function nextWorld() {
                    new Audio('audio/ping.mp3').play();

                    var obj1 = document.getElementById("nextWorld");
                    obj1.parentNode.removeChild(obj1);
                    lastLevel();
                }


            }
        }

        if (player.CurrentHp <= 0 || player.yPosition > canvasEl.height) {
            ContiniueGame = false;
            var obj = document.getElementById("gameStats");
            obj.parentNode.removeChild(obj);

            var restartButton = document.createElement("div");
            restartButton.id = "restart";
            restartButton.style.width = "100%";
            restartButton.style.height = "100%";
            restartButton.style.backgroundImage = "url('img/gameOverNew.png')";
            restartButton.style.margin = "0 auto";
            restartButton.addEventListener("click", restart);
            contentEl.appendChild(restartButton);

            function restart() {
                new Audio('audio/ping.mp3').play();
                contentEl.style.backgroundColor = "initial";

                var obj1 = document.getElementById("restart");

                obj1.parentNode.removeChild(obj1);
                enterLvl3();
            }

        }


        //Determening if the loop should go on
        if (ContiniueGame == true) {
            setTimeout(mainLoop, 1000 / 60)
        }

    }


}


