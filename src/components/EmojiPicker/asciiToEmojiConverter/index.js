import data from "@emoji-mart/data"

const ASCII_TO_SHORTCODE_DICTIONARY = {
  "<3": ":heart:",
  "</3": ":broken_heart:",
  ":')": ":joy:",
  ":'-)": ":joy:",
  ":D": ":smiley:",
  ":-D": ":smiley:",
  "=D": ":smiley:",
  ":)": ":slightly_smiling_face:",
  ":-)": ":slightly_smiling_face:",
  "=]": ":slightly_smiling_face:",
  "=)": ":slightly_smiling_face:",
  ":]": ":slightly_smiling_face:",
  "':)": ":sweat_smile:",
  "':-)": ":sweat_smile:",
  "'=)": ":sweat_smile:",
  "':D": ":sweat_smile:",
  "':-D": ":sweat_smile:",
  "'=D": ":sweat_smile:",
  ">:)": ":laughing:",
  ">;)": ":laughing:",
  ">:-)": ":laughing:",
  ">=)": ":laughing:",
  ";)": ":wink:",
  ";-)": ":wink:",
  "*-)": ":wink:",
  "*)": ":wink:",
  ";-]": ":wink:",
  ";]": ":wink:",
  ";D": ":wink:",
  ";^)": ":wink:",
  "':(": ":sweat:",
  "':-(": ":sweat:",
  "'=(": ":sweat:",
  ":*": ":kissing_heart:",
  ":-*": ":kissing_heart:",
  "=*": ":kissing_heart:",
  ":^*": ":kissing_heart:",
  ">:P": ":stuck_out_tongue_winking_eye:",
  "X-P": ":stuck_out_tongue_winking_eye:",
  "x-p": ":stuck_out_tongue_winking_eye:",
  ">:[": ":disappointed:",
  ":-(": ":disappointed:",
  ":(": ":disappointed:",
  ":-[": ":disappointed:",
  ":[": ":disappointed:",
  "=(": ":disappointed:",
  ">:(:": ":angry:",
  ">:-((": ":angry:",
  ":@": ":angry:",
  ":'(": ":cry:",
  ":'-(": ":cry:",
  ";(": ":cry:",
  ";-(": ":cry:",
  ">.<": ":persevere:",
  "D:": ":fearful:",
  ":$": ":flushed:",
  "=$": ":flushed:",
  "#-)": ":dizzy_face:",
  "#)": ":dizzy_face:",
  "%-)": ":dizzy_face:",
  "%)": ":dizzy_face:",
  "X)": ":dizzy_face:",
  "X-)": ":dizzy_face:",
  "*\\0/*": ":ok_woman:",
  "\\0/": ":ok_woman:",
  "*\\O/*": ":ok_woman:",
  "\\O/": ":ok_woman:",
  "O:-)": ":innocent:",
  "0:-3": ":innocent:",
  "0:3": ":innocent:",
  "0:-)": ":innocent:",
  "0:)": ":innocent:",
  "0;^)": ":innocent:",
  "O;-)": ":innocent:",
  "O=)": ":innocent:",
  "0;-)": ":innocent:",
  "O:-3": ":innocent:",
  "O:3": ":innocent:",
  "B-)": ":sunglasses:",
  "B)": ":sunglasses:",
  "8)": ":sunglasses:",
  "8-)": ":sunglasses:",
  "B-D": ":sunglasses:",
  "8-D": ":sunglasses:",
  "-_-": ":expressionless:",
  "-__-": ":expressionless:",
  "-___-": ":expressionless:",
  ">:\\": ":confused:",
  ">:/": ":confused:",
  ":-/": ":confused:",
  ":-.": ":confused:",
  ":/": ":confused:",
  ":\\": ":confused:",
  "=/": ":confused:",
  "=\\": ":confused:",
  ":L": ":confused:",
  "=L": ":confused:",
  ":P": ":stuck_out_tongue:",
  ":-P": ":stuck_out_tongue:",
  "=P": ":stuck_out_tongue:",
  ":-p": ":stuck_out_tongue:",
  ":p": ":stuck_out_tongue:",
  "=p": ":stuck_out_tongue:",
  ":-Þ": ":stuck_out_tongue:",
  ":Þ": ":stuck_out_tongue:",
  ":þ": ":stuck_out_tongue:",
  ":-þ": ":stuck_out_tongue:",
  ":-b": ":stuck_out_tongue:",
  ":b": ":stuck_out_tongue:",
}

const ASCII_KEYS = Object.keys(ASCII_TO_SHORTCODE_DICTIONARY)

const transformKeys = (keysArr, transformerFns = []) => {
  let result = keysArr

  transformerFns.forEach(fn => {
    result = fn(result)
  })

  return result
}

const sortKeysByLength = arr => [...arr].sort((a, b) => b.length - a.length)
const escapeSpecialSymbols = arr => arr.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
const joinKeys = arr => arr.join("|")
const asciiKeysRegex = transformKeys(ASCII_KEYS, [sortKeysByLength, escapeSpecialSymbols, joinKeys])

const getByAscii = asciiKey => {
  const id = ASCII_TO_SHORTCODE_DICTIONARY[asciiKey].replaceAll(":", "")

  return data.emojis[id]?.skins[0]?.native
}

export const replaceAsciiWithNativeEmoji = (inputString, options = {}) => {
  const { needSpacing } = options

  const needSpacingBeforeRegex = "(?<=\\s|^)"
  const needSpacingAfterRegex = "(?=\\s|$)"

  let condition = `${asciiKeysRegex}`

  switch (needSpacing) {
    case "before":
      condition = `${needSpacingBeforeRegex}(${asciiKeysRegex})`
      break
    case "after":
      condition = `(${asciiKeysRegex})${needSpacingAfterRegex}`
      break
    case "both":
      condition = `${needSpacingBeforeRegex}(${asciiKeysRegex})${needSpacingAfterRegex}`
      break
  }

  const regex = new RegExp(condition, "g")

  return inputString.replace(regex, match => getByAscii(match))
}
