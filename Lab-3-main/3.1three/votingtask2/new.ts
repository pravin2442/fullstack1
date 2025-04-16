import * as readline from "readline";

const voteMap = new Map<string, number>();

const rl = readline.createInterface({
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

function handleMenu(choice: string) {
  switch (choice.trim()) {
    case "1":
      rl.question("Enter candidate name: ", (candidate) => {
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

function castVote(candidate: string) {
  if (!candidate) {
    console.log("❌ Enter a valid candidate name.");
    return;
  }
  voteMap.set(candidate, (voteMap.get(candidate) || 0) + 1);
  console.log(`✅ Vote casted for ${candidate}`);
}

function displayVotes() {
  console.log("🔢 Current Votes:");
  if (voteMap.size === 0) {
    console.log("No votes yet.");
    return;
  }
  voteMap.forEach((count, name) => {
    console.log(`${name}: ${count}`);
  });
}

function getWinner() {
  let maxVotes = 0;
  let winners: string[] = [];

  voteMap.forEach((count, name) => {
    if (count > maxVotes) {
      maxVotes = count;
      winners = [name];
    } else if (count === maxVotes) {
      winners.push(name);
    }
  });

  if (winners.length === 0) {
    console.log("⚠️ No votes yet!");
  } else if (winners.length === 1) {
    console.log(`🏆 Winner: ${winners[0]} with ${maxVotes} votes.`);
  } else {
    console.log(`🤝 It's a tie between: ${winners.join(", ")} (${maxVotes} votes each)`);
  }
}

mainMenu();
