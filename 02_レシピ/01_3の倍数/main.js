const genkifunction = function (num) {
  for (i = 0; i < num; i++) {
    if (i % 3 == 0) {
      console.log(i + "!!!!")
    } else {
      console.log(i)
    }
  }
}

genkifunction(100)
