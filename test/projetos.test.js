const Projeto = require('../src/models/projetosModel')

describe('Teste de model', () => {
  const projetos = new Projeto({
    id: '1',
    nome: 'Barbara Sports',
    contato: 48996133331,
    local: 'Florianópolis',
    regiao: 'Centro',
    vagasDisponiveis: true,
    diasDaSemana: ['segunda', 'quarta'],
    modalidades: ['voleibol'],
    idades: '11 a 14 anos'
  })

  it('Testar nome', () => {
    expect(projetos.nome).toBe('Barbara Sports')
  })
  it('Testar contato', () => {
    expect(projetos.contato).toStrictEqual(48996133331)
  })
  it('Testar local', () => {
    expect(projetos.local).toBe('Florianópolis')
  })
  it('Testar região', () => {
    expect(projetos.regiao).toBe('Centro')
  })
  it('Testar vagas', () => {
    expect(projetos.vagasDisponiveis).toBe(true)
  })
  it('Testar dias da semana', () => {
    expect(projetos.diasDaSemana).toStrictEqual(['segunda', 'quarta'])
  })
  it('Testar modalidades', () => {
    expect(projetos.modalidades).toStrictEqual(['voleibol'])
  })
  it('Testar idade', () => {
    expect(projetos.idades).toBe('11 a 14 anos')
  })
  it('Novo projeto no banco de dados', () => {
    projetos.save().then((dados) => {
      expect(dados.nome).toBe(' ')
    })
  })
  it('Atualiza projeto e salva no banco de dados', () => {
    projetos.nome = 'atualiza nome teste'
    projetos.save().then((dados) => {
      expect(dados.nome).toBe('novo nome teste')
    })
  })
})


