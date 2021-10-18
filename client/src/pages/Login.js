import LoginForm from "../components/LoginForm";

function Login({ onLogin }) {

  return (
    <div className="page1">
          <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default Login;
