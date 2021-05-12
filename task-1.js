function getOddEven() {
  let mass = ["love", 4, 5, null, "JS", 6, true, 0];
  let odd = 0;
  let even = 0;
  for (let t = 0; t < mass.length; t++) {
    if (typeof mass[t] == "number") {
      if (mass[t] == 0) {
        console.log("mass[" + t + "] =0");
      } else if (mass[t] % 2 == 1) {
        even += 1;
      } else if (mass[t] % 2 == 0) {
        odd += 1;
      }
    }
  }

  console.log("even numbers " + even);
  console.log("odd numbers " + odd);
}

getOddEven();
