import { useState, useEffect } from 'react';
import Cat from './Cat';
import useInput, { Form } from './hooks/useInput';

function App() {
  const [form, setForm] = useState<Form | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      const form: Form = JSON.parse(loggedUser);
      setForm(form);
      console.log(form);
    }
    setLoading(false);
  }, [loading]);

  const [input, setInput] = useInput(form ? form : { name: '', password: '' });

  const handleForm = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    window.alert('로그인되었습니다.');
  };

  if (loading) return <div>로딩 중...</div>;
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
    </div>
  );
}

export default App;
