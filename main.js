const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('Husker');
  SLL.insertBefore('IM NEW BITCH', 'Husker');

  return SLL;

}

console.log(main());