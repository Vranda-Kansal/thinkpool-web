function Login() {
  return (
    <div className="card card-dash bg-base-300 w-screen mx-auto max-w-96 my-6">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Id</legend>
          <input
            type="text"
            className="input"
            placeholder="enter your email Id"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="text"
            className="input"
            placeholder="enter the password"
          />
        </fieldset>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
