import React, { Component } from 'react';

class WordsModify extends Component {
    constructor(props) {
        super(props);
        const wordData = this.props.WordsData.find((element)=>{
            if(element.id === Number(this.props.focusWordId)){
                return true;
            }
        });
        console.log(wordData);
        this.state.title = wordData.Word_Title;
        this.state.mean1 = wordData.Mean1;
        this.state.mean2 = wordData.Mean2;
    }
    state = {
        title : "",
        mean1 : "",
        mean2 : ""
    }
    // 입력폼 값 변경 이벤트
    inputIsChange = (event) => {
        //console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value //입력값이 변경될때마다 타겟 이름과 값을 받아 state에 새로 갱신합니다
        });
    }
    pressCreateButton = () => {
        this.props.userWordsModify(this.state.title,this.state.mean1,this.state.mean2);
        this.props.changeViewId(7);
    }
      render() {
          return (
              <div class="flex flex-col space-y-5">
                  <div class="flex justify-center">
                      <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">Modify Word</h1>
                  </div>
                  <div class="flex justify-center">
                      <div class="relative w-96">
                          <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                              <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-600">
                                      <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                  </svg>
                              </div>
                          </div>
                          <input name="title" type="text" placeholder="단어" value={this.state.title} onChange={this.inputIsChange} class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" />
                      </div>
                  </div>
                  <div class="flex justify-center">
                      <div class="relative w-96">
                          <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                              <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-600">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                              </div>
                          </div>
                          <input name="mean1" type="text" placeholder="단어 뜻" value={this.state.mean1} onChange={this.inputIsChange} class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" />
                      </div>
                  </div>
                  <div class="flex justify-center">
                      <div class="relative w-96">
                          <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                              <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-600">
                                    <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                              </div>
                          </div>
                          <input name="mean2" type="text" placeholder="발음" value={this.state.mean2} onChange={this.inputIsChange} class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" />
                      </div>
                  </div>
                  <div class="flex justify-center">
                      <hr class="w-96"></hr>
                  </div>
                  <div class="flex justify-center">
                      <button class="rounded-lg bg-blue-600 h-10 w-96 text-white" onClick={this.pressCreateButton}> 수정 </button>
                  </div>
              </div>
          );
      }
    }
export default WordsModify;