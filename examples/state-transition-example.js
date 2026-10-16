// Illustrative shape only; intentionally incomplete and non-runnable.
const allowedActions = {
  CLUE: ['SUBMIT_CLUE'],
  SUBMIT: ['SUBMIT_CARD'],
  VOTE: ['CAST_VOTE'],
  REVEAL: ['NEXT_ROUND'],
};

export function describeTransition(phase, actionType) {
  return allowedActions[phase]?.includes(actionType) === true;
}
