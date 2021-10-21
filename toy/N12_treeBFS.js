let bfs = function (node) {
  const result = [];
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const start = queue.shift();
    result.push(start.value)
    for (let i = 0; i < start.children.length; i++) {
      queue.push(start.children[i]);
    }
  }

  return result;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
