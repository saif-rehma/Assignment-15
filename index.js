"use strict";
/*
Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your
program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of
the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Zia khan",
    "Jhanzaib Tayab",
    "Sarmad",
];
exports.guestList = guestList;
//step 1 print the name of person who can't make it
let guestHowCantMake = "Sarmad";
console.log(`${guestHowCantMake} can't make it to dinner`);
// 2nd step Replace the name of guest who can make it.
let NewGuest = "Abid Shirwani";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMake);
//console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = NewGuest;
}
//console.log(guestList[2])
// step 3 print second set of invitation message
console.log("second set of invitation message");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, You are invited to in dinner.`);
});
