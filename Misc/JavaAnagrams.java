/*
Problem Name: Java Anagrams
Problem Details: https://www.hackerrank.com/challenges/java-anagrams/problem
Difficulty: Easy
*/

// Imports
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * JavaAnagrams
 * @author SomnathDas
 */

 // Main Class
public class JavaAnagrams {

	// Engine
	public static void main(String[] args) throws IOException {
		InputStreamReader iSR = new InputStreamReader(System.in);
		BufferedReader buff = new BufferedReader(iSR);
		String a = buff.readLine();
		String b = buff.readLine();
		a = a.toLowerCase();
		b = b.toLowerCase();
		java.util.HashMap<String, Integer> mapOfA = getFreq(a);
		java.util.HashMap<String, Integer> mapOfB = getFreq(b);
		System.out.println(mapOfA.equals(mapOfB));
	}

	// Helper Function
	/** 
	 * @return HashMap<String, Integer>
	*/
	public static java.util.HashMap<String, Integer> getFreq(String s) {
		java.util.HashMap<String, Integer> map = new java.util.HashMap<>();
		for(int i = 0; i < s.length(); i++) {
			if(map.containsKey(String.valueOf(s.charAt(i)))) {
				map.put(String.valueOf(s.charAt(i)), map.get(String.valueOf(s.charAt(i))) + 1);
			} else {
				map.put(String.valueOf(s.charAt(i)), 1);
			}
		}
		return map;
	}
}