import React, {Component} from 'react';
import { Header } from '../../components';
import { Login } from '../../components';

import * as service from '../../service/babelfish';

class Content extends Component {
    state = {

    }

    // 로그인 컴포먼트 pressedLoginButton 이벤트의 처리
    logindataManipulation = async(data) => {
        console.log(`데이터 연결 정상`);
        console.log(data);
        const post = await service.getToken(data.email,data.password);
        console.log(post);
    }

    render() {
        return (
            <Login sendData={this.logindataManipulation} />
        );
    }
}

export default Content;