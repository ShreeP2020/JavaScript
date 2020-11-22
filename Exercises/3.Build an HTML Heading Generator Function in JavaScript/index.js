const headingGenerator = (title, typeOfHeading) => {
    return `
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
  }
  
headingGenerator('Greetings', 1);

console.log(headingGenerator('JavaScript HTML Title', '1'));