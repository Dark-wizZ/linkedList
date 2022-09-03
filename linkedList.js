class LinkedList{
  constructor(){
    this.head;
    this.tail;
  }
  append(value){
    //add a new node containing value to the end of the list 
    let newNode = new Node(value)
    this.tail = newNode;
    if(!this.head) {
      this.head = newNode;
    }else{
      let node = this.head;
      while(node){
        if(!node.next){
          node.next = this.tail;
          return;
        }
        node = node.next;
      }
    }
  }
  prepend(value){
    //add a new node containing value to the start of the list
    let newNode = new Node(value);
    let node = this.head;
    this.head = newNode;
    this.head.next = node;
  }
  size(){
    //returns total number of size
    let c = 0;
    let node = this.head;
    while(node){
      c++;node
      node = node.next;
    }
    return c;
  }
  at(index){
    //return the node at the given list
    let i=0;
    let node = this.head;
    while(node){
      if(i==index) return node;
      node = node.next;
      i++
    }
  }
  pop(){
    //remove the last element from the list
  }
  contains(value){
    //return true if value in the list
  }
  find(value){
    //returns index of the value, null if not found
  }
  toString(){
    //return string form of list
    // ie: (value) -> (value) -> null
    let str = '';
    let node = this.head;
    while(node){
      str += `${node.value} -> `;
      node = node.next;
    }
    str += 'null';
    return str;
  }
  insertAt(value, index){
    //inserts node of given value at the provided index
  }
  removeAt(index){
    //remove the node at given index
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

const list  = new LinkedList();
list.append(3)
list.append(8)
list.append(4)
list.prepend('000')
list.append(98)
list.append(6)

console.log(list.toString())
console.log('size', list.size())
console.log("at index", list.at(4))