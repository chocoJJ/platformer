namespace SpriteKind {
    export const door = SpriteKind.create()
    export const floor = SpriteKind.create()
}
function chooseLevel () {
    if (level == 0) {
        scene.setTileMap(list[level])
        createlevel()
    } else if (level == 1) {
        deleteOldLevel()
        scene.setTileMap(list[level])
        createlevel()
    } else {
        deleteOldLevel()
        scene.setTileMap(list[level])
        createlevel()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -190
    }
})
function deleteOldLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
}
function createlevel () {
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        portal = sprites.create(img`
            . 1 1 6 1 8 8 8 8 8 8 . . . . . 
            . 1 6 8 9 9 9 9 9 8 8 8 8 1 6 . 
            1 . 8 8 6 6 . 1 1 9 9 8 8 1 1 . 
            . . 8 6 6 . . . . 6 6 9 8 1 1 . 
            . 1 1 6 . . . . . . 6 9 8 1 . 1 
            . 1 9 6 1 1 . . . 1 1 6 . 1 . . 
            1 1 6 . 1 . . . . . 1 6 6 1 . 1 
            8 9 6 1 . . . . . . . 6 6 1 . . 
            8 9 6 1 1 . . . . . . 6 . 8 . . 
            8 8 6 6 1 . . . . . . 6 8 8 6 . 
            . 8 9 6 1 1 . . . . 6 6 9 8 6 1 
            . 1 1 6 . 1 . . 1 1 6 9 8 8 6 . 
            6 8 1 6 . . . . 1 . 6 1 1 1 6 1 
            6 6 1 1 8 1 1 1 . . 6 1 8 . 1 1 
            . 1 6 1 9 6 6 6 6 6 9 8 . 6 1 . 
            . . 6 1 8 9 8 1 1 1 1 1 . 1 1 . 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
    for (let value of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        portal = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        portal = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        level += 1
        mySprite.setPosition(10, 100)
    }
})
let portal: Sprite = null
let list: Image[] = []
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
mySprite.setPosition(37, 67)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
level = 0
list = [img`
    ..........................
    .....................888..
    .....................888..
    .....................888..
    ...............55..555555.
    .55.......................
    ........55555.............
    ..........................
    ............5555555.......
    .5555555..................
    ....................555555
    ..........................
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    ..........................
    .....................88...
    .....................88...
    ...................55555..
    ...555..........5555..5555
    ..55.........55......55..5
    55555....55555......5.5..5
    ....5..5..........555...22
    ....55.........55.......22
    .....5..55555555..5..22222
    .........5....55..22222222
    .....222......55..22222222
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    ........5.................
    ........5.................
    .......55..........88...55
    .......5...........88.555.
    ......55.........555555...
    .......5.........5........
    ...55555........55........
    .....55.......5...........
    .55.5..5...5...........222
    55......5....555.5.....222
    ........555555...55..22222
    2222222.............222222
    22222222222222222222222222
    22222222222222222222222222
    `]
chooseLevel()
