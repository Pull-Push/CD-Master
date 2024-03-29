public class AlfredTest {
    
    //This main method will always be the launch point for a Java application
    //For now, we are using the main to test all our
    //AlfredQuotes methods.
    public static void main(String[] args){
        //Make an instance of AlfredQuotes to access all it's methods.
        AlfredQuotes alfredBot = new AlfredQuotes();

        //Make some test greetings, providing any necessary data
        String testGreeting  = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Jeff Sokol");
        String doubleGuestGreeting =alfredBot.guestGreeting("Beth Kane", "morning");

        String testDateAnnouncement = alfredBot.dateAnnouncement();

        String alexisTest = alfredBot.respondBeforeAlexis("Alexis! Play some lo-fi beats");
        String alfredTest = alfredBot.respondBeforeAlexis("I can't find my yo-yo. Maybe Alfred will know where it is.");
        String notReleventTest = alfredBot.respondBeforeAlexis("maybe that's what Batman is about. Not winning. But failing..");

        //Print the greetings to test.
        //System.out.println(testGreeting);
        // System.out.println(testGuestGreeting);
        // System.out.println(testDateAnnouncement);
        // System.out.println(alexisTest);
        // System.out.println(alfredTest);
        // System.out.println(notReleventTest);
        System.out.println(doubleGuestGreeting);
    }
}
