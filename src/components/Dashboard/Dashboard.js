import React, { Component } from 'react';
import { Loading } from '../';

class Dashboard extends Component {
  state = {
    viewid: 0 // 페이지 설정에 사용되는 상태 0: 로딩, 1: 메인 화면
  }
  constructor(props) {
    super(props);
    this.props.userNoteDataLoad();
    this.state.viewid = 0;
    //console.log(this.props.NotesData);
  }
  loadingCompoment(ThisViewId, callback) {
    setTimeout(() => {
      if (this.props.viewId === ThisViewId) { // 사용자가 뷰를 이동하지않고 계속 기다릴경우
        if (this.props.api_fetching === false) { // API 질의가 진행중이 아닐경우
          this.setState({ viewid: 1 }); // 내부 뷰 상태를 설정합니다 1 : 대시보드 출력
        }else{ //api 모듈이 계속 질의 상태일경우
          callback(1, this.loadingCompoment.bind(this)); //더 기다립니다..
        }
      } //기다리지 않고 뷰를 이탈했을 경우 그냥 종료합니다
    }, 1000);
  }
  componentDidMount() {
    // 지정된 시간 이후에 content state.api 가 계속 질의 중인지 확인합니다
    // 작업을 다 끝낸 상태면 화면으로 리 랜더링 하게됩니다 작업중일경우 callback으로 다시 로딩함수를 호출합니다
    this.loadingCompoment(1, this.loadingCompoment.bind(this));
    //console.log(this.props.NotesData);
  }
  render() {
    let content;
    let LearningCount_0 = [];
    let LearningCount_1 = [];
    let LearningCount_2 = [];
    let LearningCount_3 = [];
    let LearningCount_forever = [];
    let totalLearningCount = 0;
    let totalNotesCount = 0;


    switch (this.state.viewid) {
      case 1:
        if (Object.keys(this.props.NotesData).length > 0) { // 단어장 리스트 데이터가 있을경우
        const toDay = new Date(); //현재 시간
          this.props.NotesData.map((data) => { //노트 리스트 반복
            let noteDate = new Date(data.Learning_Day); // 노트 마지막 학습일자 저장
            noteDate = (toDay.getTime() - noteDate.getTime()) / 1000 / 60 / 60 / 24; // 오늘 - 노트 마지막 학습일 시간차 계산

            totalLearningCount = totalLearningCount + data.Learning_Count;
            totalNotesCount = totalNotesCount + 1;

            if (data.Learning_Count === 0) {
              console.log(`등록만한 단어장`);
              if (noteDate >= 1) {
                console.log(`1일 이상 지남`);
                LearningCount_0.push(
                  <div class="xl:w-80 w-full mt-4 mr-4 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                    <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">{data.name}</h1>
                    <hr class="m-2"></hr>
                    <h2 class="subpixel-antialiased text-base text-gray-300">{Math.floor(noteDate)}일 동안 방치했습니다</h2>
                    <h3 class="subpixel-antialiased text-sm text-gray-300">지금 시작하세요!</h3>
                  </div>
                );
              }

            } else if (data.Learning_Count === 1) { //2회독 추천 단어장
              console.log(`한번 학습 단어장`);
              if (noteDate >= 1) {
                console.log(`1일 이상 지남`);
                LearningCount_1.push(
                  <div class="xl:w-80 w-full mt-4 mr-4 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                    <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">{data.name}</h1>
                    <hr class="m-2"></hr>
                    <h2 class="subpixel-antialiased text-base text-gray-300">1회독 한지 {Math.floor(noteDate)}일이 지났습니다</h2>
                  </div>
                );
              }
            } else if (data.Learning_Count === 2) { //3 회독 추천 단어장
              console.log(`두번 학습 단어장`);
              if (noteDate >= 3) {
                console.log(`3일 이상 지남`);
                LearningCount_2.push(
                  <div class="xl:w-80 w-full mt-4 mr-4 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                    <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">{data.name}</h1>
                    <hr class="m-2"></hr>
                    <h2 class="subpixel-antialiased text-base text-gray-300">2회독 한지 {Math.floor(noteDate)}일이 지났습니다</h2>
                  </div>
                );
              }
            } else if (data.Learning_Count === 3) { // 4회독 추천 단어장
              console.log(`세번 학습 단어장`);
              if (noteDate >= 7) {
                console.log(`7일 이상 지남`);
                LearningCount_3.push(
                  <div class="xl:w-80 w-full mt-4 mr-4 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                    <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">{data.name}</h1>
                    <hr class="m-2"></hr>
                    <h2 class="subpixel-antialiased text-base text-gray-300">3회독 한지 {Math.floor(noteDate)}일이 지났습니다</h2>
                  </div>
                );
              }
            } else if (data.Learning_Count >= 4) { //정기복습 추천
              console.log(`세번이상 학습 단어장`);
              if (noteDate >= 30) {
                console.log(`30일 이상 지남`);
                LearningCount_forever.push(
                  <div class="xl:w-80 w-full mt-4 mr-4 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                    <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">{data.name}</h1>
                    <hr class="m-2"></hr>
                    <h2 class="subpixel-antialiased text-base text-gray-300">마지막 학습일로부터 {Math.floor(noteDate)}일이 지났습니다</h2>
                  </div>
                );
              }
            }
          });
        content = (
          <div class="flex flex-col space-y-8">{/* 추천학습 콘텐츠 타이틀 */}
            <div>
              <h1 class="subpixel-antialiased text-3xl font-semibold text-gray-600">오늘의 추천 학습 플랜</h1>
            </div>
            {LearningCount_0.length !== 0 && (

              <div>
                <div>
                  <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">1회독 추천 단어장</h1>
                  <h1 class="subpixel-antialiased text-gray-400">단어장 생성이후 1일이상 지난 단어장 입니다</h1>
                </div>
                <div class="flex flex-row flex-wrap">
                  {LearningCount_0}
                </div>
              </div>
            )}

            {LearningCount_1.length !== 0 && (

              <div>
                <div>
                  <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">2회독 추천 단어장</h1>
                  <h1 class="subpixel-antialiased text-gray-400">1회독한지 1일이상 지난 단어장 입니다</h1>
                </div>
                <div class="flex flex-row flex-wrap">
                  {LearningCount_1}
                </div>
              </div>
            )}

            {LearningCount_2.length !== 0 && (

              <div>
                <div>
                  <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">3회독 추천 단어장</h1>
                  <h1 class="subpixel-antialiased text-gray-400">2회독한지 3일이상 지난 단어장 입니다</h1>
                </div>
                <div class="flex flex-row flex-wrap">
                  {LearningCount_2}
                </div>
              </div>
            )}
            {LearningCount_3.length !== 0 && (

              <div>
                <div>
                  <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">4회독 추천 단어장</h1>
                  <h1 class="subpixel-antialiased text-gray-400">3회독한지 7일이상 지난 단어장 입니다</h1>
                </div>
                <div class="flex flex-row flex-wrap">
                  {LearningCount_3}
                </div>
              </div>
            )}
            {LearningCount_forever.length !== 0 && (

              <div>
                <div>
                  <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">정기복습 추천 단어장</h1>
                  <h1 class="subpixel-antialiased text-gray-400">가벼운 마음으로 복습 어떠세요?</h1>
                </div>
                <div class="flex flex-row flex-wrap">
                  {LearningCount_forever}
                </div>
              </div>
            )}
              { LearningCount_1.length <= 0 && LearningCount_2.length <= 0 && LearningCount_3.length <= 0 && LearningCount_forever.length <= 0 ? (
                              <div>
                              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">꾸준히 하고 계시네요!</h1>
                              <h1 class="subpixel-antialiased text-gray-400">저희가 살펴봤는데 {totalNotesCount}개의 단어장 중에 추천드릴께 없어요</h1>
                              <h1 class="subpixel-antialiased text-gray-400">단어장을 더 만들어서 공부 해볼까요?</h1>
                            </div>
              ):'우리 열심히 해봐요!'}
          </div>
        );
            }else{
            content = (
              <div>
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">안녕하세요?</h1>
              <h1 class="subpixel-antialiased text-gray-400">지금은 추천할 단어장이 없어요 단어장 먼저 우리 만들어봐요!</h1>
            </div>
              );
            }
        break;
      default:
        content = (<Loading />);
        break;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
export default Dashboard;
