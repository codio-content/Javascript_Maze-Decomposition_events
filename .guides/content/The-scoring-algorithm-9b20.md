Let's think about how we want to manage the scoring. 

Here are some basic ideas for simple scoring. This is illustrated by the flowchart on the left hand side.

## Player energy
The game score should be based on the amount of energy a user has.

- The player has a certain amount of starting energy, which you can decide. 
- You gain energy when it hits an energy store. 
- You lose energy when a monster hits with you.
- You gain energy when you hit a monster

## Monsters
A monster itself has energy. You can decide how much energy monsters have.

## Steps
Each time your player moves, a step counter is increased. The more steps you take to get to the exit, the lower your score should be.

## Score
There are many ways we could calculate the score. To start with, we will calculate it like this

$$
score = \dfrac{energy \times 5}{steps}
$$

