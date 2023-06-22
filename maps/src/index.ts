/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_MAPS_API_KEY = process.env.MAP_KEY;

const script = document.createElement('script');


script.onload = function () {
    const user = new User;
    const company = new Company;
    const customMap = new CustomMap('map');

    customMap.addMarker(user);
    customMap.addMarker(company);
}


script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
script.defer = true;

document.head.appendChild(script);