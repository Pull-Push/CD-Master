//! Node Construction
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

//! List Construction
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
    //< Add Front
    addFront(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    //< Remove Front
    removeFront(){
        if(this.head == null){
            return null
        }
        let runner = this.head
        // console.log("runner is",runner.data)
        this.head = runner.next
        // console.log("new runner", runner.data)

        while( runner.next != null){
            runner = runner.next
        }
        runner.next = null;
    }
    //< Display Front
    displayFront(){
        if(this.head == null){
            return null
        }
        return this.head.data
    }
}



let newSLL = new LinkedList()
// console.log("On init",newSLL)

newSLL.add(2)
newSLL.add(10)
newSLL.add(42)
newSLL.add(501)

// console.log("After adds",newSLL.head)

newSLL.addFront(100)
// console.log("after add front", newSLL)

newSLL.removeFront()
// console.log("remove front", newSLL.head)

console.log(newSLL.displayFront())