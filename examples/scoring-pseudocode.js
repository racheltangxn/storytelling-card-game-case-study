// Illustrative pseudocode only; not a copy of the private implementation.
export function scoreRound({ storytellerCard, guesses, storytellerId }) {
  const correct = guesses.filter((guess) => guess.cardId === storytellerCard).length;
  const allCorrect = correct === guesses.length;
  const noneCorrect = correct === 0;

  if (allCorrect || noneCorrect) {
    return { storyteller: 0, guessers: 'base' };
  }

  return { storyteller: 'base', guessers: 'base', storytellerId };
}
