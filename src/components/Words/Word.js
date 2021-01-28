import React, { Component } from 'react';

class Word extends Component {
    pressWorddeleteButton = (event)=>{
        //console.log(event.currentTarget.id);
        this.props.changeFocusWordId(event.currentTarget.id)
        .then(()=>{
            this.props.userWordsDelete();
        });
    }
    render() {
        return (
            <div class="flex flex-col xl:flex-row w-full h-15 p-4 items-center bg-white rounded-lg shadow-sm xl:space-y-0 space-y-1">
                <div class="flex-1 truncate">
                    <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">{this.props.wordTitle}</h1>
                </div>
                <div class="flex-1">
                    <h2 class="subpixel-antialiased text-base text-gray-600">{this.props.MeanHide ? '숨김' : this.props.mean1}</h2>
                </div>
                <div class="flex-1">
                    <h2 class="subpixel-antialiased text-base text-gray-600">{this.props.MeanHide ? '숨김' : this.props.mean2}</h2>
                </div>
                <div class="flex-1">
                    <h2 class="subpixel-antialiased text-base text-gray-600">{this.props.wrongCount2}</h2>
                </div>
                <div class="flex flex-row flex-2">
                    <svg id={this.props.id} class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>
                    <svg onClick={this.pressWorddeleteButton} id={this.props.id} class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                </div>
            </div>
        );
    }
}
export default Word;