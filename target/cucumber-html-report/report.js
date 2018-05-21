$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the application",
  "description": "",
  "id": "login-to-the-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "login-to-the-application;title-of-your-scenario-outline",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user opens up facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters the invalid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the application doesn\u0027t allow the user to login",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.the_user_opens_up_facebook()"
});
formatter.result({
  "duration": 12164798033,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.the_user_enters_the_invalid_credentials()"
});
formatter.result({
  "duration": 561273321,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.the_application_doesn_t_allow_the_user_to_login()"
});
formatter.result({
  "duration": 20526,
  "status": "passed"
});
});