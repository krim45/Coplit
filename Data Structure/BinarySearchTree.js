class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // 현재 값보다 작을 때 => 왼쪽 자식 노드
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
    // 현재 값보다 클 때 => 오른쪽 자식 노드
    else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
    // 같을 때는 이미 입력값이 트리에 포함되어 있는 경우
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    else if (value < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(value);
    }
    else if (value > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(value);
    }
  }
  // 전위 순회
  preorder(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }
  // 중위 순회
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }
  // 후위 순회
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}
