import javax.swing.plaf.DimensionUIResource;

public class CafeJava {
    public static void main(String[] args){
        //APP VARIABLES
        // Lines of text that will appear in the app
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly" ;
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables
        double mochaPrice = 3.5;
        double dripCoffee = 1.00;
        double latte = 2.5;
        double cappucino = 4.5;

        // Customer name variables
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";


        //Order completions
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4  = false;


        //APP INTERACTION SIMULATION:
        // EXAMPLE:
        System.out.println(generalGreeting + customer1);
        System.out.println(customer1 + pendingMessage);
        
        if (isReadyOrder4){
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappucino);
        }
        else{
            System.out.println(customer4 + pendingMessage);
        }

        System.out.println(customer2 +" " + displayTotalMessage + (latte*2));
        if (isReadyOrder2){
            System.out.println(customer2 + readyMessage);
        }
        else{
            System.out.println(customer2 + pendingMessage);
        }

        System.out.println(customer3 + displayTotalMessage + (latte-dripCoffee));
    }

}
