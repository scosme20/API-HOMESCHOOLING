const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Analise do json
app.use(express.json());


// Definição dos dados

let Homeschooling = {
  professorTeorico: [
    { aulaID: 1, materia: 'Matematica', exercicios: 30,  teoria: 25,  
    data:"24/09/2021", alunosMentorados: 10 },
    { aulaID: 2, materia: 'Programação', projetos_Analisados: 20,  teoria: 30,  
    data:"10/05/2021", alunosMentorados: 20 },
    { aulaID: 3, materia: 'Física', exercicios: 20,  teoria: 30,  
    data:"21/06/2021", alunosMentorados: 15 },
    { aulaID: 4, materia: 'Português', redação: 20,  teoria: 30,  
    data:"20/03/2021", alunosMentorados: 10 },
  ],
  professorPratico: [
    { experiencia: 1, local: 'Alemanha', conteudo: 'A 2 guerra mundial',
     data:"20/04/2022", alunosParticipantes: 20 },
     { experiencia: 2, local: 'Singapura', conteudo: 'Tigres Asiáticos',
     data:"20/02/2023", alunosParticipantes: 20 }
  ],
  convivencia: [
    { atividadeSocial: 1, aprendizado: 1},
    { atividadeSocial: 2, aprendizado: 3},
  ],
};

// Rotas
app.get('/professorTeorico', (req, res) => {
  res.json(Homeschooling.professorTeorico);
});

app.get('/professorTeorico/:aulaID', (req, res) => {
  const teorico = Homeschooling.professorTeorico.find(u => u.aulaID === parseInt(req.params.aulaID));
  if (!teorico) return res.status(404).send('Aula não encontrada');
  res.json(teorico);
});

app.get('/professorPratico', (req, res) => {
  res.json(Homeschooling.professorPratico);
});

app.get('/professorPratico/:experiencia', (req, res) => {
  const pratico = Homeschooling.pratico.find(p => p.experiencia === parseInt(req.params.experiencia));
  if (!pratico) return res.status(404).send('Aula não encontrada');
  res.json(post);
});

app.get('/convivencia', (req, res) => {
  res.json(Homeschooling.convivencia);
});

app.get('/convivencia/:atividadeSocial', (req, res) => {
  const convivencia = Homeschooling.convivencia.find(c => c.atividadeSocial === parseInt(req.params.atividadeSocial));
  if (!convivencia) return res.status(404).send('Aula não encontrada');
  res.json(convivencia);
});

// Iniciando servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
