## This is the project I made while working through the TypeScript: The Complete Developer's Guide course on Udemy.

### To run:

1. Make sure [Node](https://nodejs.org/en/download) is installed
2. Open terminal and navigate to the ts-practice folder
3. Enter the folder you'd like to see run
4. Type `npm install` and hit enter
5. For the maps project directory:
    1. Go to [Google APIs](https://cloud.google.com/apis/) and create a new project
    2. Click on the project and search for the Google Maps API
    3. Click on the Google Maps API and click enable
    4. Click on the credentials tab and create a new API key
    5. Copy the API key and paste it into the index.ts file in place of `process.env.GOOGLE_MAPS_API_KEY`
    6. In the terminal, type `npx parcel index.html` and hit enter
6. For the sort or stats directory:
   1. In the terminal, type `npm start` and hit enter
7. For the web project directory:
    1. In the terminal, type `npm start:db` and hit enter
    2. Then, in a new terminal, type `npm start:parcel` and hit enter
8. Open your browser and go to `localhost:1234`
9. Enjoy!