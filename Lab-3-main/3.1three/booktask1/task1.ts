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
  
  const bookQueue = new BookQueue();
  
  function enqueueRequest() {
    const name = (document.getElementById("studentName") as HTMLInputElement).value;
    if (name) {
      bookQueue.enqueue(name);
      updateDisplay();
    }
  }
  
  function dequeueRequest() {
    const student = bookQueue.dequeue();
    alert(student ? `📘 Book assigned to ${student}` : "No students in the queue.");
    updateDisplay();
  }
  
  function updateDisplay() {
    document.getElementById("queueDisplay")!.innerText = "Queue: " + bookQueue.display();
  }
  