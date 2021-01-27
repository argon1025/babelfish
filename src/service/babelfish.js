import axios from 'axios';
import * as settings from './settings';

export function getToken(id, password){
    console.log(`토큰 로드`)
    //console.log(`(${id}, ${password} ${settings.api_url})`)
    return axios.post(
      `${settings.api_url}token`,
        {
        //...data
        "userid" : `${id}`,
        "password" : `${password}`
        });
}

export function getNotes(usertoken,userid){
  console.log(`노트 리스트 로드`)
  return axios.get(
    `${settings.api_url}api/users/${userid}/notes`,
    {
      headers:{
        token : usertoken
      }
    }
  );
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