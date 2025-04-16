const voteMap = new Map<string, number>();

function castVote() {
  const candidate = (document.getElementById("voteInput") as HTMLInputElement).value.trim();
  if (!candidate) {
    alert("Enter a valid candidate name.");
    return;
  }
  voteMap.set(candidate, (voteMap.get(candidate) || 0) + 1);
  displayVotes();
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
    alert("No votes yet!");
  } else if (winners.length === 1) {
    alert(`🏆 Winner: ${winners[0]} with ${maxVotes} votes.`);
  } else {
    alert(`🤝 It's a tie between: ${winners.join(", ")} (${maxVotes} votes each)`);
  }
}

function displayVotes() {
  let output = "🔢 Current Votes:<br>";
  voteMap.forEach((count, name) => {
    output += `${name}: ${count}<br>`;
  });
  document.getElementById("voteResults")!.innerHTML = output;
}
