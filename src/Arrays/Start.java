package Arrays;

import java.net.SocketOption;

public class Start {

  public static void main(String[] args) {
    int[] a = {0, 3, 4, 31, 35, 50, 57, 58};
    int[] b = {4, 6, 30,35, 50, 57};
    int[] c = ArrayMethods.MergeSortedArrays(a, b);
    for (int i = 0; i < c.length; i++) {
      System.out.print(c[i]+" ");
    }
  }
}
