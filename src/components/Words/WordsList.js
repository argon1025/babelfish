import React, { Component } from 'react';
import {Word} from '../';

class WordsList extends Component{
    pressWordCreateButton =() => {
        this.props.changeViewId(8);
    }
  componentDidMount() {
    console.log("단어 리스트")
    //this.props.getNote();
    }
    render() {
        let wordlist;
        if(Object.keys(this.props.WordsData).length > 0){
            wordlist = this.props.WordsData.map((data)=>{
            return <Word 
            key={data.id} 
            wordTitle={data.Word_Title} 
            mean1={data.Mean1} 
            mean2={data.Mean2}
            wrongCount={data.Wrong_Count}
            />
          })
        }else{
          wordlist = <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">등록된 단어가 없네요!</h1>;
        }
        return (
            <div>
                <div class="flex flex-row space-x-3">{/* 단어리스트 콘텐츠 타이틀 */}
                    <div>
                        <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">My Words</h1>
                    </div>
                    <div class="flex-grow"></div>
                    <div>
                    <div onClick={this.pressWordCreateButton} class="flex flex-row w-40 h-15 px-3 p-2 bg-white rounded-lg shadow-sm items-center space-x-1 text-gray-600 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:text-white">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>
                            <h2 class="subpixel-antialiased text-sm">단어 추가</h2>
                        </div>
                    </div>
                    <div>
                    <div class="flex flex-row w-40 h-15 px-3 p-2 bg-white rounded-lg shadow-sm items-center space-x-1 text-gray-600 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:text-white">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            <h2 class="subpixel-antialiased text-sm">단어 시험</h2>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row w-40 h-15 px-3 p-2 bg-white rounded-lg shadow-sm items-center space-x-1 text-gray-600 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:text-white">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
                            <h2 class="subpixel-antialiased text-sm">뜻 / 발음 숨기기</h2>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-3 mt-5">
                    <div class="flex flex-row w-full px-5 py-2">
                        <div class="flex-1">
                            <h2 class="subpixel-antialiased text-base text-gray-300">단어</h2>
                        </div>
                        <div class="flex-1">
                            <h2 class="subpixel-antialiased text-base text-gray-300">뜻</h2>
                        </div>
                        <div class="flex-1">
                            <h2 class="subpixel-antialiased text-base text-gray-300">발음</h2>
                        </div>
                        <div class="flex-1">
                            <h2 class="subpixel-antialiased text-base text-gray-300">오답 횟수</h2>
                        </div>
                        <div class="flex-2">
                            <h2 class="subpixel-antialiased text-base text-gray-300">단어 편집</h2>
                        </div>
                    </div>

                    {wordlist}

                </div>
            </div>
        );
    }
}
export default WordsList;
