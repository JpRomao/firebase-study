const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

//filter
/** 
/** pegar todos os dados
** db.collection("turmaA").get().then(snapshot => {
**   snapshot.forEach(document => {
**     const data = document.data();
**     console.log(data);
**   });
** })
*

/**  pegar por id
** async function getAluno() {
**   const response = await db.collection("turmaA").doc("7bpQadOMsqx3B16WPAGz").get();
**   console.log(response.data());
** }
** getAluno();
*

/**  filtrar
** db.collection("turmaA").where("nome", "==", "João").get().then(snapshot => {
**   snapshot.forEach(document => {
**     const aluno = document.data();
**     console.log(`Nome: ${aluno.nome}\r\nSobrenome: ${aluno.sobrenome}`);
**   });
** });
*
**/

//create

db.collection("turmaA").add({
  nome: "Letícia",
  sobrenome: "Pereira"
})
.then(document => {
  console.log("Documento inserido com sucesso: ", document)
}).catch(error => {
  console.log(error);
});

db.collection("turmaA").doc("GiLIH4ysD9pehPdGF92c").update({
  sobrenome: "Silva"
})
.then(() => {
  console.log("Documento alterado com sucesso");
});



