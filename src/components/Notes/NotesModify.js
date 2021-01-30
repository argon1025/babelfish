import React, { Component } from 'react';

class NotesModify extends Component {
    constructor(props) {
        super(props);
        const noteData = this.props.NotesData.find((element)=>{
            if(element.id === Number(this.props.focusNoteId)){
                return true;
            }
        });
        this.state.name = noteData.name;
    }
    state = {
        name: "",
    }
    // 입력폼 값 변경 이벤트
    inputIsChange = (event) => {
        //console.log(event.target.name);
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value //입력값이 변경될때마다 타겟 이름과 값을 받아 state에 새로 갱신합니다
        });
    }
    pressModifyButton = () => {
        //this.props.userNoteCreate(this.state.name);
        this.props.userNoteModify(this.state.name);
        this.props.changeViewId(2);
        
    }
    render() {
        return (
            <div class="flex flex-col space-y-5">
                <div class="flex justify-center">
                    <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">Note Modify</h1>
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
                        <input name="name" type="text" placeholder="단어장 이름" value={this.state.name} onChange={this.inputIsChange} class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" />
                    </div>
                </div>
                <div class="flex justify-center">
                    <hr class="w-96"></hr>
                </div>
                <div class="flex justify-center">
                    <button class="rounded-lg bg-blue-600 h-10 w-96 text-white" onClick={this.pressModifyButton}> 수정 </button>
                </div>
            </div>
        );
    }
}
export default NotesModify;