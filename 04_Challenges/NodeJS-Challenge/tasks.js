
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
   else if(text.substring(0, 5) === 'hello\n'){

    hello(text.replace("\n", "").substring(6));
   }
 else if (text === 'list\n'){
    list()
  }
  else if (text === " "){
     console.log("add a new task please");
  }
   else if (text.substring(0,3) === "add"){
    add(text.replace("\n","").substring(4));
   }
  
  else if (text === 'help\n'){
    help();
  }

else if(text === "remove\n"){
  remove(list1.length-1);
}
else if (text.trim().substring(7) > list1.length -1){
  console.log("task not exist");
}
else if(text.substring(0,6)==="remove"){
  remove(text.trim().substring(7));
}

  else{
    unknownCommand(text);
  }
}
// this function is a list of what to do that application to help user 
function help(){
  console.log(" if you write quit or exit you turn out the app");
  console.log("if you write   hello , (hello!) messege appear on the screen and if you write hello with sentence the sentence will end with  !");
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

function add(x){
list1.push(x);
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if(text === "hello")
  console.log("hello " + text + "!");
  
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
var list1 = ["task1","task2","task3","task4",];


 
function list(){
  for (var i =0 ; i <list1.length ; i++ ){
  console.log(i+1 +" "+ list1[i]);
  }

}
function remove(x){

list1.splice(x,1);

}
    







// The following line starts the application
startApp("Mhahmoud Chamas")
