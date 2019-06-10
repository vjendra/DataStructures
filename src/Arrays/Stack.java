package Arrays;

public class Stack {

  int[] stack;
  int top = -1;

  Stack(int size) {
    stack = new int[size];
  }

  protected void Push(int el) {
    if (!OverFlow()) {
      stack[++top] = el;
      Print();
    }
  }

  protected void Pop() {
    int popped;

    if (!UnderFlow()) {
      popped = stack[top];
      stack[top--] = 0;
      System.out.println(popped + " Popped");
      Print();
    }
  }

  private void Print() {
    for (int i = 0; i < stack.length - 1; i++) {
      if (stack[i] != 0)
        System.out.print(stack[i] + " ");
    }
    System.out.println(" ");
  }

  private boolean UnderFlow() {
    if (top == -1) {
      System.out.println("Stack UnderFlow");
      return true;
    }
    return false;
  }

  private boolean OverFlow() {
    if (top > stack.length - 1) {
      System.out.println("Stack OverFlow");
      return true;
    }
    return false;
  }
}