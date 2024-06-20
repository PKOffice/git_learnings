public class StringReverseBuilder {
    public static void main(String[] args)
    {
        StringBuilder str = new StringBuilder("Hello Code!");
        System.out.println("String = "+ str.toString());
        StringBuilder reverseStr = str.reverse();
        System.out.println("Reverse String = "+ reverseStr.toString());
    }
}
