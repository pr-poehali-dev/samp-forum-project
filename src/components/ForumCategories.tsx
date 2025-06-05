import Icon from "@/components/ui/icon";

const ForumCategories = () => {
  const categories = [
    {
      title: "Новости OZRP",
      description: "Последние обновления и новости сервера",
      topics: 234,
      posts: 1456,
      icon: "Newspaper",
      color: "bg-blue-500",
    },
    {
      title: "Правила сервера",
      description: "Основные правила игры на OZRP",
      topics: 45,
      posts: 892,
      icon: "Shield",
      color: "bg-green-500",
    },
    {
      title: "Жалобы на игроков",
      description: "Подача жалоб на нарушителей",
      topics: 567,
      posts: 2341,
      icon: "AlertTriangle",
      color: "bg-red-500",
    },
    {
      title: "Заявки в организации",
      description: "Подача заявок в государственные структуры",
      topics: 342,
      posts: 1789,
      icon: "Building",
      color: "bg-purple-500",
    },
    {
      title: "Продажа недвижимости",
      description: "Покупка и продажа домов, бизнесов",
      topics: 189,
      posts: 945,
      icon: "Home",
      color: "bg-yellow-500",
    },
    {
      title: "Общение игроков",
      description: "Свободное общение сообщества OZRP",
      topics: 1234,
      posts: 8765,
      icon: "MessageCircle",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Категории форума</h2>
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`${category.color} p-3 rounded-full`}>
                <Icon
                  name={category.icon as any}
                  className="text-white"
                  size={24}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="text-slate-400">{category.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-slate-400">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  {category.topics}
                </p>
                <p className="text-sm">Тем</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  {category.posts}
                </p>
                <p className="text-sm">Сообщений</p>
              </div>
              <Icon name="ChevronRight" className="text-slate-500" size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumCategories;
