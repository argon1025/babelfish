export let testList = {
    questions: 0, //문제 갯수
    loadingcount: -1, //문제 다 만들었는지
    data: {}
};

export function createQuestions(wordListdata) {
    console.log('단어시험 생성');
    console.log(wordListdata);
    testList.loadingcount = -1; // 카운트 초기화

    // 단어수 저장
    const wordListLength = Object.keys(wordListdata).length;

    if (wordListLength < 4) {
        console.log('단어수가 너무적음 생성실패');
        throw 'error';
    } else {
        console.log(`단어수 조건 충족 문제 생성진행 ${wordListLength}`);
        //단어수 동기화
        testList.questions = wordListLength;

        testList.data = wordListdata.map(
            (data) => {
                //현재 출제한 문제 key 증가
                testList.loadingcount++;

                //문제 출제 (문제출제량, 포함되어야할 숫자, 문제당 문항수)
                console.log(`단어수 ${wordListLength}, 로딩카운트${testList.loadingcount}`);
                let answer = random(wordListLength, testList.loadingcount, 4);
                //console.log(wordListdata[answer[0]].Mean1);
                //문제 포장
                return { id: testList.loadingcount, title: data.Word_Title, correctAnswer:data.Mean1, right:false, one: wordListdata[answer[0]].Mean1, two: wordListdata[answer[1]].Mean1, three: wordListdata[answer[2]].Mean1, four: wordListdata[answer[3]].Mean1 };
            }
        );

        testList.loadingcount = wordListLength; // 문제 로딩 완료
        console.log(`문제 생성완료`);
        console.log(testList);
        return testList;
    }
}


// 
// max = 단어 리스트 전체 갯수, exception = 배열에 무조건 포함되어야 하는수, count = 랜덤추출할 배열길이
export function random(max, exception, count) {
    let random = [];
    //console.log(`랜덤수 발급 0~${max}까지, ${exception}번호를 무조건 포함한 랜덤값, 갯수${count}`);
    random.push(exception);

    //포문 (카운트까지 반복 1부터 시작)
    //포문 현재 넣은값 기준으로 전체 한번찍 반복하는 포문 random.push(Math.floor(Math.random() * max));// 0 ~ (max - 1) 까지의 정수 값을 배열에 넣음
    for (var a = 1; random.length < count; a++) {
        random.push(Math.floor(Math.random() * max));
        //console.log(`${a}번째 값 생성`);
        //console.log(random);
        for (var b = 0; b < random.length; b++) {
            //console.log(`${a}번째 값 중복체크`);
            if (a !== b) {
                if (random[a] === random[b]) {
                    //console.log(`새로 발급한 ${random[a]}와 ${random[b]}가 중복입니다`);
                    random[a] = Math.floor(Math.random() * max);
                    //console.log(`새로 발급`);
                    //console.log(random);
                    //console.log(`----------`);
                    b = -1;
                }
            }
        }
    }
    //console.log(`결과`);
    //console.log(random);
    //console.log(`--------------------`);
    //console.log(`셔플 시작`);
    let shufflecount = 0;
    //셔플
    while (shufflecount === 0) {
        shufflecount = Math.floor(Math.random() * count)
    }
    //console.log(`${shufflecount} 이동 ${random[0]} < ${random[shufflecount]}`);
    random[0] = random[shufflecount];

    //console.log(`${shufflecount} 이동 ${random[shufflecount]} < ${exception}`);
    random[shufflecount] = exception;

    //console.log(`셔플 완료`);
    console.log(random);
    //console.log(`--------------------`);
    return random;

}
