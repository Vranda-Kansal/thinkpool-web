function FormHeader({ isLoginPage }) {
  return (
    <div className="flex flex-col items-center gap-0.5 mb-1">
      <h2 className="text-xl font-semibold">
        {isLoginPage ? "Welcome" : "Create your account"}
      </h2>
      <p className="text-sm text-slate-500 font-medium">
        Join thousands of developers building together.
      </p>
    </div>
  );
}
export default FormHeader;
