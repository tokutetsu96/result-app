export default function TeamInput() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[32rem] -mt-32">
      <div className="space-y-5 mt-32">
        <h1 className="sm:text-3xl text-xl font-bold">
          チーム名を入力してください
        </h1>
        <div className="border-l-4 border-blue-500 rounded space-y-1">
          <div className="px-2 space-y-1">
            <span>自分のチーム名</span>
            <input
              type="text"
              className="w-full p-1 focus:outline-none focus:outline-blue-500 rounded"
            ></input>
          </div>
        </div>
        <div className="flex justify-center font-bold">
          <span>VS</span>
        </div>
        <div className="border-l-4 border-red-500 rounded space-y-1">
          <div className="px-2 space-y-1">
            <span>相手のチーム名</span>
            <input
              type="text"
              className="w-full p-1 focus:outline-none focus:outline-red-500 rounded"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
