import * as readline from 'readline';

class BookQueue {
  private queue: string[] = [];

  enqueue(student: string) {
    this.queue.push(student);
  }

  dequeue(): string | undefined {
    return this.queue.shift();
  }

  display(): string {
    return this.queue.length > 0 ? this.queue.join(" ➡️ ") : "No pending requests.";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bookQueue = new BookQueue();

function showMenu() {
  console.log("\n📚 Library Book Queue System");
  console.log("1. Request Book (Enqueue)");
  console.log("2. Assign Book (Dequeue)");
  console.log("3. Show Queue");
  console.log("4. Exit");
  rl.question("Choose an option (1-4): ", handleInput);
}

function handleInput(choice: string) {
  switch (choice.trim()) {
    case "1":
      rl.question("Enter student name: ", (name) => {
        if (name.trim()) {
          bookQueue.enqueue(name.trim());
          console.log(`✅ ${name} added to the queue.`);
        }
        showMenu();
      });
      break;
    case "2":
      const student = bookQueue.dequeue();
      console.log(student ? `📘 Book assigned to: ${student}` : "❌ No students in the queue.");
      showMenu();
      break;
    case "3":
      console.log("📋 Current Queue:", bookQueue.display());
      showMenu();
      break;
    case "4":
      console.log("👋 Exiting. Goodbye!");
      rl.close();
      break;
    default:
      console.log("⚠️ Invalid choice. Try again.");
      showMenu();
  }
}

showMenu();
