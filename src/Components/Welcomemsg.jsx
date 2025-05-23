function WelcomeMsg(params) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold md:text-[40px] mt-10">
        Welcome to the Todo App
      </h1>
      <p className="text-gray-600 font-medium md:text-[30px] mt-10">
        Manage your tasks efficiently
      </p>
    </div>
  );
}

export default WelcomeMsg;
