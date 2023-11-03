import commons from './commons_ko';
import errors from './errors_ko';
import validations from './validations_ko';


export default { ...commons, ...errors, ...validations };
// ... 나머지 부분들을 한꺼번에 가져온다.
//값을 펼쳐준다.(전개 연산자)