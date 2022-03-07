const admin = require('firebase-admin');

const initialize = () => {
  if (!admin.apps.length > 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        type: 'service_account',
        project_id: 'essay-backend-62818',
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3occ6MEmJPHPN\nmJsqGT+YEZIbvzOispPgosER6OL36ybj99xSR/9N30z9TcxRNmzssJZZoFycYdKY\ny7UW00xR0YmNE0nCSTv7PJ2q9mrJGiDasS/P3B9g8OHx0oYmIIQXUHmQHZW6PtGK\nCpKsnJi+1nYJWGeTV36DfpiV4NPJ/OKV9u/vm7r86ASzwBBNhrSTiXXH9tblp7KR\nzxVN6MxApTttmr/mTw36Vse7BBKOA7OUcCqjkeMSim/cFefBBtI2J5LXoTt8lw0V\nQ8YoCj5GE/BUYHTr6aNtCVB/cCiYSk0JlT8iaR8NLAkPWAToKwlfVjnGI5zSvA3a\nAjY2lze3AgMBAAECggEAGFZ6vz2TIXs/peop9oRuJ0t83+yRfWjJrKYljKgfHNiv\nyNsa+lTMg5eq7o+XGtRpz10AMFTOsXNNpC6ri6DpppZs8qOxzOxD5OJ9yyDpukma\nPSHqwlPcXM7QQ2qxmPAKUcS6t90T8SFOSEtqcTI4FGL8NfTflWmtPORUeNjZeRWv\niMQvrnyqteV5o2U9W6eprTLUCwJqkUxMtuQvq2L0YGQuFiro6l6DHLx0FHIxKnRo\nYzgHO/pKQn28OAQ+SiQSyarxbYQzcCi+kIiXMJTFjl9A6rdeTyx6MOnikwNKi9ya\nIYjyWyum22CvfFu/1hin0wtwqixCeK42zgdlgBEeQQKBgQDsqJxnEl/AYgGJ5dnK\nvszCX20rIVMoBBU+8sUe87+MW0xNRfmEFSQCdf4I3VCYopz6NIQl5E3frs82E3di\nNnFjbJU4vDYmkstKztZ45HwU72IuPgwdJC/mbiQvv5J3yfAWfTKhjGvBSR6aLiUh\n8iuJ9As8O8WcME7rinNBd2hMUQKBgQDGo70yMc+LATle5b8cF695ON7GYdYnI2N4\nxfmtRb9j/WF2mm0YDvW289NE4aR0495q3tG3LL3JmZuNFLRDc8LaMY8yEdI1Q4Fo\nSWYtdTBB4pthPaM9l6lt2ZSQiuDE0EOE8RdYcIAMJ68JOhxsMMCL3Y0EkQAziR5W\n0vEdMv4phwKBgEYO8CYPKWthWAVDlwLPEvyjlUTEW8Kn2sZExhgQnm7lhCQICAKS\n45Ma7PYg1kApO4FSVKCHAoqqTEs83gWkClMdjNs71Gf84tOlgZZORXFJIG6CDcH+\nuXNkva+o7aoqjLmLnJZ4ZFnW1IleCb4P29W9+il9pFVFc8eEt/P0blrRAoGAHQuu\nS5uq/Gl2aSDxG/t+phwhvyJpPRnYnr1cL/EF9moDiWM1VpJBbbojh2vzL0BusnPY\neI9rRQJYE34WidJwiJU8mhavBSjU0FoDPdxn7QpkrAhmSUhW9wAc0DHugfjuFo9m\nWYFByAU5fADqTQun7Au+Zg+J1v9S12FK7nkZXxsCgYANCGPLy4BI2eOP5yN9YrjA\ny8zeEdvcIM+mhZgZVBhu+oLGGchzbsVerwT77q4/OMBJMVBVmL+hH5xfCugTxndA\nu3yD12vRJmzn+aYoE4bqSAP6huOCDaRCSpgaB3ZMhl1qFvCIZ/d2hLLtm6usKUfU\nJ137OO2mA/mXvRFj2HsbIQ==\n-----END PRIVATE KEY-----\n",
        client_email:
          'firebase-adminsdk-m5uic@essay-backend-62818.iam.gserviceaccount.com',
      }),
      databaseURL: 'https://essay-backend-62818.firebaseio.com',
    });
  }
  const auth = admin.auth();
  const firestore = admin.firestore();
  return { auth, firestore };
};

module.exports = initialize;
