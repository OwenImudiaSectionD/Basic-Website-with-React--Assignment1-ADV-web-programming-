export default function SignupPage( ){
  const SignupPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Signup successful!");
    };
  
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter Email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
};
