
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
// a condition of help has been increased to the function onDataReceived(

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
   else if(text === 'hello\n'){
    hello();
   }
  

  
  else if (text === 'help\n'){
    help();
  }
  else{
    unknownCommand(text);
  }
}
// this function is a list of what to do that application to help user 
function help(){
  console.log(" if you write quit or exit you turn out the app");
  console.log("if you write   hello , (hello!) messege appear on the screen and if you write hello with sentence the sentence will end with !");
  console.log("if you write a (unknowcommand) a (unknowcommand) with your massege appear on the screen  ");
  console.log("if you write help a list of help commande it will appear on the screen");
  console.log("if you write list a what to do list will appear on the screen");
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text1){
  if(text1 === "hello")
  console.log("hello " + text1 + "!");
  
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Mhahmoud Chamas")
