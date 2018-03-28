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
        "Personal website created to showcase my love for creating user interfaces"
    },
    {
      key: "animalCollector",
      title: "AnimalCollector (Swift, Firebase, iOS)",
      url: "https://github.com/quangtn0018/AnimalCollector",
      description:
        "Let users take pictures of animals, compete with friends or other players to see who can collect the most animals and earn the highest scores"
    },
    {
      key: "pokedex",
      title: "Pokedex (Vue.js, Quasar Framework, Express.js)",
      url: "https://github.com/quangtn0018/pokedex",
      description:
        "Pokedex using Vue.js, Quasar Framework, Express.js and data from pokeapi"
    },
    {
      key: "courseRecommender",
      title: "CourseRecommender (Swift, Firebase, iOS)",
      url: "https://github.com/quangtn0018/CourseRecommender",
      description:
        "Keeps track of and get recommended classes based on your current courses at CSUEB"
    }
  ]
};
