export function pSearch(name) {
  const joko = [
    {
      id: 1,
      title: "Joko Widodo - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Joko_Widodo",
    },
    {
      id: 2,
      title: "Joko Widodo - Detik",
      link: "https://www.detik.com/tag/jokowi",
    },
    {
      id: 3,
      title: "Joko Widodo - Web",
      link: "https://www.cnnindonesia.com/tag/jokowi",
    },
  ];
  const puan = [
    {
      id: 1,
      title: "Puan Maharani - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Puan_Maharani",
    },
    {
      id: 2,
      title: "Puan Maharani - Detik",
      link: "https://www.detik.com/tag/puan",
    },
    {
      id: 3,
      title: "Puan Maharani - Web",
      link: "https://www.cnnindonesia.com/tag/puan",
    },
  ];
  const prabowo = [
    {
      id: 1,
      title: "Prabowo Subianto - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Prabowo_Subianto",
    },
    {
      id: 2,
      title: "Prabowo Subianto - Detik",
      link: "https://www.detik.com/tag/prabowo",
    },
    {
      id: 3,
      title: "Prabowo Subianto - Web",
      link: "https://www.cnnindonesia.com/tag/prabowo",
    },
  ];
  const anies = [
    {
      id: 1,
      title: "Anies Baswedan - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Anies_Baswedan",
    },
    {
      id: 2,
      title: "Anies Baswedan - Detik",
      link: "https://www.detik.com/tag/anies",
    },
    {
      id: 3,
      title: "Anies Baswedan - Web",
      link: "https://www.cnnindonesia.com/tag/anies",
    },
  ];
  const rizal = [
    {
      id: 1,
      title: "Rizal Ramli - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Rizal_Ramli",
    },
    {
      id: 2,
      title: "Rizal Ramli - Detik",
      link: "https://www.detik.com/tag/rizal-ramli",
    },
    {
      id: 3,
      title: "Rizal Ramli - Web",
      link: "https://www.cnnindonesia.com/tag/rizal-ramli",
    },
  ];

  if (name === "Jokowi") {
    return joko;
  }
  if (name === "Prabowo") {
    return prabowo;
  }
  if (name === "Puan Maharani") {
    return puan;
  }
  if (name === "Anies Baswedan") {
    return anies;
  }
  if (name === "Rizal Ramli") {
    return rizal;
  }
}
