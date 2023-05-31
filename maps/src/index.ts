import { User } from './User';
import { Company } from './Company';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_MAPS_API_KEY = process.env.MAP_KEY;

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
script.defer = true;

document.head.appendChild(script);

const user = new User;
const company = new Company

console.log(user)
console.log(company)

google