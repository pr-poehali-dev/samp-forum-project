import Icon from "@/components/ui/icon";

const RecentActivity = () => {
  const activities = [
    {
      user: "OZRP_Admin",
      action: "опубликовал обновление",
      topic: "Новая система работ v3.2",
      time: "10 минут назад",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      user: "CriminalBoss",
      action: "подал заявку",
      topic: "Заявка в банду Grove Street",
      time: "25 минут назад",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
    },
    {
      user: "PoliceOfficer",
      action: "создал жалобу",
      topic: "Нарушение ПДД игроком",
      time: "1 час назад",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=50&h=50&fit=crop&crop=face",
    },
    {
      user: "NewbiePlayer",
      action: "присоединился к OZRP",
      topic: "",
      time: "3 часа назад",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
        <Icon name="Activity" size={24} />
        <span>Последняя активность</span>
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-white">
                <span className="font-semibold text-purple-400">
                  {activity.user}
                </span>
                <span className="text-slate-300"> {activity.action}</span>
                {activity.topic && (
                  <span className="text-slate-400"> "{activity.topic}"</span>
                )}
              </p>
              <p className="text-sm text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
