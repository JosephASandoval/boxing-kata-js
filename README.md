The Javascript Boxing kata
=================
[Github Repo for this React App](https://github.com/JosephASandoval/boxing-kata-js)

Technical decision making
------------

I knew that I was going to use React from the beginning because the Virtual DOM in React makes the user experience better by using a single page. It also makes developing frontend applications faster becuase you can directly use JSX to manipulate virtual DOM elements, which in turn will update the actual DOM. The use of reusable components also make development faster. Also, one-direction data flow in React provides a stable code. I decided against using Redux and instead opted for React Context as my primary state management tool becuase this application is fairly small and simple enough and requires very little state management. I would have opted for Redux only if I was working with complex/intertwined state and a large database. Lastly, I used only Functional components because React Hooks makes implementing Functional components easier. Funcational components and React Hooks are also easier to understand in general than Class components and Life Cycle methods. Overall, I'm proud of the organizational structure of this app becuase it allows for greater scalability in case further development was required.

However, I'm not as thrilled with the box creating algorithms I implemented. It required a lot of iteration and conditional rendering. I think if I had more time and more experience I could think of a box creating solution that required fewer lines of code. Although the algorithm is long-winded, I did separate much of the logic in differen files and folders and I included comments to help explain some of the more convoluted steps, namely using many variables to aid in distinguishing between different types of boxes that needed to be created. Overall, the app fulfills all of the MVPs and the box create algorithm works.

Instructions on running your code
------------

To run the react app on http://localhost:3000/
```
cd boxing-kata-js/frontend
npm start
```

To run the test cases using Jest
```
cd boxing-kata-js/frontend
npm test
```