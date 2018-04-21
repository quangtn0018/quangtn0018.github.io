import AddressCardIcon from "./components/icons/addressCardIcon";
import FileCodeIcon from "./components/icons/fileCodeIcon";
import ListAltIcon from "./components/icons/listAltIcon";
import GithubIcon from "./components/icons/githubIcon";
import LinkedInIcon from "./components/icons/linkedInIcon";
import MediumIcon from "./components/icons/mediumIcon";
import EnvelopIcon from "./components/icons/envelopIcon";

export default {
  person: {
    name: "Quang Nguyen",
    title: "Software Engineer"
  },

  contacts: [
    {
      key: "linkedin",
      tag: LinkedInIcon,
      url: "https://www.linkedin.com/in/qtnguyen18/"
    },
    {
      key: "github",
      tag: GithubIcon,
      url: "https://github.com/quangtn0018"
    },
    {
      key: "medium",
      tag: MediumIcon,
      url: "https://medium.com/@quangtn0018"
    },

    {
      key: "email",
      tag: EnvelopIcon,
      url: "mailto:quangtn0018@gmail.com"
    }
  ],

  cardIconProps: {
    width: 30,
    height: 30,
    fill: "lightgrey"
  },

  navIconProps: {
    width: 40,
    height: 40,
    fill: "white"
  },

  navItems: [
    {
      key: "home",
      tag: AddressCardIcon,
      isSelected: true
    },
    {
      key: "about",
      tag: ListAltIcon,
      isSelected: false
    },
    {
      key: "portfolio",
      tag: FileCodeIcon,
      isSelected: false
    }
  ],

  projects: [
    {
      key: "personalWebsite",
      title: "Personal Website (React.js, Gatsby.js)",
      url: "https://quangtn0018.github.io",
      description:
        "My own portfolio hosted as a static website using Gatsby and React.js on a personal GitHub pages"
    },
    {
      key: "animalCollector",
      title: "AnimalCollector (Swift, Firebase, iOS)",
      url: "https://github.com/quangtn0018/AnimalCollector",
      description:
        "This app let users take pictures of animals, compete with friends or other players to see who can collect the most animals and earn the highest scores. I learned Swift, using Xcode for iOS development. In addition, I gained an understanding of creating and using different types of view controllers, navigation bar , and Google's Firebase NOSQL database. I used CRUD operations with firebase database, stored images into firebase storage, fetch images and cache using SDWebImage API and a implemented a chatting system. I incorporated CoreML functionality and a predefined model to determine the animals from captured images."
    },
    {
      key: "pokedex",
      title: "Pokedex (Vue.js, Quasar Framework, Express.js)",
      url: "https://quangtn0018-pokedex.herokuapp.com/#/",
      description:
        "I created this app to learn Vue.js along with Quasar Framework for responsiveness UI and reusable components. Utilized pokeapi to make restful API calls for Pokemon API data with express.js for backend using async and await. I also learned how to host my first web app on heroku."
    },
    {
      key: "courseRecommender",
      title: "CourseRecommender (Flutter, Dart, Python, Flask, Firebase)",
      url: "https://github.com/quangtn0018/course_recommender",
      description:
        "This is a course recommender app based on CSUEB CS courses and recommends user on what courses they use sign up for next based on what they have so far. I was intrigued in the Flutter Framework because it gives you one codebase in Dart for both mobile platforms. I used google sign in authentication with Firebase authentication and firebase database for data persistence. On the backend, I created an API endpoint using Python and Flask Framework to create a directed graph  data structure on how to get the recommended courses based on a user's prerequisite courses. Check out the demo video on my GitHub page."
    }
  ]
};
