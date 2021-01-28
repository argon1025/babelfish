import React, { Component } from 'react';
import {Note} from '../';

class NoteList extends Component{
  componentDidMount() {
    console.log("노트 리스트")
    //this.props.getNote();
  }
  //노트 생성 버튼
  pressCreateNoteButton = (event) => {
    this.props.changeViewId(5); // 뷰 전환 노트 생성
  } 
    render() {
        let notelist;
        if(Object.keys(this.props.NotesData).length > 0){
          notelist = this.props.NotesData.map((data)=>{
            return <Note 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            changeViewId={this.props.changeViewId}
            userNoteDelete={this.props.userNoteDelete}
            changeFocusNoteId={this.props.changeFocusNoteId}
            userWordsDataLoad={this.props.userWordsDataLoad}
            />
          })
        }else{
          notelist = <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">보유한 단어장이 없습니다</h1>;
        }
        return (
          <div>
            <div>{/* 추천학습 콘텐츠 타이틀 */}
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">My Notes</h1>
            </div>
            <div class="flex flex-row flex-wrap pt-5">{/* 추천학습 콘텐츠 박스 */}
              {notelist}
            </div>

              <div onClick={this.pressCreateNoteButton} class="flex flex-col pt-5 mt-8 h-32 xl:w-80 w-full bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-2xl p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                <h1 class="subpixel-antialiased text-xl font-semibold text-white text-center">새로운 단어장 생성</h1>
                <div class="flex justify-center"><svg class="w-14 h-14 fill-current text-white text-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" /></svg></div>
                
              </div>
          </div>
        );
    }
  }
  export default NoteList;
  