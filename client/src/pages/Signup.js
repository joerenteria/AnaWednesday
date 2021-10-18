import SignUpForm from "../components/SignUpForm";

function Signup({ onLogin }) {

return (
    <div className="page1">
          <SignUpForm onLogin={onLogin} />
    </div>
  );
}

export default Signup;
