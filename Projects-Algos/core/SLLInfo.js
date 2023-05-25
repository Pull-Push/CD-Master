// Building a linked list

// Node Construction
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

// List Construction
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value){
        if(this.head==null){
            this.head = new Node(value);
        return
        }
        let runner = this.head
        while( runner.next != null){
            runner = runner.next
        }
        runner.next = new Node(value)
    }

    remove(){
        if (this.head == null){
            return null
        }
        let runner = this.head
        if (runner.next == null){
            this.head == null;
            return runner.data
        }
        while( runner.next.next != null){
            runner = runner.next
        }
        let temp = runner.next.data;
        runner.next = null;
        return temp;
    }
}



var newSLL = new LinkedList()
newSLL.add(10);
newSLL.add(42);
newSLL.add(500);
// console.log(newSLL.head)
// console.log(newSLL.head.next)
console.log(newSLL)
newSLL.remove()

console.log(newSLL)

