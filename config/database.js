module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: `mongodb://zneret03:9UXu6TB8yR8pSaJP@drilon7-shard-00-00.22nxh.mongodb.net:27017,drilon7-shard-00-01.22nxh.mongodb.net:27017,drilon7-shard-00-02.22nxh.mongodb.net:27017/<drilon7>?ssl=true&replicaSet=atlas-fcix3l-shard-0&authSource=admin&retryWrites=true&w=majority`,
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
