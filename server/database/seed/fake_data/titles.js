titles = [
  "I love it",
  "Broke after 2 years",
  "kids are happy",
  "Thanks Target!",
  "returned, didn't work",
  "Looks like an old jail mattress",
  "DO NOT BUY",
  "LOVE THIS",
  "My coworkers are all jealous",
  "My kids are jealous",
  "2/3 cats approve",
  "Never slept better",
  "Save your money",
  "Great but wrong color",
  "I barely even dropped it...",
  "I like it",
  "Not a happy customer",
  "Perfect!",
  "Fit my needs",
  "Just WOW",
  "ok",
  "The cats love it",
  "HUGE time saver",
  "Where has this been all my life??",
  "disappointed",
  "broke",
  "Used To Be Better",
  "My Dog Left Me",
  "There's A Learning Curve",
  "Nice",
  "Another Hit From Target",
  "I could have died...",
  "Not For Me",
  "If you like your family, this isn't for you.",
  "Fluffy!",
  "AWESOME!!",
  "Fun for the whole family!",
  "Satisfied",
  "Stunning",
  "My New Favourite",
  "Never Again",
  "Garage storage unit",
  "Easy assembly",
  "Gorgeous",
  "USED to be a great product"
]


module.exports = function () {
  i = Math.floor(Math.random() * titles.length)
  return titles[i]
}

