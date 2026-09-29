const sheets = {
  "products-json": `# Products → JSON

Задача от занятието **Data Formats**. Таблицата става JSON масив. Цената е число. Ключовите думи са масив от низове.

---

# Условие

Четири продукта. Полета: Product (string), Price (number), Description (string), Key Words (масив от низове).

| Product | Price | Description | Key Words |
|---|---|---|---|
| Apple | 1.50 | Fresh green apples | Juicy, Green, Crunchy |
| Banana | 0.30 | Ripe yellow bananas | Sweet, Yellow, Soft |
| Orange Juice | 3.00 | Freshly squeezed orange juice | Citrus, Vitamin C, Fresh |
| Chocolate Cake | 5.00 | Rich and moist chocolate cake | Chocolatey, Rich, Creamy |

# Решение

\`\`\`json
[
  {
    "Product": "Apple",
    "Price": 1.50,
    "Description": "Fresh green apples",
    "KeyWords": ["Juicy", "Green", "Crunchy"]
  },
  {
    "Product": "Banana",
    "Price": 0.30,
    "Description": "Ripe yellow bananas",
    "KeyWords": ["Sweet", "Yellow", "Soft"]
  },
  {
    "Product": "Orange Juice",
    "Price": 3.00,
    "Description": "Freshly squeezed orange juice",
    "KeyWords": ["Citrus", "Vitamin C", "Fresh"]
  },
  {
    "Product": "Chocolate Cake",
    "Price": 5.00,
    "Description": "Rich and moist chocolate cake",
    "KeyWords": ["Chocolatey", "Rich", "Creamy"]
  }
]
\`\`\`

# Защо е така

* Коренът е масив, защото редовете са няколко еднакви записа.
* \`Price\` е без кавички — иначе става низ и сравнението \`1.50\` срещу \`"1.50"\` се чупи.
* Ключовите думи не се лепят в един текст. Всяка дума е елемент, за да може тестът да търси конкретна дума.
* След последния елемент няма запетая.
`,

  "countries-yaml": `# Countries → YAML

Задача от занятието **Data Formats**. Пет държави като блоков списък. Езиците са вложен масив.

---

# Условие

Полета: Name (string), Capital (string), Population в милиони (number), Languages (масив от низове).

| Country | Capital | Population (mil.) | Languages |
|---|---|---|---|
| Switzerland | Bern | 8.5 | German, French, Italian, Romansh |
| Canada | Ottawa | 38 | English, French |
| Belgium | Brussels | 11.5 | Dutch, French, German |
| South Africa | Pretoria | 59.3 | Zulu, Xhosa, Afrikaans, Others |
| India | New Delhi | 1380 | Hindi, Tamil, Telugu, Urdu, Others |

# Решение

\`\`\`yaml
- name: Switzerland
  capital: Bern
  population: 8.5
  languages:
    - German
    - French
    - Italian
    - Romansh
- name: Canada
  capital: Ottawa
  population: 38
  languages:
    - English
    - French
- name: Belgium
  capital: Brussels
  population: 11.5
  languages:
    - Dutch
    - French
    - German
- name: South Africa
  capital: Pretoria
  population: 59.3
  languages:
    - Zulu
    - Xhosa
    - Afrikaans
    - Others
- name: India
  capital: New Delhi
  population: 1380
  languages:
    - Hindi
    - Tamil
    - Telugu
    - Urdu
    - Others
\`\`\`

# Защо е така

* Всяка държава започва с \`-\` на едно и също ниво.
* \`capital\`, \`population\` и \`languages\` са с един и същ отстъп — полета на един обект.
* Езиците са с по-дълбок отстъп, защото са деца на \`languages\`.
* Низовете не са в кавички. Числата също не са.
* Интервали, не таб. Един грешен отстъп мести полето при съседа.
`,

  "cities-xml": `# Cities → XML

Задача от занятието **Data Formats**. Пет града под един корен. Забележителностите са отделни елементи, не един низ.

---

# Условие

Полета: Name (string), Country (string), Population (number), Landmarks (масив от низове).

| City | Country | Population | Landmarks |
|---|---|---|---|
| Paris | France | 2161000 | Eiffel Tower, Louvre Museum |
| Tokyo | Japan | 13960000 | Tokyo Tower, Sensoji Temple |
| Cairo | Egypt | 9500000 | Pyramids of Giza, Egyptian Museum |
| New York | USA | 8419000 | Statue of Liberty, Central Park |
| Rio de Janeiro | Brazil | 6748000 | Christ the Redeemer, Sugarloaf Mountain |

# Решение

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<cities>
  <city>
    <name>Paris</name>
    <country>France</country>
    <population>2161000</population>
    <landmarks>
      <landmark>Eiffel Tower</landmark>
      <landmark>Louvre Museum</landmark>
    </landmarks>
  </city>
  <city>
    <name>Tokyo</name>
    <country>Japan</country>
    <population>13960000</population>
    <landmarks>
      <landmark>Tokyo Tower</landmark>
      <landmark>Sensoji Temple</landmark>
    </landmarks>
  </city>
  <city>
    <name>Cairo</name>
    <country>Egypt</country>
    <population>9500000</population>
    <landmarks>
      <landmark>Pyramids of Giza</landmark>
      <landmark>Egyptian Museum</landmark>
    </landmarks>
  </city>
  <city>
    <name>New York</name>
    <country>USA</country>
    <population>8419000</population>
    <landmarks>
      <landmark>Statue of Liberty</landmark>
      <landmark>Central Park</landmark>
    </landmarks>
  </city>
  <city>
    <name>Rio de Janeiro</name>
    <country>Brazil</country>
    <population>6748000</population>
    <landmarks>
      <landmark>Christ the Redeemer</landmark>
      <landmark>Sugarloaf Mountain</landmark>
    </landmarks>
  </city>
</cities>
\`\`\`

# Защо е така

* \`cities\` е единственият root. Документ с два корена не е валиден XML.
* Всеки град е елемент \`city\` с отварящ и затварящ таг.
* Населението е текст между тагове. XML няма отделен тип „число“ — проверката после парсва текста.
* Всяка забележителност е собствен \`landmark\`, за да може да се брои и търси по име.
`,

  "greeting-moq": `# Greeting с Moq

Примерът от занятието **Unit Testing with Mocking**. \`GreetingProvider\` не вика \`DateTime.Now\`. Часът идва от \`ITimeProvider\`, а в теста Moq го фиксира.

---

# Договорът

\`\`\`csharp
public interface ITimeProvider
{
    DateTime GetCurrentTime();
}

public class GreetingProvider
{
    private readonly ITimeProvider _timeProvider;

    public GreetingProvider(ITimeProvider timeProvider)
    {
        _timeProvider = timeProvider;
    }

    public string GetGreeting()
    {
        var hour = _timeProvider.GetCurrentTime().Hour;
        if (hour >= 5 && hour < 12) return "Good morning!";
        if (hour >= 12 && hour < 18) return "Good afternoon!";
        if (hour >= 18 && hour < 22) return "Good evening!";
        return "Good night!";
    }
}
\`\`\`

# Тест за 9:00

\`\`\`csharp
[TestFixture]
public class GreetingTests
{
    private Mock<ITimeProvider> mockTimeProvider;
    private GreetingProvider greetingProvider;

    [SetUp]
    public void Setup()
    {
        mockTimeProvider = new Mock<ITimeProvider>();
        greetingProvider = new GreetingProvider(mockTimeProvider.Object);
    }

    [Test]
    public void GreetingAt9AmShouldBeGoodMorning()
    {
        mockTimeProvider
            .Setup(tp => tp.GetCurrentTime())
            .Returns(new DateTime(2024, 1, 1, 9, 0, 0));

        string result = greetingProvider.GetGreeting();

        Assert.That(result, Is.EqualTo("Good morning!"));
    }
}
\`\`\`

# Останалите часове

| Час в Returns | Очакван поздрав |
|---|---|
| 09:00 | Good morning! |
| 13:00 | Good afternoon! |
| 19:00 | Good evening! |
| 23:00 | Good night! |

# Защо е така

* **Arrange** — mock-ът връща фиксиран \`DateTime\`.
* **Act** — вика се само \`GetGreeting\`.
* **Assert** — сравнява се точният низ.
* \`SetUp\` сглобява mock-а преди всеки тест, за да не остане настройка от предишния.
* Истинският \`SystemTimeProvider\` си остава за приложението. В теста не участва.
`,
};
