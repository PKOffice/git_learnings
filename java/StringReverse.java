class StringReverse{
    public static void main(String[] args) {
        String a = "Code";
        char ch;
        String result="";
        for(int i = 0; i<a.length() ;i++){
            ch=a.charAt(i);
            result=ch+result;
        }
        System.out.println(result);
    }

}