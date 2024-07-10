import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words:"
    }
]);
const Words = answers.sentence.trim().split(" ");
//print the Array of words to the console.
console.log(Words);
//print the word count of the sentence to the console
console.log(`Your Sentence Word Count is: ${Words.length}`);
