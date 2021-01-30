import axios from 'axios';
import * as settings from './settings';

export function getToken(id, password) {
  console.log(`api 토큰 로드`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.post(
    `${settings.api_url}token`,
    {
      //...data
      "userid": `${id}`,
      "password": `${password}`
    });
}

export function getNotes(usertoken, userid) {
  console.log(`api 노트 리스트 로드`)
  return axios.get(
    `${settings.api_url}api/users/${userid}/notes`,
    {
      headers: {
        token: usertoken
      }
    }
  );
}

export function createNote(usertoken, userid, notename) {
  console.log(`api 노트 생성`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.post(
    `${settings.api_url}api/users/${userid}/notes`,
    {
      //...data
      "notename": `${notename}`,
    },
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function modifyNote(usertoken, userid, notename, noteid) {
  console.log(`api 노트 수정`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.put(
    `${settings.api_url}api/users/${userid}/notes/${noteid}`,
    {
      //...data
      "notename": `${notename}`,
    },
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function deleteNote(usertoken, userid, noteid) {
  console.log(`api 노트 삭제`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.delete(
    `${settings.api_url}api/users/${userid}/notes/${noteid}`,
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function updatedNote(usertoken, userid, noteid) {
  console.log(`api 노트 학습일자 갱신`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.put(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/updated-date`,
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function getWord(usertoken, userid, noteid) {
  console.log(`api 단어 리스트 로드`)
  return axios.get(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/words`,
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function createWord(usertoken, userid, noteid, title, mean1, mean2) {
  console.log(`api 단어 생성`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.post(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/words`,
    {
      "title": `${title}`,
      "mean1": `${mean1}`,
      "mean2": `${mean2}`
    },
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function modifyWord(usertoken, userid, noteid, wordid, title, mean1, mean2) {
  console.log(`api 단어 수정`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.put(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/words/${wordid}`,
    {
      //...data
      "title": `${title}`,
      "mean1": `${mean1}`,
      "mean2": `${mean2}`
    },
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function deleteWord(usertoken, userid, noteid, wordid) {
  console.log(`api 단어 삭제`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.delete(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/words/${wordid}`,
    {
      headers: {
        token: usertoken
      }
    }
  );
}
export function wrongCountWord(usertoken, userid, noteid, wordid) {
  console.log(`api 단어 틀림 카운트 증가`)
  //console.log(`(${id}, ${password} ${settings.api_url})`)
  return axios.put(
    `${settings.api_url}api/users/${userid}/notes/${noteid}/words/${wordid}`,
    {
      headers: {
        token: usertoken
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