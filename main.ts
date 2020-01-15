function hero () {
    Hero = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f d d d d 2 2 2 f . . . . . 
. c d f d d f d 2 2 f f . . . . 
. c d f d d f d 2 2 d d f . . . 
c d e e d d d d 2 2 b d c . . . 
c d d d d c d d 2 2 b d c . f f 
c c c c c d d d 2 2 f c . f 2 f 
. f d d d d d 2 2 f f . . f 2 f 
. . f f f f f 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f 2 f 
. . . f e f f 2 f 2 2 2 2 f f . 
. . . f e f f 2 f 2 2 2 2 f . . 
. . . f d b f d b f f 2 f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    Hero.setPosition(125, 90)
    controller.moveSprite(Hero, 100, 100)
}
function cloud () {
    Cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . d 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
. . . . . 1 . d d d 1 1 1 d d d d d d d 1 1 d d d . . . . . . . 
. . . . . d 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 d d 1 . . . . . 
. . . . 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d . . . . 
. . . 1 d d 1 1 1 1 1 1 1 d d d d d d 1 1 1 1 1 1 1 1 d 1 . . . 
. . 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 . . 
. d d d 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 . 
1 d 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 
1 d 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 d 1 1 
. 1 1 d d 1 1 1 d d 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 d 1 1 . 
. . 1 1 d d d d 1 1 d 1 1 1 d d 1 1 1 1 1 1 1 1 1 d d d d 1 . . 
. . . . . 1 1 1 1 1 d d 1 1 1 1 1 d 1 1 d d 1 1 1 d 1 . . . . . 
. . . . . . . . . . 1 1 1 1 d d d d d d 1 1 . . . . . . . . . . 
`, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . f f f . . . . 
. . . . . . . . f f f f f . . . 
. . . . . . . . f f f f f . . . 
. . . . . . . . 5 f f 5 5 . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . . . 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. f f 5 5 5 . . . . . . . . . . 
. f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 0, -100)
})
function raindrop () {
    rain = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . 8 8 8 . . . . . . . . 
. . . . 8 8 9 8 8 . . . . . . . 
. . . . 8 9 9 9 9 8 . . . . . . 
. . . 8 9 9 9 9 9 8 8 . . . . . 
. . . 8 9 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 9 9 9 9 8 . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . 8 8 8 9 9 8 8 . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Cloud, 50, 100)
    rain.y = 3
    rain.x += Math.randomRange(0, 10)
}
function ball () {
	
}
let rain: Sprite = null
let projectile: Sprite = null
let Cloud: Sprite = null
let Hero: Sprite = null
hero()
score()
cloud()
raindrop()
game.onUpdateInterval(2000, function () {
    cloud()
})
game.onUpdateInterval(200, function () {
    raindrop()
})
