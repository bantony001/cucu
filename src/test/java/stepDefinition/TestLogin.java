package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestLogin {
	WebDriver driver = new FirefoxDriver();
	
	@Given("^the user opens up facebook$")
	public void the_user_opens_up_facebook() throws Throwable {		
		driver.get("http://www.facebook.com");
	}

	@When("^the user enters the invalid credentials$")
	public void the_user_enters_the_invalid_credentials() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("nabejo@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("jav");
	}

	@Then("^the application doesn't allow the user to login$")
	public void the_application_doesn_t_allow_the_user_to_login() throws Throwable {
		
	}
}
