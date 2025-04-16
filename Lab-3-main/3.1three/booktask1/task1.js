var BookQueue = /** @class */ (function () {
    function BookQueue() {
        this.queue = [];
    }
    BookQueue.prototype.enqueue = function (student) {
        this.queue.push(student);
    };
    BookQueue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    BookQueue.prototype.display = function () {
        return this.queue.length > 0 ? this.queue.join(" ➡️ ") : "No pending requests.";
    };
    return BookQueue;
}());
var bookQueue = new BookQueue();
function enqueueRequest() {
    var name = document.getElementById("studentName").value;
    if (name) {
        bookQueue.enqueue(name);
        updateDisplay();
    }
}
function dequeueRequest() {
    var student = bookQueue.dequeue();
    alert(student ? "\uD83D\uDCD8 Book assigned to ".concat(student) : "No students in the queue.");
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("queueDisplay").innerText = "Queue: " + bookQueue.display();
}
