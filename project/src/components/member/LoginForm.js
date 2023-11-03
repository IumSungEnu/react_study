import { useTranslation } from "react-i18next";
import { useState } from 'react';

const LoginForm = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('한국어');  //상태

    const handleLanguage = (e) => {
        console.log('클릭');
        /*
        console.log(e);
        console.log(this);
        console.log('currentTarget', e.currentTarget);
        console.log('target', e.target);
        */
        const el = e.currentTarget;
        const lang = el.dataset.lang;  //.dataset : 정보(데이터) 속성
        i18n.changeLanguage(lang);
        setLanguage(lang === 'ko' ? '한국어' : 'English');
    };

    return (
        <>
            <h1>{t('로그인')}</h1> 
            <div>{t('현재 언어')} : {language}</div>
            <form>
                <input type="text" name="userId" placeholder={t('아이디')} />
                <input type="password" name="userPw" placeholder={t('비밀번호')} />
                <button type="submit">{t('로그인')}</button>
            </form>
            <button type="button" onClick={handleLanguage} data-lang="ko">한국어</button>
            <button type="button" onClick={handleLanguage} data-lang="en">English</button>
        </>
    )
};

export default LoginForm;

//리액터는 함수형태로 호출된다.
//const handleLanguage = (e) => {};  -> 이벤트 객체 e