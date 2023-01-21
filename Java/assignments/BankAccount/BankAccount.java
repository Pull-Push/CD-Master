import java.util.Random;

public class BankAccount {
    private long accountNumber;
    private double checkingBalance;
    private double savingsBalance;
    protected static double totalMoney;
    protected static int totalAccounts;

    public BankAccount(double check, double save){
        Random act = new Random();
        this.accountNumber = act.nextInt(9999);
        this.checkingBalance = check;
        this.savingsBalance =save;
        totalAccounts += 1;
        totalMoney += check + save; 
    }
    //getters
    public double getChecking(){
        return checkingBalance;
    }
    public double getSaving(){
        return savingsBalance;
    }

    public double myMoney(){
        return this.checkingBalance + this.savingsBalance;
    }

    public long myAccount(){
        return this.accountNumber;
    }
    //setters
    public void depositCheck(double amt){
        this.checkingBalance += amt;
        totalMoney += amt;
    }
    public void depositSave(double amt){
        this.savingsBalance += amt;
        totalMoney += amt;
    }
    public void withdrawCheck(double amt){
        if(this.checkingBalance>amt){
            this.checkingBalance -= amt;
        }
        else{
            System.out.println("Insufficient Funds");
        }
    }
    public void withdrawSave(double amt){
        if(this.savingsBalance>amt){
            this.savingsBalance -= amt;
        }
    }
}


