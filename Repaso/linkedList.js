// Lista { head { Node1 next: { Node2 next:{ Node3 next:{ Node4 next: null } } } }
//                      value         value        value        value
    //                                           current
//  List { head: null }

function List() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

List.prototype.add = function (val) {
  let newNode = new Node(val);
  if (this.head === null) { // if (!this.head)
    // this.head === null === false   !false === true
    this.head = newNode;
    return this.head;
  }
  var current = this.head;
  while (current.next !== null) { //  while (current.next){}
    current = current.next;
  }
  current.next = newNode;
  return this.head;
};

// Instancia la LISTA
const listita = new List()

listita.add(23)
listita.add(12)
listita.add(1)
console.log(listita)

