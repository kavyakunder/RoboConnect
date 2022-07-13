import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "People are fascinated by robots because they're machines that can mimic life.It's going to be interesting to see how society deals with artificial intelligence, but it will definitely be cool.",

    username: "harrypeterson",
    firstName: "Harry",
    lastName: "Peterson",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    profileImg:
      "https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    _id: uuid(),
    content:
      "Our groceries were delivered yesterday by a robot called Rover 029.The future is exciting ✌️",

    username: "emmachurchill",
    firstName: "Emma",
    lastName: "Churchill",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    postImg:
      "https://webexahead.webex.com/wp-content/uploads/2020/08/61b92284-the-pandemic-is-bringing-us-closer-to-our-robot-takeout-future.jpg",

    profileImg:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    _id: uuid(),
    content:
      "It makes me a little sad that shaking a vending machine might be the closest I ever come to fighting a robot.",

    username: "angelahoward",
    firstName: "Angela",
    lastName: "Howard",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    profileImg:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    content:
      "Did you ever think a Robot could be the size of a worm? The Department of Mechanical Engineering at Tsinghua University has invented a small robot that can maneuver through pipelines for inspections. For more: http://bit.ly/3NDjJC7",

    username: "harrypeterson",
    firstName: "Harry",
    lastName: "Peterson",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    profileImg:
      "https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    _id: uuid(),
    content:
      "Did you know that Sophia is the first robot to get the citizenship of Saudi Arabia, but she also has more rights than any other woman in Saudi Arabia. Sophia has no male guardian and wears no abaya – two restrictions that are imposed on Saudi women.",
    username: "laurenbond",
    firstName: "Lauren",
    lastName: "Bond",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    postImg:
      "https://th-thumbnailer.cdn-si-edu.com/elXu6y_rw1jLdbNbpEXmBX9ZA44=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a9/da/a9dabc78-549e-4c46-8996-2539578768c3/1280px-sophia_robot.jpg",
    profileImg:
      "https://images.unsplash.com/photo-1628875986390-15280f9865e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    content:
      "The future is now. At the Unitree Robotics factory, there's a large scale test of Go1 robot dogs going on!! #robotics #futurism",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "notsoadrash",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    profileImg:
      "https://images.unsplash.com/photo-1650658804900-10d2eee66295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmwlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    content:
      "The OpenAI scientists have trained an AI system to solve the Rubik's Cube with a human-like robot hand.This is an unprecedented level of dexterity for a robot, and is hard even for humans to do.The system trains in an imperfect simulation and quickly adapts to reality",
    username: "peterhill",
    firstName: "Peter",
    lastName: "Hill",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    postImg:
      "https://i.chzbgr.com/full/9375422976/h9CECC38E/gif-of-robot-hand-solving-rubiks-cube",

    profileImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    _id: uuid(),
    content:
      "Read how a robot can map its underwater environment, track its own location and plan a safe route through a complex environment in real-time 🤖 https://mou.sr/3OAcBqu ",
    username: "emmachurchill",
    firstName: "Emma",
    lastName: "Churchill",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    profileImg:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
