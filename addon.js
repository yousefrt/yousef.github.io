(function (ext) {
    var GRAVITY = 0.05; // The strength of gravity
    var bounced = false; // Whether the sprite has bounced
  
    ext._shutdown = function () {};
  
    ext._getStatus = function () {
      return {status: 2, msg: 'Ready'};
    };
  
    ext.applyGravity = function (sprite) {
      sprite.vy += GRAVITY; // Add gravity to the sprite's vertical velocity
      sprite.y += sprite.vy; // Update the sprite's position based on its velocity
  
      // If the sprite hits the ground, bounce it
      if (sprite.y >= 200 && !bounced) {
        sprite.y = 200;
        sprite.vy *= -0.6; // Reverse the velocity and reduce it to simulate bouncing
        bounced = true;
      }
  
      // Reset the bounced flag if the sprite is moving upwards again
      if (sprite.vy < 0) {
        bounced = false;
      }
    };
  
    var descriptor = {
      blocks: [
        [' ', 'apply gravity to %m.sprite', 'applyGravity', 'Sprite1']
      ],
      menus: {
        sprite: ['Sprite1', 'Sprite2', 'Sprite3']
      }
    };
  
    ScratchExtensions.register('Gravity Extension', descriptor, ext);
  })({});