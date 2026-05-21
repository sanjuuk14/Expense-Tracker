function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
          <p className="text-slate-500 mt-2">{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
