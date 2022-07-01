import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    username: "notsoadarsh",
    password: "adarshbalika",
    profileImg:
      "https://images.unsplashttps://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60h.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    username: "harrypeterson",
    firstName: "Harry",
    lastName: "Peterson",
    password: "harrypeterson9",
    profileImg:
      "https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    username: "emmachurchill",
    firstName: "Emma",
    lastName: "Churchill",
    password: "emmachurchill9",
    profileImg:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    username: "angelahoward",
    firstName: "Angela",
    lastName: "Howard",
    password: "angelahoward9",
    profileImg:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    username: "laurenbond",
    firstName: "Lauren",
    lastName: "Bond",
    password: "laurenbond9",
    profileImg:
      "https://images.unsplash.com/photo-1628875986390-15280f9865e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    username: "peterhill",
    firstName: "Peter",
    lastName: "Hill",
    password: "peterhill9",
    profileImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
