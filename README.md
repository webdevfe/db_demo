# toroData-test
The app is built with React.js, TypeScript, Material-UI, Node.js, Express...
Supports Responsive Design for mobil view.

- Run Front End 'npm run start'
- Run Back End 'node server.js'

By default the app makes network requests to the external API points.
However, the app can run in dev mode by running Node.js and exposing local
APIs to return mocked data. To make local requests you would need to open
Tables.tsx file and
1) comment out line 15 and uncomment line 16:
   //const data = await fetch('http://localhost:4000/tables');
2) comment out line 22 and uncomment line 23:
   //const data = await fetch(`http://localhost:4000/table/${newValue}`);
