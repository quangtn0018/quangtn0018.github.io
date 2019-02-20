export default {
  person: {
    name: "Quang Nguyen",
    title: "Web & Front End & Full Stack Engineer",
    location: "Based in the Bay Area, CA."
  },

  contacts: [
    {
      key: "linkedin",
      label: "LinkedIn",
      timeout: 500,
      url: "https://www.linkedin.com/in/qtnguyen18/"
    },
    {
      key: "github",
      label: "GitHub",
      timeout: 650,
      url: "https://github.com/quangtn0018"
    },
    {
      key: "medium",
      label: "Medium",
      timeout: 800,
      url: "https://medium.com/@quangtn0018"
    },

    {
      key: "email",
      label: "Email",
      timeout: 950,
      url: "mailto:quangtn0018@gmail.com"
    }
  ],

  projects: [
    {
      key: "courseRecommender",
      title: "CourseRecommender (Flutter, Dart, Python, Flask, Firebase)",
      url: "https://github.com/quangtn0018/course_recommender",
      followLinkText: "Check out the source code on GitHub!",
      description:
        "This is a course recommender app based on CSUEB CS courses and recommends user on what courses they use sign up for next based on what they have so far. I was intrigued in the Flutter Framework because it gives you one codebase in Dart for both mobile platforms. I used google sign in authentication with Firebase authentication and firebase database for data persistence. On the backend, I created an API endpoint using Python and Flask Framework to create a directed graph  data structure on how to get the recommended courses based on a user's prerequisite courses. Check out the demo video on my GitHub page."
    },
    {
      key: "animalCollector",
      title: "AnimalCollector (Swift, Firebase, iOS)",
      url: "https://github.com/quangtn0018/AnimalCollector",
      followLinkText: "Check out the source code on GitHub!",
      description:
        "This app let users take pictures of animals, compete with friends or other players to see who can collect the most animals and earn the highest scores. I learned Swift, using Xcode for iOS development. In addition, I gained an understanding of creating and using different types of view controllers, navigation bar , and Google's Firebase NOSQL database. I used CRUD operations with firebase database, stored images into firebase storage, fetch images and cache using SDWebImage API and a implemented a chatting system. I incorporated CoreML functionality and a predefined model to determine the animals from captured images."
    },
    {
      key: "pokedex",
      title: "Pokedex (Vue.js, Quasar Framework, Express.js)",
      url: "https://quangtn0018-pokedex.herokuapp.com/#/",
      followLinkText: "Check out the source code on GitHub!",
      description:
        "I created this app to learn Vue.js along with Quasar Framework for responsiveness UI and reusable components. Utilized pokeapi to make restful API calls for Pokemon API data with express.js for backend using async and await. I also learned how to host my first web app on heroku."
    },
    {
      key: "personalWebsite",
      title: "Personal Website (React.js, Gatsby.js)",
      url: "https://quangtn0018.github.io",
      followLinkText: "Go back to this page :)",
      description:
        "My own portfolio hosted as a static website using Gatsby and React.js on a personal GitHub pages"
    }
  ]
};
