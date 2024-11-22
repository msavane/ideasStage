package com.laboratory.brouillon;

/*
Given an integer,n , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of 2 to 5, print Not Weird
If  is even and in the inclusive range 6 of  to 20 , print Weird
If  is even and greater than 20 , print Not Weird

 */

import java.util.Scanner;

public class Solution {


    private static final Scanner scanner = new Scanner(System.in);

    /*public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        /*if ( N % 2 == 0 ){
            System.out.println(N + " Not Weird");

        }else if (2 <= N && N <= 5){
            System.out.println(N + "  Weird");

        }else if (6 <= N && N <= 20){
            System.out.println(N + " Weird");

        }else if (N > 20){
            System.out.println(N + " weird");

        }else{

            System.out.println(N + " false");
        }
//second solution
        scanner.close();
        if(N%2!=0 || N>=6 && N<=20 || N<=2&& N>=5  ){
            System.out.println(N + " Weird");
        }else
            System.out.println(N + " Not Weird");

        System.out.println("=========================");
        for(int i=1; i <= 10; i++)  {
            //prints table of the entered number
            System.out.println(N+" * "+i+" = "+N*i);
        }


    }
}*/
/*public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.println("================================");
    for(int i=0;i<3;i++){
        String s1=sc.next();
        int x=sc.nextInt();
        String e = 'd';
        //Complete this line
        System.out.printf("%-14s %03d\n", s1, x);
       // System.out.println(s1 + " "+ x);
    }
    System.out.println("================================");

}}*/
/*public static void main(String[] args) {
     Scanner scan = new Scanner(System.in);
    int i = scan.nextInt();
    // Write your code here.
    Double d = scan.nextDouble();
    scan.nextLine();
    String s = scan.nextLine();
    System.out.println("String: " + s);
    System.out.println("Double: " + d);
    System.out.println("Int: " + i);
}}*/
 /*   public static void main(String []argh)
    {



        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();

        for(int i=0;i<t;i++)
        {

            try
            {
                long x=sc.nextLong();
                System.out.println(x+" can be fitted in:");
                if(x>=-128 && x<=127)System.out.println("* byte");
                //Complete the code
                if(x>= Short.MIN_VALUE && x<=Short.MAX_VALUE)System.out.println("* short");
                if(x>=Integer.MIN_VALUE && x<=Integer.MAX_VALUE)System.out.println("* int");
                if(x>=Long.MIN_VALUE && x<=Long.MAX_VALUE)System.out.println("* long");

            }
            catch(Exception e)
            {
                System.out.println(sc.next()+" can't be fitted anywhere.");
            }


        }
    }}*/
   /* public static void main(String[] args) {
        // Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution.
        Scanner scan = new Scanner(System.in);
        int n = 1;
        while (scan.hasNextLine()) {
            String str = scan.nextLine();
            System.out.println(n + " " + str);
            n++;
        }
    }
}*/
/*
//Write your code here
    public static boolean flag;
    public static int B ;
    public static int H;
    static {
        Scanner scan = new Scanner(System.in);
        B = scan.nextInt();
        H = scan.nextInt();
        scan.close();
        flag = B > 0 && H > 0;
        if (!flag) {
            System.out.print("java.lang.Exception: Breadth and height must be positive");
        }
    }

    public static void main(String[] args){
        if(flag){
            int area=B*H;
            System.out.print(area);
        }

    }//end of main

}//end of class*/
    /*    public static void main(String[] args) {

        Singleton s = null;//= new Singleton();
        s.getSingleInstance();

    }}

class Singleton {
    private Singleton() {        str = "Hello world";
        System.out.println("Hello I am a singleton! Let me say hello world to you");}
    public String str;
    private static Singleton s = null;
    public static Singleton getSingleInstance()
    { s= new Singleton(); return s; } }
*/
  /*  public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        // Enter your code here. Print output to STDOUT.
        int strLength = A.length();
        String reverseA ="";
        for (int i = (strLength-1); i>=0; i--){
            reverseA = reverseA + A.charAt(i);
        }
        if (A.toLowerCase().equals(reverseA.toLowerCase())){
            System.out.println("Yes");
        }else{
            System.out.println("No");

        }

    }
}*/
    public  static class A{
        public static String fx1(){return "A::fx1";}
        public static String fx2(){return "A::fx2";}
    }
    public  static class B extends  A {
        public static String fx1(){return "B::fx1";}
        public static String fx2(){return "B::fx2";}
    }
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        A a = new B();
        System.out.println(a.fx1()+" "+ a.fx2());
    }
}


