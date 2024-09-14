import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se o usuário existe no localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (email === parsedUser.email && password === parsedUser.password) {
        setIsLoggedIn(true);
        setErrorMessage('');
      } else {
        setErrorMessage('E-mail ou senha incorretos.');
      }
    } else {
      setErrorMessage('Usuário não encontrado. Por favor, cadastre-se.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>Bem-vindo(a), {email}!</h3>
          <button onClick={() => setIsLoggedIn(false)}>Sair</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
