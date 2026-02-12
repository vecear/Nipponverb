/**
 * Smart Question Selection Algorithm
 *
 * Priority: unattempted first > wrong questions (~1/3) > previously correct
 * This ensures learners see new content while revisiting weak areas.
 */

export interface SmartSelectionParams<T> {
  bank: T[]
  getId: (item: T) => string
  count: number
  attemptedIds: Set<string>
  wrongIds: string[]
}

export function selectQuestionsSmartly<T>(params: SmartSelectionParams<T>): T[] {
  const { bank, getId, count, attemptedIds, wrongIds } = params
  const wrongIdSet = new Set(wrongIds)

  // Classify questions
  const unattempted = bank.filter(q => !attemptedIds.has(getId(q)))
  const wrongQuestions = bank.filter(q => wrongIdSet.has(getId(q)))
  const attemptedCorrect = bank.filter(q => attemptedIds.has(getId(q)) && !wrongIdSet.has(getId(q)))

  // Wrong questions get ~1/3 of the slots
  const thirdCount = Math.floor(count / 3)
  const shuffledWrong = [...wrongQuestions].sort(() => 0.5 - Math.random())
  const selectedWrong = shuffledWrong.slice(0, Math.min(thirdCount, shuffledWrong.length))

  // Fill remaining from unattempted first
  let remaining = count - selectedWrong.length
  const shuffledUnattempted = [...unattempted].sort(() => 0.5 - Math.random())
  const selectedUnattempted = shuffledUnattempted.slice(0, Math.min(remaining, shuffledUnattempted.length))
  remaining -= selectedUnattempted.length

  // Then from previously correct
  const shuffledAttemptedCorrect = [...attemptedCorrect].sort(() => 0.5 - Math.random())
  const selectedAttemptedCorrect = shuffledAttemptedCorrect.slice(0, remaining)

  // Combine and shuffle
  return [...selectedWrong, ...selectedUnattempted, ...selectedAttemptedCorrect]
    .sort(() => 0.5 - Math.random())
}
