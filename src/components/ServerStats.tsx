import Icon from "@/components/ui/icon";

const ServerStats = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500 p-3 rounded-full">
            <Icon name="Users" className="text-white" size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">347</p>
            <p className="text-slate-400">Игроков онлайн</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 p-3 rounded-full">
            <Icon name="MessageSquare" className="text-white" size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12,483</p>
            <p className="text-slate-400">Сообщений</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-purple-500 p-3 rounded-full">
            <Icon name="UserPlus" className="text-white" size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2,156</p>
            <p className="text-slate-400">Участников</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 p-3 rounded-full">
            <Icon name="Server" className="text-white" size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              IP: 185.169.134.3:7777
            </p>
            <p className="text-slate-400">Сервер</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStats;
