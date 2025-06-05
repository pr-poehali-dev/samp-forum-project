import Icon from "@/components/ui/icon";

const ForumCategories = () => {
  const categories = [
    {
      title: "Общий раздел",
      description: "Общение на любые темы",
      topics: 1234,
      posts: 8765,
      icon: "MessageCircle",
      color: "bg-blue-500",
    },
    {
      title: "Новости сервера",
      description: "Актуальные новости и обновления",
      topics: 156,
      posts: 2341,
      icon: "Newspaper",
      color: "bg-green-500",
    },
    {
      title: "Жалобы и предложения",
      description: "Report игроков и ваши идеи",
      topics: 892,
      posts: 3456,
      icon: "AlertTriangle",
      color: "bg-red-500",
    },
    {
      title: "Помощь новичкам",
      description: "Вопросы и ответы для начинающих",
      topics: 567,
      posts: 1890,
      icon: "HelpCircle",
      color: "bg-purple-500",
    },
    {
      title: "Конкурсы и события",
      description: "Участвуйте в мероприятиях сервера",
      topics: 89,
      posts: 445,
      icon: "Trophy",
      color: "bg-yellow-500",
    },
    {
      title: "Торговля",
      description: "Покупка и продажа игровых ценностей",
      topics: 234,
      posts: 1123,
      icon: "ShoppingCart",
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
