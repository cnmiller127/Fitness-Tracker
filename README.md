# Fitness-Tracker

## Code

This application is used to keep track of fitness workouts. The workouts can either be cardio or resistance training. 
The front end was completed by a third party, but I received the duty of writing the backend code. MongoDB and Mongoose were used to create a database
which keeps track of user information. Express.js was used for html routing and database extraction and entry. The front
end code was analyzed in order to comprehend what needed to be done on the backend. A custom method was added to obtain the total workout duration.

## Front End Changes

Changes were made to the front end (stats.js) for a better UI. For the line graph and bar graph, the corresponding functions were made separately and modified to add the total duration/weight for the corresponding day associated with the workout in the database. The Donut/Pie chart functions stayed the same.

## Screenshot

![Screenshot](images/ss.PNG)

## Heroku Deployment
[Click here](https://cnm-2020-fitness-tracker.herokuapp.com/) to use the deployed application.