import { replaceAsciiWithNativeEmoji } from "./index"

const TEST_TEXT = "te=)st =)test test=) =)"

describe("replaceAsciiWithNativeEmoji", () => {
  it("without any options", () => {
    expect(replaceAsciiWithNativeEmoji(TEST_TEXT))
      .toBe("te🙂st 🙂test test🙂 🙂")
  })
  it("with option needSpacing: before", () => {
    expect(replaceAsciiWithNativeEmoji(TEST_TEXT, { needSpacing: "before" }))
      .toBe("te=)st 🙂test test=) 🙂")
  })
  it("with option needSpacing: after", () => {
    expect(replaceAsciiWithNativeEmoji(TEST_TEXT, { needSpacing: "after" }))
      .toBe("te=)st =)test test🙂 🙂")
  })
  it("with option needSpacing: both", () => {
    expect(replaceAsciiWithNativeEmoji(TEST_TEXT, { needSpacing: "both" }))
      .toBe("te=)st =)test test=) 🙂")
  })
})
