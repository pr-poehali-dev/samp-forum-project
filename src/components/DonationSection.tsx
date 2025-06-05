import Icon from "@/components/ui/icon";

const DonationSection = () => {
  const packages = [
    {
      name: "Silver VIP",
      price: 199,
      features: [
        "100,000$ стартового капитала",
        "VIP статус на 30 дней",
        "Особый значок в игре",
        "Приоритет в очереди",
      ],
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      name: "Gold VIP",
      price: 399,
      features: [
        "500,000$ стартового капитала",
        "Gold VIP статус на 30 дней",
        "Эксклюзивные команды",
        "Бесплатный дом в центре",
        "Персональный транспорт",
      ],
      color: "from-purple-500 to-purple-600",
      popular: true,
    },
    {
      name: "Platinum VIP",
      price: 799,
      features: [
        "2,000,000$ стартового капитала",
        "Platinum VIP на 30 дней",
        "Все виды транспорта",
        "Премиум недвижимость",
        "Административные привилегии",
        "Персональная поддержка",
      ],
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Поддержите OZRP</h2>
        <p className="text-slate-400">
          Выберите подходящий VIP пакет и получите преимущества на сервере
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${pkg.color} rounded-lg p-6 text-white ${pkg.popular ? "ring-2 ring-yellow-400" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold">{pkg.price}₽</div>
            </div>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm border border-white border-opacity-30 rounded-lg py-3 font-semibold transition-all">
              Купить пакет
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSection;
