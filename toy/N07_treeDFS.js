let dfs = function (node) {
  let result = [];

  const aux = (node) => {
    result.push(node.value);
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i]) {
        aux(node.children[i]);
      }
    }
  }
  
  aux(node);
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
