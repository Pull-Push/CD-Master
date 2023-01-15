import java.util.ArrayList;

public class CafeUtil {
    public int getStreakGoal(){
        int total = 0 ;
        for(int i = 1; i < 11; i++){
            total += i ;
        }
    return total;
    }

    public double getOrderTotal(double[] lineItems){
        double total = 0.0;
        for(int i=0; i < lineItems.length; i++){
            total += lineItems[i];
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menu){
        for(int i=0; i< menu.size(); i++){
            System.out.println(i + " " + menu.get(i) );
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println("There are " + customers.size() + " poeple in front of you");
        customers.add(userName);
        for(int i = 0; i<customers.size(); i++){
            System.out.println(customers.get(i));
        }
    }
}
