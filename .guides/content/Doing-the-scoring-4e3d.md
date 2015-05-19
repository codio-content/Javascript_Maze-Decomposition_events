Our next task is to calculate the score and update it. the way we will do this is to use our simple formula

$$
score = \dfrac{energy \times 5}{steps}
$$

In javascript this is written as `energy * 5 / steps`.

|||challenge
Update the `stepTaken()` event handler on the left so it calculates and displays the score.

To do this, you should do the following

1. Perform the calculation, assigning the calculation to the `score` variable.
1. Display the score using `updateScore()` passing in the `score` as an argument inside the function brackets.


{Check It!!|custom}(test-display-1)

|||