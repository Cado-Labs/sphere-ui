import { asciiToEmoji } from "./index"

const TEST_TEXT = "te=)st =)test test=) =)"

describe("asciiToEmoji", () => {
  it("should replace all emojis", () => {
    expect(asciiToEmoji(TEST_TEXT))
      .toBe("te🙂st 🙂test test🙂 🙂")
  })
  it("should replace only emojis with spacing before", () => {
    expect(asciiToEmoji(TEST_TEXT, { needSpacing: "before" }))
      .toBe("te=)st 🙂test test=) 🙂")
  })
  it("should replace only emojis with spacing after", () => {
    expect(asciiToEmoji(TEST_TEXT, { needSpacing: "after" }))
      .toBe("te=)st =)test test🙂 🙂")
  })
  it("should replace only emojis with spacing around", () => {
    expect(asciiToEmoji(TEST_TEXT, { needSpacing: "around" }))
      .toBe("te=)st =)test test=) 🙂")
  })
  it("should throw error if inputString has incorrect type", () => {
    expect(() => {
      asciiToEmoji(91)
    }).toThrow("inputString must be a string!")
  })
})
