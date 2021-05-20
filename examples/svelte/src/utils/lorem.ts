import { LoremIpsum } from 'lorem-ipsum'

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 12,
    min: 4
  }
})
export const loremHTML = new LoremIpsum(
  {
    sentencesPerParagraph: {
      max: 12,
      min: 3
    },
    wordsPerSentence: {
      max: 12,
      min: 4
    }
  },
  'html'
)
