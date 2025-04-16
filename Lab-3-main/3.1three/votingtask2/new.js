"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var voteMap = new Map();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function mainMenu() {
    console.log("\n🗳️ Voting System");
    console.log("1. Cast Vote");
    console.log("2. Show Results");
    console.log("3. Show Winner");
    console.log("4. Exit");
    rl.question("Choose an option (1-4): ", handleMenu);
}
function handleMenu(choice) {
    switch (choice.trim()) {
        case "1":
            rl.question("Enter candidate name: ", function (candidate) {
                castVote(candidate.trim());
                mainMenu();
            });
            break;
        case "2":
            displayVotes();
            mainMenu();
            break;
        case "3":
            getWinner();
            mainMenu();
            break;
        case "4":
            console.log("👋 Exiting voting system.");
            rl.close();
            break;
        default:
            console.log("⚠️ Invalid choice.");
            mainMenu();
    }
}
function castVote(candidate) {
    if (!candidate) {
        console.log("❌ Enter a valid candidate name.");
        return;
    }
    voteMap.set(candidate, (voteMap.get(candidate) || 0) + 1);
    console.log("\u2705 Vote casted for ".concat(candidate));
}
function displayVotes() {
    console.log("🔢 Current Votes:");
    if (voteMap.size === 0) {
        console.log("No votes yet.");
        return;
    }
    voteMap.forEach(function (count, name) {
        console.log("".concat(name, ": ").concat(count));
    });
}
function getWinner() {
    var maxVotes = 0;
    var winners = [];
    voteMap.forEach(function (count, name) {
        if (count > maxVotes) {
            maxVotes = count;
            winners = [name];
        }
        else if (count === maxVotes) {
            winners.push(name);
        }
    });
    if (winners.length === 0) {
        console.log("⚠️ No votes yet!");
    }
    else if (winners.length === 1) {
        console.log("\uD83C\uDFC6 Winner: ".concat(winners[0], " with ").concat(maxVotes, " votes."));
    }
    else {
        console.log("\uD83E\uDD1D It's a tie between: ".concat(winners.join(", "), " (").concat(maxVotes, " votes each)"));
    }
}
// Start the CLI program
mainMenu();
