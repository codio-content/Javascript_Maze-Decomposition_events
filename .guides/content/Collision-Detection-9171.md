We are now going to create our first **event handler**. This is the code that runs when an event is **fired**.

## The Collision Event
As soon as the player collides with any other object, our event handler will be called and our code will run.

In this simple case, we want to 

- Play a bump sound whenever the player collides with any other game entity.
- Display a message 'Bump' below the game.

Look at the code on the left. Please don't worry about the first line of code. 

```javascript
function collisionEvent() {

}
```

It looks nasty, but it will soon make perfect sense. If it bothers you, just ignore it and pretend it's not there. We'll formally cover this later.

Play the game and you can hear the sound and see the message.