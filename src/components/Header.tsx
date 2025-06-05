import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-white font-montserrat">
                  OZRP|samp
                </h1>
                <p className="text-sm text-slate-400">
                  Официальный сервер OZRP
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              Форум
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              Донат
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              Правила
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Войти
            </button>
            <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
