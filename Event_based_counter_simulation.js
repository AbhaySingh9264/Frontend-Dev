let count = 0;

function increment() {
  count++;
  console.log("Count:", count);
  function showCount() {
    console.log("Inside:", count);
  }
  showCount();
}

function decrement() {
  count--;
  console.log("Count:", count);
}

increment();
increment();
decrement();
