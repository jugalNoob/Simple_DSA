
Q::what is queue?

ANSA:Javascript 

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    alert("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.warn(queue);
}
function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}

enqueue(10);
enqueue(20);
enqueue(30);
dequeue()
dequeue()
dequeue()
dequeue()
display();


//Circular queause in Javascript

   class Queue {
        constructor(size) {
          this.max = size;
          this.items = new Array(size);
          this.currentSize = 0;
          this.rear = -1;
          this.front = -1;
        }
        enqueue(val) {
          if (this.currentSize != this.max) {
            if (this.rear == this.max - 1) {
              this.rear = 0;
            } else {
              this.rear++;
            }
            this.items[this.rear] = val;
            this.currentSize++;
            if ((this.front == -1)) {
              this.front = this.rear;
            }
          }
        }
        dequeue(){
            if(this.currentSize!=0){
                this.items[this.front]=null;
                if(this.front==this.max-1){
                    this.front=0;
                }else{
                    this.front++;
                }
                this.currentSize--;
                
            }else{
                this.front=-1;
                this.rear=-1;
                alert("queue is empty")
            }
        }
      }

      let queue = new Queue(5);


        queue.enqueue(10)

  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(40)
  queue.enqueue(50)

  queue.dequeue()
  queue.dequeue()
  console.log(queue)



  ////////////////////FIXME - 


  <html>
  <head>
    <title>Queue in JavaScript</title>
    <script>
      let queue = [];
      let currentSize = queue.length;
      let maxSize = 5;

      // function enqueue(newVal) {
      //   if (currentSize >= maxSize) {
      //     alert("Queue is already full");
      //   } else {
      //     queue[currentSize] = newVal;
      //     currentSize++;
      //   }
      // }

      function enqueueWithBtn() {
        let newVal = document.getElementById("qEl").value;
        if (currentSize >= maxSize) {
          alert("Queue is already full");
        } else {
          queue[currentSize] = newVal;
          currentSize++;
        }
      }

      function display() {
        console.warn(queue);
      }
      function dequeue() {
        if (!isEmpty()) {
          for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
          }
          currentSize--;
          queue.length = currentSize;
        } else {
          alert("queue is already empty");
        }
      }
      function front() {
        if (!isEmpty()) {
          console.warn(queue[0]);
        } else {
          alert("queue is already empty");
        }
      }

      function rear() {
        if (!isEmpty()) {
          console.warn(queue[currentSize - 1]);
        } else {
          alert("queue is already empty");
        }
      }
      function isEmpty() {
        if (currentSize <= 0) {
          return true;
        } else {
          return false;
        }
      }

      // enqueue(10);
      // enqueue(20);
      // enqueue(30);

      // front();
      // rear();

      // display();
    </script>
  </head>
  <body>
    <h1>Queue with input elements in JavaScript</h1>
    <input placeholder="enter element" id="qEl" />
    <button onclick="enqueueWithBtn()">Add Element</button>
    <br/><br/>
    <button onclick="dequeue()">Remove Element</button>
    <button onclick="display()">Display</button>
    <button onclick="front()">Get Front Element</button>
    <button onclick="rear()">Get Rear Element</button>


  </body>
</html>
