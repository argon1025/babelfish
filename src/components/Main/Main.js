import React, { Component } from 'react';
import { NoteList } from '../';
import { NoteCreate } from '../';
import { WordsList } from '../';
import { WordsCreate } from '../';
import { WordsTest } from '../';
import { Loading } from '../';
import { WordsModify } from '../';
import { NotesModify } from '../';
import { Dashboard } from '../';

import './Header.css';

class Main extends Component {
  componentDidMount() {
    console.log("메인 뷰")
    //this.props.getNote(); //노트 데이터 받아옴
  }
  pressMenuButton = (event) => {
    this.props.changeViewId(event.currentTarget.id);
  }
  render() {
    let content;
    switch (this.props.viewId) {
      case 1:
        content = <Dashboard
          api_fetching={this.props.api_fetching}
          viewId={this.props.viewId}
          NotesData={this.props.NotesData}
          changeViewId={this.props.changeViewId}
          userNoteDataLoad={this.props.userNoteDataLoad}
        />;
        break;
      case 2:
        content = <NoteList
          NotesData={this.props.NotesData}
          changeViewId={this.props.changeViewId}
          userNoteDelete={this.props.userNoteDelete}
          userNoteDataLoad={this.props.userNoteDataLoad}
          changeFocusNoteId={this.props.changeFocusNoteId}
          userWordsDataLoad={this.props.userWordsDataLoad}
        />;
        break;
      case 3:
        content = <Loading />;
        break;
      case 4:
        content = <Loading />;
        break;
      case 5:
        content = <NoteCreate userNoteCreate={this.props.userNoteCreate} />;
        break;
      case 6:
        content = <NotesModify
          focusNoteId={this.props.focusNoteId}
          NotesData={this.props.NotesData}
          userNoteModify={this.props.userNoteModify}
          changeViewId={this.props.changeViewId}
        />;
        break;
      case 7:
        content = <WordsList
          changeViewId={this.props.changeViewId}
          WordsData={this.props.WordsData}
          NotesData={this.props.NotesData}
          changeFocusWordId={this.props.changeFocusWordId}
          userWordsDelete={this.props.userWordsDelete} //유저 단어 삭제
          focusNoteId={this.props.focusNoteId}
          userWordsDataLoad={this.props.userWordsDataLoad}
        />;
        break;
      case 8:
        content = <WordsCreate
          userWordsCreate={this.props.userWordsCreate}
          changeViewId={this.props.changeViewId}
        />;
        break;
      case 9:
        content = <WordsModify
          WordsData={this.props.WordsData}
          focusWordId={this.props.focusWordId}
          userWordsModify={this.props.userWordsModify}//유저 단어 수정
          changeViewId={this.props.changeViewId}
        />;
        break;
      case 10:
        content = <WordsTest
          WordsData={this.props.WordsData}
          changeViewId={this.props.changeViewId}
          viewId={this.props.viewId}
          userNoteLearningDayUpdate={this.props.userNoteLearningDayUpdate}
          userWordsWrongCountUpdate={this.props.userWordsWrongCountUpdate}
          api_fetching={this.props.api_fetching}
          focusNoteId={this.props.focusNoteId}
          NotesData={this.props.NotesData}
        />;
        break;
    }
    return (
      <div>
        {/* 네비게이션 */}
        <div class="xl:flex w-full h-full min-h-screen">
          <div class="flex pt-8 space-y-10 h-48 w-screen flex-col xl:h-auto xl:w-24 bg-white rounded-lg">
            <div class="flex justify-center">
              <svg id="Layer_1" class="w-8 h-8 fill-current text-blue-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m304.2 190.666h72.3c42.833 0 111.4 1.972 111.4-63.2 0-56.859-71.055-127.466-175.667-127.466h-8.033c-50.122 0-97.631 16.978-135.976 48.2h-16.674c-70.388 0-127.45 56.947-127.45 127.466 0 8.284 6.716 15 15 15h50.722c-.957 8.294-1.456 16.692-1.456 25.167 0 119.222 96.466 215.833 215.833 215.833h1.815l75.946 75.946c5.846 5.846 15.362 5.859 21.228-.015 15.703-15.706 24.35-36.584 24.35-58.792 0-17.521-5.384-34.216-15.371-48.199 9.987-13.98 15.371-30.677 15.371-48.201 0-22.21-8.65-43.091-24.364-58.806-5.858-5.859-15.356-5.858-21.213 0l-75.934 75.934h-1.827c-49.378 0-89.434-39.961-89.434-89.433.001-49.377 39.962-89.434 89.434-89.434zm23.033-160.092c83.486 6.424 130.667 62.563 130.667 96.893 0 28.401-20.324 33.2-81.4 33.2h-49.267zm0 360.178 63.827-63.826c4.23 7.724 6.478 16.429 6.478 25.479 0 14.197-5.529 27.545-15.569 37.585-.107.107-.221.224-.324.334-5.557 5.903-5.409 15.162.324 20.895 10.041 10.041 15.57 23.389 15.57 37.585 0 9.051-2.247 17.756-6.478 25.48l-63.827-63.827v-19.705zm-271.995-230.086c4.276-27.873 27.514-73.343 81.802-81.399-19.714 24.04-33.79 51.718-41.581 81.399zm129.529 119.434c0 63.796 49.863 115.659 112.467 119.234v2.203c-99.253-3.677-178.867-85.568-178.867-185.704s79.613-182.028 178.867-185.705v130.736c-62.688 3.582-112.467 55.519-112.467 119.236zm206.733-184.767c0-8.28-6.72-15-15-15s-15 6.72-15 15 6.72 15 15 15 15-6.72 15-15z" /></g></svg>
            </div>
            <hr class="m-5"></hr>
            <div class="flex flex-row justify-center space-x-10 xl:flex-col xl:space-y-10 xl:space-x-0">

              {/* 홈 메뉴 1*/}
              <div class="flex justify-center cursor-pointer text-gray-300 hover:text-blue-500 duration-300 ease-in-out" onClick={this.pressMenuButton} id="1" >
                {this.props.viewId === 1 && (<svg class="w-4 h-4 fill-current animate-bounce absolute -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>)}
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              </div>
              {/* 단어장 리스트 2*/}
              <div class="flex justify-center cursor-pointer text-gray-300 hover:text-blue-500 duration-300 ease-in-out" onClick={this.pressMenuButton} id="2" >
                {this.props.viewId === 2 && (<svg class="w-4 h-4 fill-current animate-bounce absolute -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>)}
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
              </div>
              {/* 다국어 3*/}
              <div class="flex justify-center cursor-pointer text-gray-300 hover:text-blue-500 duration-300 ease-in-out" onClick={this.pressMenuButton} id="3">
                {this.props.viewId === 3 && (<svg class="w-4 h-4 fill-current animate-bounce absolute -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>)}
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" /></svg>
              </div>
              {/* 다크모드 4 */}
              <div class="flex justify-center cursor-pointer text-gray-300 hover:text-blue-500 duration-300 ease-in-out" onClick={this.pressMenuButton} id="4">
                {this.props.viewId === 4 && (<svg class="w-4 h-4 fill-current animate-bounce absolute -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>)}
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              </div>
            </div>
          </div>
          {/* 콘텐트 박스 */}
          <div class="w-full h-full xl:h-auto xl:overflow-auto">
            <div class="hidescroll bg-gray-100 bottom-0 right-0 p-8 rounded-t-lg xl:rounded-l-3xl xl:p-16">
              {/* 콘텐츠 내용 */}
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
