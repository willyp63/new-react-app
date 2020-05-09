# Cove Coding Challenge

## Summary

I decided to use React/Redux for the project because I felt like it was complicated enough to warrent a SPA framework and React is the best option for fast development IMO. I also used  [Tailwind.css](https://tailwindcss.com/) to help out with a little bit of styling.

First thing I did was start looking for a 3rd-party React calendar component. I ended up settling on [react-big-calendar](https://github.com/jquense/react-big-calendar) because it had a large number of stars/dependents on gtihub/npm and also because it was well documented and very customizable. I also realized I needed a date-picker and didn't want to build one or assume the user was in a browser that supports native date-pickers so I used another 3rd-party component [react-datepicker](https://github.com/Hacker0x01/react-datepicker).

The app has 2 routes. `/` is where you'll find the main calendar and `/new` is where you'll find the form to add a new event. The Redux store holds the events fetched from the API and also what day and time-slot are selected on the calendar. This is so when the user clicks on the calendar to create a new event that information can be easily passed between routes.

Finally, when I saw that you would be testing my code with a larger data-set, I thought why not just build my own API so I could make sure my code scaled and worked with edge cases. I used a simple node script with [Faker.js](https://github.com/marak/Faker.js/) to generate a random set of events and then hosted that on an Express server.  You can find the code for that API [here](https://github.com/willyp63/cove-coding-challenge-api).

## Instructions

- `git clone https://github.com/willyp63/cove-coding-challenge.git`

- `cd cove-coding-challenge`

- `npm i`

- For production:

  - `npm run build`

  - `npm start`

- For development:

  - `npm run start:dev`
