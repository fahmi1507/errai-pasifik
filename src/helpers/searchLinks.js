export function search(name) {
  const tom = [
    {
      id: 1,
      title: "Tom Cruise - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Tom_Cruise",
    },
    {
      id: 2,
      title: "Tom Cruise - Detik",
      link: "https://www.detik.com/tag/tom-cruise",
    },
    {
      id: 3,
      title: "Tom Cruise - Web",
      link: "http://tomcruise.com/",
    },
  ];
  const kevin = [
    {
      id: 1,
      title: "Kevin Hart - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Kevin_Hart",
    },
    {
      id: 2,
      title: "Kevin Hart - Kompas",
      link: "https://www.kompas.com/tag/Kevin-Hart",
    },
    {
      id: 3,
      title: "Kevin Hart - Liputan6",
      link: "https://www.liputan6.com/tag/kevin-hart",
    },
  ];
  const rock = [
    {
      id: 1,
      title: "Dywane Johson - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Dwayne_Johnson",
    },
    {
      id: 2,
      title: "Dywane Johson - Detik",
      link: "https://www.detik.com/tag/dwayne-johnson",
    },
    {
      id: 3,
      title: "Dywane Johson - Web",
      link: "https://www.tempo.co/tag/dwayne-johnson",
    },
  ];
  const jack = [
    {
      id: 1,
      title: "Jack Black - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Jack_Black",
    },
    {
      id: 2,
      title: "Jack Black - Detik",
      link: "https://www.kapanlagi.com/jack-black/profil/",
    },
    {
      id: 3,
      title: "Jack Black - Web",
      link: "https://www.liputan6.com/tag/jack-black",
    },
  ];
  const bruce = [
    {
      id: 1,
      title: "Bruce Willis - Wikipedia",
      link: "https://id.wikipedia.org/wiki/Bruce_Willis",
    },
    {
      id: 2,
      title: "Bruce Willis - Detik",
      link: "https://www.detik.com/tag/bruce-willis",
    },
    {
      id: 3,
      title: "Bruce Willis - Web",
      link: "https://www.liputan6.com/tag/bruce-willis",
    },
  ];

  if (name === "Tom Cruise") {
    return tom;
  }
  if (name === "Kevin Hart") {
    return kevin;
  }
  if (name === "Dwayne Jhonson") {
    return rock;
  }
  if (name === "Jack Black") {
    return jack;
  }
  if (name === "Bruce Willis") {
    return bruce;
  }
}
