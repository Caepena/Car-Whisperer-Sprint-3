import { useState } from 'react';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Cadastro

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>
      {isLogin ? <Login /> : <SignUp />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
      </button>
    </div>
  );
}
