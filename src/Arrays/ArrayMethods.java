package Arrays;

public class ArrayMethods {
  public static int[] MergeSortedArrays(int[] a, int[] b) {

    int i = 0, j = 0, k = 0;
    int[] c = new int[10];
    while ( i < a.length && j < b.length ) {
      if (a[i] < b[j]) {
        c[k++] = a[i++];
      }
      else if(a[i] > b[j]) {
        c[k++] = b[j++];
      }
      else {
        c[k++] = b[j++];
        i++;
      }
    }
    while ( i < a.length)
      c[k++] = a[i++];
    while ( j < b.length)
      c[k++] = b[j++];
    return c;
  }
}
