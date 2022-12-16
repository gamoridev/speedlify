module.exports = {
  name: "Sample", // optional, falls back to object key
  description: "The default sites that get tested",
  options: {
    frequency: 1, // (in minutes), 23 hours
  },
  urls: [
    "https://www.emcasa.com/",
    "https://emcasa.com/imoveis/sp/sao-paulo",
    "https://emcasa.com/imoveis/sp/sao-paulo?nextView=true",
    "https://emcasa.com/imoveis/sp/sao-paulo/perdizes/rua-diana/id-1451",
    "https://emcasa.com/imoveis/sp/sao-paulo/perdizes/rua-diana/id-1451?nextView=true",
  ],
};
