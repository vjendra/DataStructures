package Arrays;

public class Start {

  public static void main(String[] args) {

    int[] a = {0, 3, 4, 31, 35, 50, 57, 58};
    int[] b = {4, 6, 30,35, 50, 57};
    int[] c = ArrayMethods.MergeSortedArrays(a, b);
    for (int i = 0; i < c.length; i++) {
      System.out.println(c[i]+" ");
    }

    Stack s = new Stack(5);
    s.Push(1);
    s.Pop();
    s.Pop();
    s.Push(2);
    s.Push(3);
    s.Push(5);
    s.Push(5);
    s.Push(5);
    s.Push(6);
    s.Pop();
  }
}
