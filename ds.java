public class sample {
    public static int[] twoNumberSum(int[] array, int target) {
        for ( i = 0; i<array.length-1 , i++) {
            for (j=i+1; j<array.length; j++) {
                if ( array[i] + array[j] == target) {
                    return new int [] {array[i], array[j]};
                }
            }
        }
        return new int [0];
    }
    public static void main(String[] args) {
        int[] array = {9,7,6,0,2,5,4};
        int target = 10;
        int[] result =  twoNumberSum(array, target);
        System.out.println( result );
    }
}
