require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJNhBFuJlgaZUwQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOUuRnTEAiIiXlAavGzsQwkFlFwtCgUn*PcNdHp6HnZne3kqsjIyT548p76DvMAVslALxt9BSfAVUtQdaVsiMAZqHYaIgD4IIIVgDKwJtBxHYPF6PYhOwu1dX13UjE3n7i6eS+F1bZlXNZzujGz0Bh59UNanFPu*KRhPwpV8CJswHvgjjsn9+ZBLj3vvQI6cY8ktHTQuC+2Yxe4beHQVISY4j*QyRhkiMLVQa0NMvgb*MGuPUhMEjn6zqlslntlY2RireznnRfPaLvfavLgSswnY5Gvw+WJ1z1h6ziOfqWJtE7OL3pSEGWYWeCLr6XQW5oPNIpHu5gt+haMcBWaAcopp+2Xe4aL1jhlZ7aKFOlgfN0smbkvRnkoRDwdsphoVs9hHhTs1Dl8D7rqNW9qifG*tw7Q3ukhBcqSj7b5unP36wgq6H2RVb8FdhptfgdvkQyvJ*+FdnO52O8taz2*uvdco5mYiXYZR7C1qroTS6pgpgrsNZG3ubr4G*0hIKt10baJcL1qyxY6ZCE065XXamD1u6*M6MhOX4ZXY*YQPaU1+h5L3iOXgnhOx7EGSbAGrZc*WOcfrvc9EJ59NdYnoupbeFmh38xitOKNSDK0kNmT*KObx7KRCwWBEbYmiWX1pyp2OsPL2nChBrRmAMfPoA4IiXFECKS7yZ0wa9QEMrg7yCaJPegG+7e0y9+yZceLnOFekxAiEqeE5MFpEdnxeQUvfHPmAT5ZvoA9KUvioqlAwwxUtSLtEVQUjVIHxn3*1QY4a+lpc145j+iDEpKJuXpdpAYOPrX5cQt8v6pw6be5r3QERMB5+hhGlOI+qjsc6h8SP8RVpMaQVGIcwrdDPCRFBARhTUqOfrtWKoCN+r3J7bTaTQB9kz4XgAIwBy3ECJ7CCPBSkMcv9UX27dWVhWX7LEQV9kD7TZHYkiiwnjESJE4ZdYhd**ATY1QsQhTitwBhoi7M2lDcT3SKzW7UxDMWPFC1SwOdAH8p4Ma8XotCKeCjP0LZenvfnwiq9+3Wnvfu5up4akVHcd1y23yn82z8UAWPgSGpR6oa*qFeyJ+qziKknhaoty73nUk0W5CBro+06Sry4J9sxIjiccHipF+*5lQjlHW1k6BWCHLuTRrl4RzfSzpPbW9ctQFfso1+bIVaZc4v7xhyIyep+CueTZoD3dY5zoVzlsYVaKi+zpmLZ3jIqzt7ydHe1yWVK4F3d43ZyVZcHVgqX6iXK+aPsCnLUxJuXZp+eSX+8Vfippm5V3W+I0dP6OewW+N+rewHvFDZ89H+p8eMx+RdDqltrXft1Qe0tl5zOJsOL2sXzJSZKuPntPd4W6mXJUCFlojV4PP7qgzKFNCxI1j2ZeUAKHIA+IEXdSdbMw+I3zTTFNPXoNXkKK6p82uAdZ6iiMCs7swo8N5QFYfjKsklRzmAVdyQYvJLVnaZbpSwdCumHq4DSfdNkCx5*A1BLAQIUAxQAAAgIAJNhBFuJlgaZUwQAAHEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233535259057',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'jayvon33',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
