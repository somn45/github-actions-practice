import { useState, useEffect } from 'react';
import Cat from './Cat';
import useInput, { Form } from './hooks/useInput';

function App() {
  const [input, setInput] = useInput({
    name: '',
    password: '',
  });

  const handleForm = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    window.alert('로그인되었습니다.');
  };

  return (
    <div>
      <Cat />
      <form>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={setInput}
          placeholder="이름"
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={setInput}
          placeholder="비밀번호"
        />
        <input type="submit" value="로그인" onClick={handleForm} />
      </form>
      <p>안녕하세요! github actions 실습 페이지입니다</p>
    </div>
  );
}

export default App;
