import axios from 'axios';
import * as settings from './settings';

export function getToken(id, password){
    console.log(`(${id}, ${password} ${settings.api_url})`)
    return axios.post(
      `${settings.api_url}token`,
        {
        //...data
        "userid" : `${id}`,
        "password" : `${password}`
        });
}
/*
export function getToken2(id, password){
  console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.post(
    `${settings.api_url}token`,
      {
      //...data
      "name" : `${id}`,
      "password" : `${password}`
      },
      {
      headers: {
        "token": `${token}` 
      }
    });
}
*/