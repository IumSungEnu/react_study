import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => { 
    //비구조화를 통해 출력
    //const {name, favoriteNumber, children } = props;

    name = name || "이름없음"; //App에 name이 없어도 이렇게 name에 이름을 지정할 수 있다.

    return (
        <>
            <div>나의 멋진 두번째 컴포넌트</div>
            <div>이름 : {name}</div>
            <div>좋아하는 숫자 : {favoriteNumber}</div>
            <div>내용 : {children}</div>
        </>
    );
};

MyComponent.defaultProps = {
    name : '(기본이름)',
}

MyComponent.propTypes = {
    favoriteNumber : PropTypes.number.isRequired,
}

export default MyComponent;

//여기서 props는 MyComponent = ()에서 '()' 이다.
