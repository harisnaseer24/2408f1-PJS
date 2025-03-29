import { fullName,age } from "./first.js";
import {lname,age as userAge} from "./second.js"; // alias name

fullName("Haris", lname,userAge);

fullName("John", lname,age);