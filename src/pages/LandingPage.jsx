import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="grid gap-2">
      <Link to="/">LandingPage</Link>
      <Link to="/signup">SignupPage</Link>
      <Link to="/login">LogInPage</Link>
      <Link to="/dashboard">DashboardPage</Link>
    </div>
  );
};

export default LandingPage;
