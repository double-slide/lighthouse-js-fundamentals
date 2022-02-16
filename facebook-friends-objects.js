/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method


var facebookProfile = {
  name: "Iaan",
  friends: 50,
  messages: ["Hey there!", "How are you?", "I\'m doing well"],
  
  postMessage: function (message) {
    return facebookProfile.messages.push(message);
  },

  deleteMessage: function (index) {
    return facebookProfile.messages.splice(index, 1);
  },


  addFriend: function () {
    return facebookProfile.friends++;
  },

  removeFriend: function () {
    return facebookProfile.friends--;
  },

}

console.log(facebookProfile.messages);
facebookProfile.postMessage("Hiya!");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);


// console.log(facebookProfile.friends);

// console.log(facebookProfile.messages);
// console.log(facebookProfile.postMessage("Goodnight!"));
