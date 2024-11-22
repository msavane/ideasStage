package helloWorlds.exercises;

import java.util.Scanner;

public class AlphabetConverter {
    /*
     * In this program, letterToNumber takes
     * a character as input and converts it to its position in the alphabet
     * (e.g., 'A' becomes 1, 'B' becomes 2, and so on).
     * numberToLetter takes an integer and converts
     * it to the corresponding letter in the alphabet (e.g., 1 becomes 'A', 2 becomes 'B', and so on).
     * You can call these methods with the appropriate inputs to perform the conversions.
     */

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Please enter an alphabet character (A-Z):");
            String txtLetterToNumber = scanner.nextLine().toUpperCase();

            if (txtLetterToNumber.length() == 1 && Character.isLetter(txtLetterToNumber.charAt(0))) {
                char letter = txtLetterToNumber.charAt(0);
                int position = letterToNumber(letter);
                System.out.println("Position in the alphabet: " + position);
            } else {
                System.out.println("Invalid input. Please enter a single alphabet character.");
            }

            System.out.println("Please enter a number between 1 and 26:");
            String txtNumToLetter = scanner.nextLine();

            try {
                int number = Integer.parseInt(txtNumToLetter);
                if (number >= 1 && number <= 26) {
                    char result = numberToLetter(number);
                    System.out.println("Letter at position " + number + " in the alphabet: " + result);
                } else {
                    System.out.println("Number is not in the valid range (1-26).");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid number.");
            }
        }

        public static int letterToNumber(char letter) {
            return letter - 'A' + 1;
        }

        public static char numberToLetter(int number) {
            return (char) ('A' + number - 1);
        }
    }






