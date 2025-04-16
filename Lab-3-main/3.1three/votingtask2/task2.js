var voteMap = new Map();
function castVote() {
    var candidate = document.getElementById("voteInput").value.trim();
    if (!candidate) {
        alert("Enter a valid candidate name.");
        return;
    }
    voteMap.set(candidate, (voteMap.get(candidate) || 0) + 1);
    displayVotes();
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
        alert("No votes yet!");
    }
    else if (winners.length === 1) {
        alert("\uD83C\uDFC6 Winner: ".concat(winners[0], " with ").concat(maxVotes, " votes."));
    }
    else {
        alert("\uD83E\uDD1D It's a tie between: ".concat(winners.join(", "), " (").concat(maxVotes, " votes each)"));
    }
}
function displayVotes() {
    var output = "🔢 Current Votes:<br>";
    voteMap.forEach(function (count, name) {
        output += "".concat(name, ": ").concat(count, "<br>");
    });
    document.getElementById("voteResults").innerHTML = output;
}
