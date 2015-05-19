We are now going to create our first **event handler**. This is the code that runs when an event is **fired**.

## The Collision Event
As soon as the player collides with any other object, our event handler will be called and our code will run.

In this case, we want to play a beep sound whenever the player collides with any other object.

Look at the code on the left. Please don't worry about the first line of code. 

```javascript
function collisionEvent() {

}
```

It looks nasty, but it will soon make perfect sense. If it bothers you, just ignore it and pretend it's not there. We'll formally cover this later.

The code we are interested in is what is inside this `collisionEvent()` function.

If you are interested, then all this is doing is creating our own function called `collisionEvent()`. Remember our other functions like, `addMonster()` and `showMessage()`? These are created like this too, but we created them for you. In this case, you are the one creating the function.





