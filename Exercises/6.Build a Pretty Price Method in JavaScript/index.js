const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
      extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
  };
  
  console.log(prettyPrice(2.2, 0.95)); //
  console.log(prettyPrice(2.2, 95));  //
  console.log(prettyPrice(2.2, 0));  //
  console.log(prettyPrice(2.2, 100)); //